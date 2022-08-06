


var menuicon=document.querySelector('.menubaricon');
menuicon.addEventListener('click',function(){
var navbar=document.querySelector('.navbar');
if(navbar.style.display==='block'){
    navbar.style.display='none';

}
else{
    navbar.style.display='block';

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
sr.reveal('.copyright', {
   duration: 200 ,
   origin: 'left', 
  duration: 2000 ,
  delay:200,
  distance:'5000px',
  easing:'ease-in-out',
  });
  sr.reveal('.contactsection', {
    duration: 200 ,
    origin: 'left', 
   duration: 2000 ,
   delay:200,
   distance:'20000px',
   easing:'ease-in-out',
   });

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
