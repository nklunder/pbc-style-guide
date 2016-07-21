var nav = document.querySelector('.global-nav');
var navMobile = document.querySelector('.global-nav--mobile');
var headroom = new Headroom(nav, {
  "offset": 300,
  "tolerance": 5
});

var headroomMobile = new Headroom(navMobile, {
  "offset": 200,
  "tolerance": 5
});

headroom.init();
headroomMobile.init();
