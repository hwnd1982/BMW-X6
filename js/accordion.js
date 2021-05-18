document.addEventListener('DOMContentLoaded', () => {

  const featureLinkElems = document.querySelectorAll('.feature__link');
  
  const featureSubElems = document.querySelectorAll('.feature-sub')

  featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      
      featureSubElems.forEach((featureSubElem, i) => {
        if (i!=index) {
          featureSubElem.classList.add('hidden');
        }
      });
      featureLinkElems.forEach((featureLinkElem, i) => {
        if (i!=index) {
          featureLinkElem.classList.remove('feature__link_active');
        }
      });
      
      featureSubElems[index].classList.toggle('hidden');
      btn.classList.toggle('feature__link_active');
    })
  })
});