// get html element with class .js-header
const header = document.querySelector('.js-header');
// listen to body scroll event and console.log scroll position
  document.addEventListener('scroll', function(e) {
       if(window.scrollY > 0 && !header.classList.contains('bg-sticky')) {
         header.classList.add('bg-sticky', 'lg:bg-transparent');
       } else if (window.scrollY === 0 && header.classList.contains('bg-sticky')) {
         header.classList.remove('bg-sticky','lg:bg-transparent');
       }
  });