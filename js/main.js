
document.getElementById('languageSwitcher').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('data-section');
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(sectionId).classList.add('visible');
  });
});
