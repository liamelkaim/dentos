import http from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
mkdirSync(path.join(root,'data'),{recursive:true});
const db=new DatabaseSync(process.env.DATABASE_PATH||path.join(root,'data/dentos.sqlite'));
db.exec(readFileSync(path.join(root,'migrations/001_catalog.sql'),'utf8'));
export function validateCourse(x){return x&&typeof x.code==='string'&&/^[A-Za-z0-9 -]{2,20}$/.test(x.code.trim())&&typeof x.name==='string'&&x.name.trim().length>1&&x.name.trim().length<=180&&Number.isInteger(x.year)&&x.year>=1&&x.year<=5&&typeof x.source==='string'&&x.source.length<=500;}
export const server=http.createServer(async(req,res)=>{
const send=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'");res.setHeader('Referrer-Policy','no-referrer');
const u=new URL(req.url,'http://localhost');
try{
if(u.pathname==='/api/courses'){
if(req.method==='GET')return send(200,db.prepare('SELECT * FROM courses ORDER BY code').all());
if(req.method==='POST'){
if(req.headers.origin&&req.headers.origin!==`http://${req.headers.host}`&&req.headers.origin!==`https://${req.headers.host}`)return send(403,{error:'origin'});
if(!req.headers['content-type']?.startsWith('application/json'))return send(415,{error:'type'});
let body='';for await(const chunk of req){body+=chunk;if(body.length>4096)return send(413,{error:'size'});}
let x;try{x=JSON.parse(body)}catch{return send(400,{error:'invalid'})}if(!validateCourse(x))return send(400,{error:'invalid'});
try{const r=db.prepare('INSERT INTO courses(code,name,year,source) VALUES(?,?,?,?)').run(x.code.trim().toUpperCase(),x.name.trim(),x.year,x.source.trim());return send(201,{id:Number(r.lastInsertRowid)});}catch(e){if(String(e).includes('UNIQUE'))return send(409,{error:'duplicate'});throw e;}
}return send(405,{error:'method'});}
if(req.method!=='GET')return send(405,{error:'method'});
const files={'/':'index.html','/app.js':'app.js','/style.css':'style.css'};if(!files[u.pathname])return send(404,{error:'missing'});
const file=files[u.pathname];res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8');res.end(readFileSync(path.join(root,'public',file)));
}catch{send(500,{error:'server'});}});
const arg=name=>{const i=process.argv.indexOf(name);return i<0?undefined:process.argv[i+1]};
if(process.env.NODE_ENV!=='test')server.listen(Number(arg('--port')||process.env.PORT||3000),arg('--host')||process.env.HOST||'127.0.0.1',()=>console.log('DentOS ready'));
