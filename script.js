document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    window.scrollTo({
      top: targetSection.offsetTop - 70, // Adjust for fixed navbar
      behavior: 'smooth',
    });
  });
});
