const MyShip =
  {
    name:'',
    hull: 20,
    firepower: Math.floor(Math.random() * 5) + 1,
    accuracy:  Math.random()
  }
const AlienShips =[
  shipone = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy:  Math.random(),
        },
  shiptwo = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy:  Math.random(),
        },
  shipthree = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy: Math.random(),
        },  
  shipfour = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy: Math.random(),
        }, 
  shipfive = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy:  Math.random(),
        }, 
  shipsix = {
          hull: (Math.random() * 4) + 3,
          firepower: (Math.random()*3) + 2,
          accuracy:  Math.random(),
        }    
]
    console.log(AlienShips);
    console.log(MyShip);
    // function gameRule(myship,alienship){
      // console.log("Space Battle - Save the Universe");
      // let user = prompt("enetr your spaceship name");


      // if (Math.random() < alien[0].accuracy) {
      //   console.log('You have been hit!');
      // }

  //   let yourShip = MyShip.forEach(element => {
  //     let count = 0;
  //     if(count < element.hull && count < element.firepower){
  //       console.log('keep playing you have: '+ count +" more lifes")
  //      }
  //      else if (element.accuracy === .7){
  //       console.log('You hit the alienship!')
  //      }
  //      else{
  //       console.log("Game Over!");
  //      }
  //   });
  //     AlienShips.forEach((element) =>{
  //     let count = 3;
  //     let countf = 2
  //     if(count < element.hull && countf < element.firepower){
  //       console.log("The alienship is out there")
  //     }
  //     else if (element.accuracy > 0.6 && element.accuracy < 0.8)
  //       console.log('You have been hit!');
  //     else{
  //         console.log("you win!");
  //     }
  //   })
  // }
  // for(let i = 0; i < AlienShips.length; i++){
  //    const alienship = AlienShips[i];
  //   if(MyShip.accuracy === .7){
  //     console.log('You hit the alienship');}
  //     else if(alienship.accuracy > .6 && alienship.accuracy < 0.8){
  //       console.log('You have been hit!')
  //     }
  //     else if(alienship.hull < 3){
  //     console.log('one alienship damaged')
  //     }
  //     else if(alienship.firepower === 0){
  //       console.log("You win!")  
  //     }
  //     for (let i = MyShip.hull; i >= 0; i-- ){
  //       let life = MyShip[i];
  //       if(life === 0){
  //         console.log('Game over!...try again')
  //       }
  //       else if(MyShip.firepower === 0){
  //         console.log("You dont have firepower ..Game over!")
  //       }
  //     }
  //   }
       function GameRule(ms,as){
        // console.log("GameRule - Checking player ship");
        for(let count = ms.hull; count >= 0; count --){
          if(count === 0){
            console.log('Game over!')
               }
          else {
            console.log("Player ship hull: " + ms.hull);
          if(ms.firepower === 5){
            console.log("You destroyed an alien spaceship!")     
              }
          else if(ms.accuracy === 0.7){
            console.log('You hit the alienship');
              }
             }
        }
        //  console.log("GameRule2 - Checking alien ships");
          for (let i = 0; i < as.length; i++) {
            const alienship = as[i];
            if (alienship.hull <= 0) {
              console.log("You destroyed an alien spaceship!");
            } else {
              console.log("Alien ship hull: " + alienship.hull);
              if (alienship.firepower > 2 && alienship.firepower < 4) {
                console.log("You have been hit!");
              } else if (alienship.accuracy > 0.6 && alienship.accuracy < 0.8) {
                console.log("You have been hit!");
              }
            }
          }
        }
        function startGame() {
          console.log("Space Battle - Save the Universe");
          // Delay the prompt by 5 seconds
          setTimeout(() => {
            MyShip.name = prompt("Enter your spaceship name:");
            gameLoop();
          }, 5000);
        }
        function gameLoop(){
          while (MyShip.hull > 0 && AlienShips.length > 0) {
            console.log("\nPlayer: " + MyShip.name);
            GameRule(MyShip,AlienShips);
            // console.log("\nAlien Ships:");
            // GameRule2(AlienShips);
            let nextTurn = prompt("Press Enter for the next turn (or type 'quit' to end the game):");
            if (nextTurn === 'quit') {
              console.log("Game ended by user.");
              return;
            }
          }
          // Game over
          console.log("Game over!");
        }
      
        // Start the game
        startGame();