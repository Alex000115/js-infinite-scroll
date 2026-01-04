const list = document.getElementById('list');
let count = 0;

function load(){
  for(let i=0;i<10;i++){
    count++;
    const li = document.createElement('li');
    li.innerText = `Item ${count}`;
    list.appendChild(li);
  }
}

window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
    load();
  }
});

load();
