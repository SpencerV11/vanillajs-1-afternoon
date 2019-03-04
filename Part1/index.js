
let arrayTracker = []

function play(value){
    let player = document.getElementById("player")
    let element = document.getElementById(value)
    
    
    if(player.innerText === "X"){
        player.innerText = "O"
        element.innerText = "X"
        arrayTracker[value] = "X"
    }
    else {
        player.innerText = "X"
        element.innerText = "O"
        arrayTracker[value] = "O"
    }

        
        let sq1 = arrayTracker[0]
        let sq2 = arrayTracker[1]
        let sq3 = arrayTracker[2]
        let sq4 = arrayTracker[3]
        let sq5 = arrayTracker[4]
        let sq6 = arrayTracker[5]
        let sq7 = arrayTracker[6]
        let sq8 = arrayTracker[7]
        let sq9 = arrayTracker[8]
        
        console.log(arrayTracker)
        if(sq1 !== undefined && sq1 === sq2 && sq1 === sq3){ // top row
            alert(sq1 + " wins!")
        }
        if(sq1 !== undefined && sq1 === sq4 && sq1 === sq7){ // top left down
            alert(sq1 + " wins!")
        }
        if(sq1 !== undefined && sq1 === sq5 && sq1 === sq9){ // back slash
            alert(sq1 + " wins!")
        }
        if(sq2 !== undefined && sq2 === sq5 && sq2 === sq8){// top middle down
            alert(sq2 + " wins!")
        }
        if(sq3 !== undefined && sq3 === sq6 && sq3 === sq9){// top right down
            alert(sq3 + " wins!")
        }
        if(sq4 !== undefined && sq4 === sq5 && sq4 === sq6){// middle left to right
            alert(sq4 + " wins!")
        }
        if(sq7 !== undefined && sq7 === sq7 && sq7 === sq9){// bottom left to right
            alert(sq7 + " wins!")
        }
        if(sq7 !== undefined && sq7 === sq5 && sq7 === sq3){// slash
            alert(sq7 + " wins!")
        }
     }    

