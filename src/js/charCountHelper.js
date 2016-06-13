var copyBtn = document.querySelector('#copy-btn'),
  charCountTextarea = document.querySelector('#char-count-textarea'),
  msgCharCount = document.querySelector('#msg-char-count');

charCountTextarea.addEventListener('input', function(e) {
  msgCharCount.textContent = 140 - e.target.value.length;
}, false);

copyBtn.addEventListener('click', function() {
  charCountTextarea.select();
  try {
    document.execCommand('copy');
    charCountTextarea.blur();
  } catch (err) {
    alert('Copy function not available on this browser :( \n\n Use Ctrl + C instead');
  }
}, false);
