
const openMenu = document.querySelector('.menu-mobile');
const itemMenu = document.querySelector('.menu-item');
// const navBar = document.querySelector('.navbar');
// const pennywiseMobTheme = document.querySelector('.pennywise-mobile');
// const pennywiseDeskTheme = document.querySelector('.pennywise-desktop');
// const sectionUmTheme = document.querySelector('.section-1');
// const titleTheme = document.querySelector('.title');
// const arrowDonwTheme = document.querySelector('.arrow-donw');
// const sectionDoisTheme = document.querySelector('.section-2');
// const jorgeTheme = document.querySelector('.jorge');

openMenu.onclick = function(){
  this.classList.toggle('active')
  itemMenu.classList.toggle('active')
//   pennywiseMobTheme.classList.toggle('active')
//   pennywiseDeskTheme.classList.toggle('active')
//   navBar.classList.toggle('active')
//   sectionUmTheme.classList.toggle('active')
//   titleTheme.classList.toggle('active')
//   arrowDonwTheme.classList.toggle('active')
//   sectionDoisTheme.classList.toggle('active')
//   jorgeTheme.classList.toggle('active')
}