//navbar hide 
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})


// header scroll
let nav=document.querySelector(".navbar");
window.onscroll=function(){
if(document.documentElement.scrollTop >50){
  nav.classList.add("header-scrolled");
}
else{
  nav.classList.remove("header-scrolled");
}
}


//counter
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end > start ? 1: -1,
        step=Math.abs( Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5787,2500);
    counter("count3",0,1400,3000);
    counter("count4",0,7110,3000);
});


//about-see more
var dd = document.getElementById("dd");
var button = document.getElementById("dd");

button.onclick = function () {

  if(dd.className == "open"){
    //shrink the box
    dd.className = "";
    button.innerHTML = "";
  } else {
    //expand the box
    dd.className = "open";
    button.innerHTML = "";
  }
};
   

 