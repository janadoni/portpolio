


var menuicon=document.querySelector('.menubaricon');
menuicon.addEventListener('click',function(){
var navbar=document.querySelector('.navbar');
if(navbar.style.display==='none'){
    navbar.style.display='block';
    navbar.style.transition="all 2s";

}
else{
    navbar.style.display='none';
    navbar.style.transition="all 2s";

}

})



// window.sr=ScrollReveal();
// sr.reveal('.first',{
//     duration:10000,
//     origin:'left'
// })
// GENERAL SETTING
window.sr = ScrollReveal({ reset: true});

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('.first', { 
  origin: 'bottom', 
  duration: 2000 ,
  delay:200,
  distance:'120px',
  easing:'ease-in-out',
});

sr.reveal('.about', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});
