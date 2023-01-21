let turn = 'x';
let title = document.querySelector(".title");
let saQe = [];
function end(num1,num2,num3){
    title.innerHTML = `${saQe[num1]} Winner`
        document.getElementById('item'+num1).style.background = "#000"
        document.getElementById('item'+num2).style.background = "#000"
        document.getElementById('item'+num3).style.background = "#000"
        

        setInterval(function(){ title.innerHTML += "."},1000)
        setTimeout(function(){location.reload()},4000)
}




function win(){
    for( let i = 1; i<10; i++){
    saQe[i] =   document.getElementById('item' + i).innerHTML;
    }
    
    if(saQe[1] == saQe[2] && saQe[2] == saQe[3] && saQe[1] != '' ){
        // title.innerHTML = `${saQe[1]} Winner`
        // document.getElementById('item'+1).style.background = "#000"
        // document.getElementById('item'+2).style.background = "#000"
        // document.getElementById('item'+3).style.background = "#000"
        

        // setInterval(function(){ title.innerHTML += "."},1000)
        // setTimeout(function(){location.reload()},4000)
        end(1,2,3)
     }
    else if(saQe[4] == saQe[5] && saQe[5] == saQe[6] && saQe[5] != '' ){
        end(4,5,6)

    }
    else if(saQe[7] == saQe[8] && saQe[8] == saQe[9] && saQe[8] != '' ){
        end(7,8,9)

    }
    else if(saQe[1] == saQe[4] && saQe[4] == saQe[7] && saQe[1] != '' ){
        end(1,4,7)

    }
    else if(saQe[2] == saQe[5] && saQe[5] == saQe[8] && saQe[5] != '' ){
        end(2,5,8)

    }
    else if(saQe[3] == saQe[6] && saQe[6] == saQe[9] && saQe[6] != '' ){
        end(3,6,9)

    }
    else if(saQe[1] == saQe[5] && saQe[5] == saQe[9] && saQe[5] != '' ){
        end(1,5,9)

    }
    else if(saQe[3] == saQe[5] && saQe[5] == saQe[7] && saQe[5] != '' ){
        end(3,5,7)

    }
}

function game(id){
    let element = document.getElementById(id)
    if( turn === 'x' && element.innerHTML == '' ){
        element.innerHTML = 'X';
        turn = 'o'
        title.innerHTML = 'O'
    }
    else if(turn === 'o' && element.innerHTML == '' ){
        element.innerHTML = 'O';
        turn = 'x'
        title.innerHTML = 'X'


    }
    win();

}