- block element = takes up the entire line of their container (div) rather than the whole page
examples: paragraph (p), div

- inline-block element = only takes up as much space as needed
examples: image, input

- inline element = appear within a line of text
examples: strong, span


we can change whether an element is block/inline-block by using the display property


example:

.video-author, .video-stats {
                display: inline-block;  /* enables us to change how much space things take/where they go */
    }