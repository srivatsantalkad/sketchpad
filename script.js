// This function manipulates the DOM to create a div grid of divs that has dimensions gridHeight x gridWidth.
function createGrid(gridHeight, gridWidth, gridContainer) {
    for (let i = 0; i < gridHeight; i++) {
        let gridRow = document.createElement('div');
        for (let j = 0; j < gridWidth; j++) {
            let gridCell = document.createElement('div');
            gridCell.setAttribute('style', 'border: 1px solid black; background-color: white;');
            gridCell.style.height = 500 / gridHeight + 'px';
            gridCell.style.width = 500 / gridWidth + 'px';

            gridCell.addEventListener('mouseenter', () => {
                gridCell.style['filter'] = 'brightness(50%)';
            });
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}
function createInitialGrid() {
    // Create gridContainer and append it as a child to grid container wrapper
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'flex';
    gridContainerWrapper.appendChild(gridContainer);

    // Create default diimensions for grid length and grid width.
    const DEFAULT_GRID_HEIGHT = 10;
    const DEFAULT_GRID_WIDTH = 10;

    // Call the createGrid() function in order to create the grid.
    createGrid(DEFAULT_GRID_HEIGHT, DEFAULT_GRID_WIDTH, gridContainer);
}

// Create reference to existing gridcontainerwrapper
const gridContainerWrapper = document.querySelector('.grid-container-wrapper');

function main() {
    // Create the initial grid.
    createInitialGrid();

    // Create reference to existing clear grid button.
    const clearGridButton = document.querySelector('.clear-grid-button');

    clearGridButton.addEventListener('click', () => {
        // prompt user for new dimensions
        let newGridDimensions = prompt("Please enter the number of squares per side for the new square grid. (Max: 100).");
        while (newGridDimensions > 100) newGridDimensions = prompt("Please enter the number of squares per side for the new square grid. (Max: 100).");

        // delete old grid
        gridContainerWrapper.removeChild(gridContainerWrapper.childNodes[0]);

        // create new grid
        const newGridContainer = document.createElement('div');
        newGridContainer.style.display = 'flex';
        gridContainerWrapper.append(newGridContainer);
        createGrid(newGridDimensions, newGridDimensions, newGridContainer);

    });
}

main();

