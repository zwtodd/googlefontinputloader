var selectInputId = 'google',
paragraph = document.querySelector('p'),
font;
	
/* This will autopopulate the drop down list with each google font name from the array*/
selectInput = document.getElementById(selectInputId);
for(a in googleFontsArray) {
	selectInput.options[selectInput.options.length] = new Option(googleFontsArray[a], googleFontsArray[a]);
}
			
			
			
// (zwtodd): this was originally snipped from https://codepen.io/hbrok/pen/rrBRmj, then heavily modified to fit this app.
/*
* Web Font Loader:
* https://github.com/typekit/webfontloader
*/

			


// Load a Google font by name.
var loadFont = function(font) {
	WebFont.load({
			google: {
				families: [font]
			}
		});
};

$('#google').change (function() {
		font = this.value;
		loadFont(font);
		paragraph.style.fontFamily = font;				
	});
