$(function() {
	//start up code goes here
	//alert("this works!");
	
	//$("#title").text("yay, I can get the H1 immediately")
	
	//$("#first").html("<h2>Great Quotes</h2>");
	
	
	//append and prepend works INSIDE the given selection
	$("#first").prepend("<h2>Great Quotes</h2>");
	$("#first").append("<h3>...for you to ponder</h3>");
	
	//before, after, insertBefore, insertAfter work OUTSIDE
	//the given selection
	
	//$("#myAnchor").attr("href", "http://google.com");
	
	$("#title").addClass("standout");
	
	
});






/*
$('.importantText')
$('#myFirstParagraph')
$('p').fadeOut();

jQuery('<div id="badge"><src="badge.gif alt="Badge earned"</div>');

$.myCustomMethod = function() {alert('hi');};

$.listBox = {
	show: function() { },
	hide: function() { },
	position: function() { },
	intitiate: function() { }
};
*/

/*
$(function() {
	//start up code goes here
	alert("this works! 1");
	
});

$(function() {
	//start up code goes here
	alert("this works! 2");
	
});

$(function() {
	//start up code goes here
	alert("this works! 3");
	
});


jQuery('#myFirstParagraph').fadeOut().(500).fadeIn(500);


*/












