

document.getElementById('game-container').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block'){

        event.target.innerHTML = 2;

    }

}
//get array of elements
let blocks = document.getElementsByClassName('block');
console.log(blocks);


for (i=0; i<blocks.length; i++){


    let dataBlock = document.getElementsByClassName('block').item(i).innerHTML;
    console.log('В блоке №'+ i + ' ' + 'Сейчас записано значение' + ' ' + dataBlock);

}

//
// if (document.getElementsByClassName('block').item(0).innerHTML != dataBlock.item(1)) {
//     // noinspection JSAnnotator
//     dataBlock.item(1) = dataBlock.item(0);
// }
// else {
//     dataBlock++;
// }


//Rendom function
// document.getElementById('btn-restart').onclick = function(rendom) {

//}





//Move function




//Split function

//Best score function

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
