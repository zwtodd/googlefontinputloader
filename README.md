# Google Font Input Loader
Dynamically load a Google Font via Web Font Loader via a drop down list.

# Demo
[You can view a demo of this application here.](https://zwtodd.github.io/googlefontinputloader/demo/)



# Why
I spent a long time looking for a way to include large amounts of fonts for applications, and could not find a suitable approach. I found a code pen by https://codepen.io/hbrok/ that was very similar to my end goal, but not quite to where I needed it. I wanted to be able to use every Google Font available (at time of writing there are 817 fonts.) Also, due to speed issues, I did not want to individually load each font.

# How
Using Heather's pen as a starting ground, I downloaded the Google Fonts API, requested the complete list of their fonts. That can be found in the included googlewebfonts.txt. The second text file, googlewebfonts2.txt is a copy, but with the "" quotation marks removed for an easier string search. I then used an online javascript regexp generator (http://scriptular.com/) to get the googleFonts.txt file generated. Lastly, I CTRL+F and replaced characters to get the googleFontArrayPattern .txt and .js files.

# Outline
- Simple html, one input that dynamically changes the paragraph to the selected font.
- WebFontLoader is called to load the font after the usuer selects it.
- The drop down list is populated automatically by jQuery method using the included array list.
- A user selects the font to use -> WebFont downloads the font -> the font is displayed to the user.
- Repeat as wanted.

# Limitations
This app only displayes the default style for the text. There is no option to change the style/weight, though it could be included as it is in googlewebfont.txt. Please fork is interested, currently my needs are met.
