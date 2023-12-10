function myFunction(){
  const element = document.getElementById("showmore");
  const rect = element.getBoundingClientRect();
  const but = document.getElementById("showmapbut");
  let rectTop= rect.top;
  const windowHeight = window.innerHeight;
  

  if(windowHeight>=rectTop) {
  but.style.display = "none";
  // document.getElementById("demoA").innerHTML= "ScrollY:" + scrollY;
    
  } else {
  but.style.display = "flex";
  }
};
window.onscroll= myFunction;