document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img.imagem');

  images.forEach(function (img) {
    img.addEventListener('error', function () {
      var src = img.getAttribute('src');
      if (!src) return;

      if (src.endsWith('.png')) {
        img.setAttribute('src', src.replace(/\.png$/, '.jpeg'));
      } else if (src.endsWith('.jpeg')) {
        img.setAttribute('src', src.replace(/\.jpeg$/, '.png'));
      } else if (src.endsWith('.jpg')) {
        img.setAttribute('src', src.replace(/\.jpg$/, '.png'));
      }
    });
  });
});
