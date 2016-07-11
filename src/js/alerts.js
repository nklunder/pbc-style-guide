var $alertBar = $('.global-nav__alert-stripe');
var fullHeight = $alertBar.height();

var expand = () => $alertBar.animate({ 'height': fullHeight }, 200);
var shrink = () => $alertBar.animate({ 'height': '.5em' });

$alertBar.hover(expand, shrink);

setTimeout(shrink, 8000);
