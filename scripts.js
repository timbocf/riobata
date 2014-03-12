// JavaScript Document

$(function(){
	$('li#tab_whatWeDo').addClass('active');
	$('li#tab_humanElement').removeClass('active').addClass('inactive');
	$('li#tab_weCanHelp').removeClass('active').addClass('inactive');
	$('div#humanElement').hide();
	$('div#weCanHelp').hide();
});

$(function(){
	$('li#tab_whatWeDo a').click(function(){
		$('li#tab_whatWeDo').removeClass('inactive').addClass('active');
		$('li#tab_humanElement').removeClass('active').addClass('inactive');
		$('li#tab_weCanHelp').removeClass('active').addClass('inactive');
		$('div#whatWeDo').show();
		$('div#humanElement').hide();
		$('div#weCanHelp').hide();
	});
});

$(function(){
	$('li#tab_humanElement a').click(function(){
		$('li#tab_whatWeDo').removeClass('active').addClass('inactive');
		$('li#tab_humanElement').removeClass('inactive').addClass('active');
		$('li#tab_weCanHelp').removeClass('active').addClass('inactive');
		$('div#whatWeDo').hide();
		$('div#humanElement').show();
		$('div#weCanHelp').hide();
	});
});

$(function(){
	$('li#tab_weCanHelp a').click(function(){
		$('li#tab_whatWeDo').removeClass('active').addClass('inactive');
		$('li#tab_humanElement').removeClass('active').addClass('inactive');
		$('li#tab_weCanHelp').removeClass('inactive').addClass('active');
		$('div#whatWeDo').hide();
		$('div#humanElement').hide();
		$('div#weCanHelp').show();
	});
});