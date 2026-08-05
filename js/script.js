document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img.imagem');

  images.forEach(function (img) {
    img.addEventListener('error', function () {
      var src = img.getAttribute('src');
      if (!src) return;

      var alternatives = [];
      if (src.endsWith('.png')) {
        alternatives = [src.replace(/\.png$/, '.jpeg'), src.replace(/\.png$/, '.jpg')];
      } else if (src.endsWith('.jpeg')) {
        alternatives = [src.replace(/\.jpeg$/, '.png'), src.replace(/\.jpeg$/, '.jpg')];
      } else if (src.endsWith('.jpg')) {
        alternatives = [src.replace(/\.jpg$/, '.png'), src.replace(/\.jpg$/, '.jpeg')];
      }

      for (var i = 0; i < alternatives.length; i++) {
        var nextSrc = alternatives[i];
        if (nextSrc && nextSrc !== src) {
          img.setAttribute('src', nextSrc);
          return;
        }
      }
    });
  });

  var nav = document.querySelector('header nav, nav[aria-label="Menu principal"]');
  if (!nav) return;

  nav.classList.add('site-nav');

  var toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'site-nav');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  var container = document.querySelector('header .container, header .header-grid');
  if (container) {
    container.appendChild(toggle);
  } else {
    nav.parentNode.insertBefore(toggle, nav);
  }

  nav.setAttribute('id', 'site-nav');

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
