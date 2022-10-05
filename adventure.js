let userName = prompt("enter your name: ")


if (userName){
    alert("Hello, " + userName + "! Let's get started!")
    let color = prompt("Which color do you like? orange or yellow? \n (type in: 'o' for orange or 'y' for yellow)")
    color = color.toLowerCase()
    if(color==="o"){
        choice = prompt("What object do you think I have? cone, pumpkin, or basketball? \n (type in: 'c' for cone, 'p' for pumpkin, or 'b' for basketball")
        if (choice.toLowerCase() === "c"){
            alert("you guessed wrong! Game Over!")
            function show(){
                document.getElementById('gameover-img').style.display = "block";
            }
        } else if (choice.toLowerCase() === "p"){
            alert("you guessed wrong! Game Over!")
            function show(){
                document.getElementById('gameover-img').style.display = "block";
            }
        } else if (choice.toLowerCase() === "b"){
            numChoice = prompt("You are one step closer to win this game!\n Is the basketball in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                if (numChoice == 1){
                    alert("You Win! You get a prize!\n click below to see your prize")
                    function show(){
                        document.getElementById('basketball-img').style.display = "block";
                    }
                
                } else if (numChoice === 2){
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                }else{
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                }
            }
    } else if (color===""){
        alert("please make your color selection to play")
        let color = prompt("Which color do you like? orange or yellow? \n (type in: 'o' for orange or 'y' for yellow)")
        color = color.toLowerCase()
        if(color==="o"){
            choice = prompt("What object do you think I have? cone, pumpkin, or basketball? \n (type in: 'c' for cone, 'p' for pumpkin, or 'b' for basketball")
            if (choice.toLowerCase() === "c"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "p"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "b"){
                numChoice = prompt("You are one step closer to win this game!\n Is the basketball in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                    if (numChoice == 1){
                        alert("You Win! You get a prize!\n click below to see your prize")
                        function show(){
                            document.getElementById('basketball-img').style.display = "block";
                        }
                    
                    } else if (numChoice === 2){
                        alert("you guessed wrong! Game Over!")
                        function show(){
                            document.getElementById('gameover-img').style.display = "block";
                        }
                    }else{
                        alert("you guessed wrong! Game Over!")
                        function show(){
                            document.getElementById('gameover-img').style.display = "block";
                        }
                    }
            }
        }
        if(color.toLowerCase()==="y"){
            choice = prompt("What object do you think I have? school bus, gold, or banana? \n (type in: 's' for school bus, 'g' for gold, or 'b' for banana")
            if (choice.toLowerCase() === "s"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "b"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "g"){
                numChoice = prompt("You are one step closer to win this game! \n Is the gold in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                if (numChoice == 1){
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
    
                }else if (numChoice == 2){
                    alert("You Win! You get a prize!\n click below to see your prize")
                    function show(){
                        document.getElementById('gold-img').style.display = "block"; 
                    }
    
                }else {
                    alert("you guessed wrong! Game Over!")
                    function show(){
                    document.getElementById('gameover-img').style.display = "block";
                    }
                }
            }
        }  
    }


    if(color.toLowerCase()==="y"){
        choice = prompt("What object do you think I have? school bus, gold, or banana? \n (type in: 's' for school bus, 'g' for gold, or 'b' for banana")
        if (choice.toLowerCase() === "s"){
            alert("you guessed wrong! Game Over!")
            function show(){
                document.getElementById('gameover-img').style.display = "block";
            }
        } else if (choice.toLowerCase() === "b"){
            alert("you guessed wrong! Game Over!")
            function show(){
                document.getElementById('gameover-img').style.display = "block";
            }
        } else if (choice.toLowerCase() === "g"){
            numChoice = prompt("You are one step closer to win this game! \n Is the gold in 1, 2 or 3? \n (type in: 1, 2 or 3)")
            if (numChoice == 1){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }

            }else if (numChoice == 2){
                alert("You Win! You get a prize!\n click below to see your prize")
                function show(){
                    document.getElementById('gold-img').style.display = "block"; 
                }

            }else {
                alert("you guessed wrong! Game Over!")
                function show(){
                document.getElementById('gameover-img').style.display = "block";
                }
            }
        }
    }
    
} else if(userName === ""){
    nameInput = prompt("please enter your name to play")
    if(nameInput){
        alert("Hello, " + nameInput + "! Let's get started!")
        let color = prompt("Which color do you like? orange or yellow? \n (type in: 'o' for orange or 'y' for yellow)")
        color = color.toLowerCase()
        if(color==="o"){
            choice = prompt("What object do you think I have? cone, pumpkin, or basketball? \n (type in: 'c' for cone, 'p' for pumpkin, or 'b' for basketball")
            if (choice.toLowerCase() === "c"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "p"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice.toLowerCase() === "b"){
                numChoice = prompt("You are one step closer to win this game!\n Is the basketball in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                if (numChoice == 1){
                    alert("You Win! You get a prize!\n click below to see your prize")
                    function show(){
                        document.getElementById('basketball-img').style.display = "block";
                    }
                
                } else if (numChoice === 2){
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                }else{
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                }
            }
        }else if(color.toLowerCase()==="y"){
            choice = prompt("What object do you think I have? school bus, gold, or banana? \n (type in: 's' for school bus, 'g' for gold, or 'b' for banana)")
            if (choice.toLowerCase() === "s"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            }else if (choice.toLowerCase() === "b"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            }else if (choice.toLowerCase() === "g") {
                numChoice = prompt("You are one step closer to win this game! \n Is the gold in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                if (numChoice == 1){
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                } else if (numChoice == 3){
                    alert("you guessed wrong! Game Over!")
                    function show(){
                        document.getElementById('gameover-img').style.display = "block";
                    }
                } else if (numChoice == 2){
                    alert("You Win! You get a prize!\n click below to see your prize")
                    function show(){
                        document.getElementById('gold-img').style.display = "block";              
                    }
                }
            }
        }
    }else {
        alert("No name entered, good bye!")
}



}









