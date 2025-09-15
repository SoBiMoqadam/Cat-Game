const BOT_TOKEN = ''; 
const BOT_ID = '';
const HOOK = BOT_TOKEN.split(":")[0];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const appurl = `${url.protocol}//${url.hostname}`
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cat Game</title>
<style>
  body,html{height:100%;margin:0;display:flex;justify-content:center;align-items:center;font-family:sans-serif;background:#000;color:#fff}
  #container{text-align:center;}
  #bar{margin-left:auto;margin-right:auto;width:300px;height:25px;border:2px solid #ff69b4;margin-top:20px;position:relative;overflow:hidden;border-radius:12px}
  #fill{height:100%;width:0;background:#ff1493;border-radius:12px}
  #msg{margin-top:10px;font-size:20px;color:#ff69b4}
  #percent{margin-top:5px;font-size:16px}
</style>
</head>
<body>
<div id="container">
  <img src="${appurl}/img2.png" style="width: 70vw;" alt="centered">
  <div id="msg">Loading...</div>
  <div id="bar"><div id="fill"></div></div>
  <div id="percent">0%</div>
</div>
<script>
const min=70,max=90;
const target=Math.floor(Math.random()*(max-min+1))+min;
const duration=(Math.random()*3+2)*1000;
const fill=document.getElementById('fill');
const percent=document.getElementById('percent');
let start=null;
function animate(ts){
  if(!start) start=ts;
  const progress=Math.min((ts-start)/duration,1);
  const current=progress*target;
  fill.style.width=current+'%';
  percent.innerText=Math.floor(current)+'%';
  if(progress<1){
     requestAnimationFrame(animate);
 }else{
   setTimeout(()=>{document.body.innerHTML='<div style="color:red;font-size:30px;text-align:center;margin-top:40vh;">Error: Bad connection</div>';},1000);
  }
}
requestAnimationFrame(animate);
</script>
</body>
</html>`;

    return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=UTF-8" }});
  }
};