//two dimensional array Nesting For Loops
var myArray = [['taco', 'bell']];

function salad() {
    var penny = 1;
        //
    for (var i = 0; i < myArray.length; i++) {
            for (var j = 0; j < myArray[i].length; j++) {
                console.log(myArray[i][j])
                penny = penny == myArray[i][j];
            }
    }

    return penny;
}
//askfornothing 
console.log(salad(myArray))

// ASK FOR HELP TOMORROW-------------------------------

//three dimensional array 

var free = [[[1, 22], [5, 89]]];

function testGreaterThan() {
    var funny = 0
    //

    for (var f = 0; f < free.length; f++) {
        for (var h = 0; h < free[f].length; h++) {
            funny = funny == free[f][h];
        }
    }

    if (free > 100) {

return 'over 100';

    }

    if (free > 10) {

return 'over 10';

    }

    return '10 or Under';
}

testGreaterThan(10);

console.log(testGreaterThan)

//-----------------------------------------

function clap(but, but2) {
    if (but === but2) {
        return 'Equal';
    }
    return 'Not Equal';
}

clap(10, "10");
console.log(clap(10, "10"));