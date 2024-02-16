
// MENU-BURGUER
const openMenu = document.querySelector('.menu-mobile');
const itemMenu = document.querySelector('.menu-item');

openMenu.onclick = function(){
  this.classList.toggle('active')
  itemMenu.classList.toggle('active')
}


// BUTTON SEE MORE COFFEE
const buttonMoreCombo = document.querySelector('.button-more');
const buttonMoreCoffee = document.querySelector('.button-more-coffee');
const seeMoreCoffee = document.querySelectorAll('div.coffee-extra');
const seeMoreCombo = document.querySelectorAll('div.combo-extra');

buttonMoreCoffee.onclick = function(){
  this.classList.toggle('visible')

  for(let i = 0; i < seeMoreCoffee.length; i++){
    seeMoreCoffee[i].classList.toggle('visible');
  }
}


// BUTTON SEE MORE COMBOS

buttonMoreCombo.onclick = function(){
  this.classList.toggle('visible')

  for(let i = 0; i < seeMoreCombo.length; i++){
    seeMoreCombo[i].classList.toggle('visible');
  }

}

