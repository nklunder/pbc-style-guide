var input = document.querySelector('#icon-search');
var icons = document.querySelectorAll('.js-icon-filter');

input.addEventListener('keyup', function (e) {
  var searchTerms = e.target.value.split(' ');

  Array.prototype.forEach.call(icons, function (icon) {
    var keywords = icon.dataset.keywords || '';
    var isMatch = searchTerms.every(function (term) {
      return keywords.includes(term);
    });

    if (isMatch) {
      icon.removeAttribute('hidden');
    } else {
      icon.setAttribute('hidden', 'hidden');
    }

  });

}, false);
