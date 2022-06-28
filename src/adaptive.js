window.addEventListener('resize', adptive)
adptive()

function adptive () {
  let width = window.innerWidth
  let height = window.innerHeight
  adaptive_header(width, height)
  
}

function adaptive_header (w,h) {
  let navigationWrapper = document.querySelector('.header-body__navigation-wrapper')
  let navigation = document.querySelector('.navigation')
  let navigationRightContainer = navigation.querySelector('.navigation__right-container')
  let navPanel = document.querySelector('.nav')
  let mobileButtons = document.querySelector('.header-mobile__buttons')
  let mobileNav = document.querySelector('.header-mobile__nav')
  
  if (w<710) {
    mobileButtons.appendChild(navigation)
    mobileNav.appendChild(navPanel)
    
  } else {
    navigationRightContainer.prepend(navPanel)
    navigationWrapper.prepend(navigation)
  }
}

