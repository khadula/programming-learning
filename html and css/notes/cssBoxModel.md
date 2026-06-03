css box model

from innermost to outermost:
- content: content of the box
- padding: clears an area around the content. padding is transparent
- border: a border that goes around the padding and content
- margin: clears an area outside the border. margin is transparent

eg;

div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}

so basically:
- use padding for space inside an element (rather than height/width)
- use margin for space outside an element


extra:
box-sizing: border-box;
- this tells the browser to include an element's padding and border within its specified width and height
- prevents elements from expanding or breaking a layout when adding spacing
- makes it much more predictable than the default