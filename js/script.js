window.addEventListener('scroll', function () {
  var header = document.querySelector('.fixed-header');
  header.classList.toggle('scrolled', window.scrollY > 0);

  var sections = document.querySelectorAll('.section');
  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});

function toggleSidePanel() {
  var sidePanel = document.getElementById('sidePanel');
  sidePanel.classList.toggle('open');
}

// Close side panel when clicking on a link
document.querySelectorAll('.side-panel a').forEach(function (link) {
  link.addEventListener('click', function () {
    toggleSidePanel();
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
