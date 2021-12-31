// This function creates a grid of divs that has dimensions gridLength x gridLength and appends it to gridContainer.
function createGrid(gridLength, gridContainer) {
    for (let i = 0; i < gridLength; i++) {
        let gridRow = document.createElement('div');
        for (let j = 0; j < gridLength; j++) {
            let gridCell = document.createElement('div');
            gridCell.setAttribute('style', 'border: 1px solid black; background-color: white;');
            gridCell.style.height = 500 / gridLength + 'px';
            gridCell.style.width = 500 / gridLength + 'px';

            gridCell.addEventListener('mouseenter', () => {
                gridCell.style['filter'] = 'brightness(25%)';
            });
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

// This function creates the initial grid when the page is first loaded.
function createInitialGrid() {
    // Create gridContainer and append it as a child to grid container wrapper
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'flex';
    gridContainerWrapper.appendChild(gridContainer);

    // Call the createGrid() function in order to create the grid.
    createGrid(gridLength, gridContainer);
}

/**
 * Global vars
 */
// Create default diimensions for grid length and grid width.
let gridLength = 10;
// Create reference to existing gridcontainerwrapper
const gridContainerWrapper = document.querySelector('.grid-container-wrapper');


function main() {
    // Create the initial grid.
    createInitialGrid();

    // Create reference to existing grid buttons.
    const newGridButton = document.querySelector('.new-grid-button');
    const clearGridButton = document.querySelector('.clear-grid-button');

    // New grid button, when pressed, prompts user to input new dimensions, and a new grid is created with corresponding dimensions inputted.
    newGridButton.addEventListener('click', () => {
        // prompt user for new dimensions
        gridLength = prompt("Please enter the number of squares per side for the new square grid. (Max: 100).");
        while (gridLength > 100) gridLength = prompt("Please enter the number of squares per side for the new square grid. (Max: 100).");

        // delete old grid
        gridContainerWrapper.removeChild(gridContainerWrapper.childNodes[0]);

        // create new grid
        const newGridContainer = document.createElement('div');
        newGridContainer.style.display = 'flex';
        gridContainerWrapper.append(newGridContainer);
        createGrid(gridLength, newGridContainer);

    });

    // Clear grid button, when pressed, clears grid with the same dimensions as what it was previously.
    clearGridButton.addEventListener('click', () => {
        console.log("test");
        // delete old grid
        gridContainerWrapper.removeChild(gridContainerWrapper.childNodes[0]);

        // create new grid
        const newGridContainer = document.createElement('div');
        newGridContainer.style.display = 'flex';
        gridContainerWrapper.append(newGridContainer);
        createGrid(gridLength, newGridContainer);
    });


}

main();

