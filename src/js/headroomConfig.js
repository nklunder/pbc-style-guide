var header = document.querySelector('.global-nav')
var headroom = new Headroom(header, {
  "offset": 300,
  "tolerance": 5
});
headroom.init();
