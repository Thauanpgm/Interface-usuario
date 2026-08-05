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
});
