const button = document.getElementById("showmapbut");
const div8 = document.getElementById("showmore");
let scrollThresshold= 250;

window.onscroll = function(){
    const div8Rect = div8.getBoundingClientRect();
    const scrollY= window.scrollY;


    // Check if the "showmore" div is in the viewport
    if (scrollY>= scrollThresshold && div8Rect.top && div8Rect.bottom) {
        button.style.display = "none";
    } else {
        button.style.display = "block";
    };

}



    
