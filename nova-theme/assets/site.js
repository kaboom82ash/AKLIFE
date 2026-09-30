document.addEventListener('click', function (e) {
  var b = e.target.closest('.pburger');
  if (b) { document.querySelector('.pnav').classList.toggle('open'); }
});
