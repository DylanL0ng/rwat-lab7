# Drawing Functionality

To render the grid I am using DOM elements, along side of the grid CSS system to render out an equal grid. Each cell is represented by
divs that are wrapped so that the top left and right of the elements aren't affected and will always rotate as expected.

# Saving Approach

To save the image drawn, I am using local storage, saving the image as JSON data representing each position, element type, and element value if valid. When loaded it will retrieve the data from local storage and setup the elements given the save data
