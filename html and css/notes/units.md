px
- absolute, fixed unit
- one pixel is equal to one dot on the screen
- best for precise measurements where the element should never change size

%
- relative to the immediate parent element's size

rem
- relative to the font size of the room <html> element
- if root font size is set to 16px (browser default), then 1rem = 16px
- industry standard

em
- relative to the font size of the immediate parent element
- if an element's parent has font size of 20px, then 1em = 20px

vw
- viewport width
- relative to 1% of the browser's window's width
- if screen is at 1000px wide, 1vw = 10px
- 50vw ensures it always spans half the screen width, regardless of other stuff

vh
- viewport height
- same as vw but for height