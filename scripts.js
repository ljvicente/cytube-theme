$("#videowrap").removeAttr('class');
$("#videowrap").addClass('col-lg-8');
$("#videowrap").addClass('col-md-8');
$("#chatwrap").removeAttr('class');
$("#chatwrap").addClass('col-lg-4');
$("#chatwrap").addClass('col-md-4');
$('.navbar-brand').html('<span class="pull-left">Arz</span> <img src="https://rawgit.com/ljvicente/cytube-theme/master/img/heart.png" class="pull-left logo-heart"> <span class="pull-left">Lez</span>');
$('body').append('<img style="position:fixed;bottom:-30px;right:0;height:100px;z-index:1;" src="https://rawgit.com/ljvicente/cytube-theme/master/img/pusheen-popcorn.png">');
$('body').append('<img style="position:fixed;bottom:0px;right:4%;height:30px;z-index:2;" src="https://rawgit.com/ljvicente/cytube-theme/master/img/1.gif">');
$('body').append('<img style="position:fixed;bottom:30px;right:0;height:50px;" src="https://rawgit.com/ljvicente/cytube-theme/master/img/2.gif">');

$('#leftcontrols').append('<button class="btn btn-sm btn-default" onclick="$(\'#messagebuffer\').html(\'\');">Anti-Mamu</button>');

$('#chatwrap').before($('#videowrap'));
$('#leftcontrols').before($('#rightcontrols'));
$('#rightcontrols').removeAttr('class');
$('#rightcontrols').addClass('col-lg-8');
$('#rightcontrols').addClass('col-md-8');

$('#leftcontrols').removeAttr('class');
$('#leftcontrols').addClass('col-lg-4');
$('#leftcontrols').addClass('col-md-4');


$('#leftpane').before($('#rightpane'));
$('#rightpane').removeAttr('class');
$('#rightpane').addClass('col-lg-8');
$('#rightpane').addClass('col-md-8');

$('#leftpane').removeAttr('class');
$('#leftpane').addClass('col-lg-4');
$('#leftpane').addClass('col-md-4');

$('.btn').addClass('hvr-wobble-top');
$('.chat-msg-arz').addClass('hvr-shrink');
$('.chat-msg-masterlei').addClass('hvr-shrink');

$('#messagebuffer').bind("DOMSubtreeModified",function(){
$('.chat-msg-arz').addClass('hvr-shrink');
$('.chat-msg-masterlei').addClass('hvr-shrink');
});

$('.navbar-brand').attr('href', 'https://cytu.be/r/E400');
