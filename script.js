next.addEventListener("click",()=>{
   fetch("https://candaan-api.vercel.app/api/text/random?count=2")
   .then(respons => respons.json())
   .then(result =>{
     console.log(result)
 let data = result.data
 rs.innerText = data 
 cip.value = rs.innerText 
 document.querySelector('.loading').style.display = "none";
   });
document.querySelector('.loading').style.display = "block";
 });
 
cp.addEventListener("click",()=>{
 cip.select();
document.execCommand("copy");
if(cp){
let b = setInterval(()=>{
cp.style.display = "none";
bm.style.display = "block";
},200)
setTimeout(()=>{
 cp.style.display = "block";
 bm.style.display = "none";
clearInterval((b))
},500)
}
 })
 tog.addEventListener("click",()=>{
window.open("https://github.com/guns-joy/teks-meme-receh.git","_blank");
 })
