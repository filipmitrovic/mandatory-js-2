let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let winCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let gameDone = 0;
let counter = 0;
let h3 = $('.h3');
h3.text ("It's X Turn");

function firstMove (e) {
    let tdEvent = $(e.target);
    let id = e.target.id; 
    if (gameDone === 1) { 
        return;
    }
    if (tdEvent.text() === 'X' ||tdEvent.text() ==='O') {
        return; 
    }
    if (counter === 0) {
        h3.text ("It's O Turn"); 
        tdEvent.text ('X'); 
        arr[id] = 'X'; 
        counter ++;
        checkWin(arr,'X');
    }
    else if (counter === 1) {
        h3.text ("It's X Turn");
        tdEvent.text ('O');
        arr[id] = 'O';
        counter --;
        checkWin(arr,'O');
    }
};

let allTd = $('.td');
$('.td').on ('click', firstMove);

function checkWin(arr, xy) {
    let win = winCombinations.find(function(combinations) {
        return combinations.every(function(inRow) {
            return arr[inRow] === xy;
        });
    }); 
    if (win) {
        h3.text (xy + ' WON!!!');
        gameDone = 1;
    }
    else if (allTd.text().length === 9) {
        h3.text ("It's A Tie :/");
    };
};

$('#reset').click(function() {
    allTd.html('');
    while(arr.length > 0) {
        arr.pop();
    }
    h3.text ("It's X Turn");
    counter = 0;
    gameDone = 0;
});