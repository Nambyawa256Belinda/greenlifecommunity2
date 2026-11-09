const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    alert('Thank you ' + document.getElementById('name').value + '! Your message has been received.');
    form.reset();
  });
}
function filterGallery(type){
  const imgs = document.querySelectorAll('.gallery-grid img');
  imgs.forEach(img => {
    if(type === 'all' || img.classList.contains(type)){
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}