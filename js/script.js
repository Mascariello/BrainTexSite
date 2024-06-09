window.addEventListener('scroll', function () {
  var header = document.querySelector('.fixed-header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});

function toggleSidePanel() {
  var sidePanel = document.getElementById('sidePanel');
  sidePanel.classList.toggle('open');
}
