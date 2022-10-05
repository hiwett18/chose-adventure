let userName = prompt("enter your name: ")


if (userName){
    alert("Hello, " + userName + "! Let's get started!")
    let color = prompt("Which color do you like? orange, yellow or black? \n (type in: 'o' for orange, 'y' for yellow, 'b' for black)")
    color = color.toLowerCase()
    if(color==="o"){
        choice = prompt("What object do you think I have? cone, pumpkin, or basketball? \n (type in: 'c' for cone, 'p' for pumpkin, or 'b' for basketball")
        if (choice.toLowerCase() === "c"){
            alert("you guessed wrong! you get another chance")
            choice2 = prompt("Is it pumpkin or basketball? \n (type in:'p' for pumpkin or 'b' for basketball")

            if (choice2.toLowerCase() === "p"){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice2.toLowerCase() === "b"){
                        alert("You Win! You get a prize!\n click below to see your prize")
                        function show(){
                            document.getElementById('basketball-img').style.display = "block";
                        }
            }
        } else if (choice.toLowerCase() === "p"){
            alert("you guessed wrong! you get another chance")
            choice2 = prompt("Is it cone or basketball? \n (type in:'c' for cone or 'b' for basketball")

            if (choice2.toLowerCase() === "c"){
                alert("you guessed wrong! Play again!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }
            } else if (choice2.toLowerCase() === "b"){
                        alert("You Win!!!!!! Your prize is hidden!\n click below to see your prize")
                        function show(){
                            document.getElementById('basketball-img').style.display = "block";
                        }
            }
        } else if (choice.toLowerCase() === "b"){
            numChoice = prompt("You are one step closer to win this game!\n Is the basketball in 1, 2 or 3? \n (type in: 1, 2 or 3)")
                if (numChoice == 1){
                    alert("You Win!!!! You get a prize!\n click below to see your prize")
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
                        alert("You Win!!!! You get a prize!\n click below to see your prize")
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
                alert("you lose! but don't worry, you get a surprize gift!")
                choice2 = prompt("do you like cake or ice-cream?\n (type 'c' for cake or 'i' for ice-cream)")
                if (choice2 === 'c'){
                    cakeChoice = prompt("do you like blackforest or whiteforest cake? \n (type in: 1 for blackforest or 2 for whiteforest) ")
                    if (cakeChoice==1){
                        alert("click below to see your reward")
                        function show(){
                            document.getElementById('blackforest-img').style.display = "block";
                        }
                    }else if (cakeChoice==2){
                        alert("click below to see your reward")
                        function show(){
                            document.getElementById('whiteforest-img').style.display = "block";
                        }
                    }
                }else if (choice2 === 'i'){
                    icecreamChoice = prompt("do you like chocolate or vanilla ice-cream? \n (type in: 1 for chocolate or 2 for vanilla) ")
                    if (icecreamChoice==1){
                        alert("click below to see your reward")
                        function show(){
                            document.getElementById('chocolate-img').style.display = "block";
                        }
                    }else if (icecreamChoice==2){
                        alert("click below to see your reward")
                        function show(){
                            document.getElementById('vanilla-img').style.display = "block";
                        }
                    }
                }
                
            } else if (choice.toLowerCase() === "b"){
                alert("you lose! But you get another chance!")
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
                    alert("Winner!!!! You get a prize!\n click below to see your prize")
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
            alert("you lose! but don't worry, you get a surprize gift!")
            choice2 = prompt("do you like cake or ice-cream?\n (type 'c' for cake or 'i' for ice-cream)")
            if (choice2 === 'c'){
                cakeChoice = prompt("do you like blackforest or whiteforest cake? \n (type in: 1 for blackforest or 2 for whiteforest) ")
                if (cakeChoice==1){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('blackforest-img').style.display = "block";
                    }
                }else if (cakeChoice==2){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('whiteforest-img').style.display = "block";
                    }
                }
            }else if (choice2 === 'i'){
                icecreamChoice = prompt("do you like chocolate or vanilla ice-cream? \n (type in: 1 for chocolate or 2 for vanilla) ")
                if (icecreamChoice==1){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('chocolate-img').style.display = "block";
                    }
                }else if (icecreamChoice==2){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('vanilla-img').style.display = "block";
                    }
                }
            }
            
        } else if (choice.toLowerCase() === "b"){
            alert("you lose! But you get another chance!")
            choice2 = prompt("do you like cake or ice-cream?\n (type 'c' for cake or 'i' for ice-cream)")
            if (choice2 === 'c'){
                cakeChoice = prompt("do you like blackforest or whiteforest cake? \n (type in: 1 for blackforest or 2 for whiteforest) ")
                if (cakeChoice==1){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('blackforest-img').style.display = "block";
                    }
                }else if (cakeChoice==2){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('whiteforest-img').style.display = "block";
                    }
                }
            }else if (choice2 === 'i'){
                icecreamChoice = prompt("do you like chocolate or vanilla ice-cream? \n (type in: 1 for chocolate or 2 for vanilla) ")
                if (icecreamChoice==1){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('chocolate-img').style.display = "block";
                    }
                }else if (icecreamChoice==2){
                    alert("click below to see your reward")
                    function show(){
                        document.getElementById('vanilla-img').style.display = "block";
                    }
                }
            }
        } else if (choice.toLowerCase() === "g"){
            numChoice = prompt("You are one step closer to win this game! \n Is the gold in 1, 2 or 3? \n (type in: 1, 2 or 3)")
            if (numChoice == 1){
                alert("you guessed wrong! Game Over!")
                function show(){
                    document.getElementById('gameover-img').style.display = "block";
                }

            }else if (numChoice == 2){
                alert("Winner!!!! You get a prize!\n click below to see your prize")
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
    if(color.toLowerCase()==="b"){
        choice = prompt("What object do you think I have? Sun, Moon, or Earth? \n (type in: 's' for Sun, 'm' for Moon, or 'e' for Earth")
        if (choice.toLowerCase() === "s"){
            alert("you got it!!! \n click below to see the sun")
            function show(){
                document.getElementById('sun-img').style.display = "block";
            }
            
        } else if (choice.toLowerCase() === "m"){
            alert("you got it!!! \n click below to see the moon")
            function show(){
                document.getElementById('moon-img').style.display = "block";
            }
               
        } else if (choice.toLowerCase() === "e"){
            alert("you got it!!! \n click below to see the earth")
            function show(){
                document.getElementById('earth-img').style.display = "block";
            } 
        }
    }   
}


   