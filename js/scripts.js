const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector("button");
const levels = document.querySelector('#levels');
let playerPoints = 0;
let aRandomNumber = '';


button.addEventListener("click", function(){

    const numberCell = (levels.value);

    const bombs = [];
    while (bombs.length < 16){
        aRandomNumber = randomNumber(1, numberCell);

        if (bombs.includes(aRandomNumber) == false) {
            bombs.push(aRandomNumber);
        }
    }

    // console.log('bombs', bombs);
    
    gridContainer.innerHTML = '';
    playerPoints = 0;

    for (let i = 1; i <= numberCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', 'cell-' + numberCell);
        cell.innerHTML = i;
    
        cell.addEventListener('click', function() {

            const clickedCells = document.querySelectorAll('.cell.clicked');
            const clickedBombs = document.querySelectorAll('.cell.bomb');

            if (clickedBombs.length == 0 && clickedCells.length < (numberCell - 16)){

                const numberInCell = parseInt(this.innerText);

                if (bombs.includes(numberInCell) == false){
                    this.classList.add('clicked');

                    if (document.querySelectorAll('.cell.clicked').length == (numberCell - 16)){
                        alert('You won! You achieved ' + document.querySelectorAll('.clicked').length + ' points!');
                    }
                }
                else {
                    this.classList.add('bomb');

                    alert('You lost! You achieved ' + clickedCells.length + ' points!');
                }
            }

        });
    
        gridContainer.append(cell);
    }

    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };

}); 



