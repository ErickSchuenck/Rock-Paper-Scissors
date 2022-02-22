let myChoice;
let opponentsOption;
let opponentsCardChoice;
let AllCardsArr = document.querySelectorAll('.card');
function displayCards(){
    console.log('displaying cards')
    let main = document.querySelector('.my-hand')
    main.innerHTML = main.innerHTML + `
            <div class="card" onclick = 'play(), choosePaper()'><img src = "paper.png"></div>
            <div class="card" onclick = 'play(), chooseScissor()'><img src = "scissor.png"></div>
            <div class="card" onclick = 'play(), chooseRock()'><img src = "rock.png"></div>
    `
    let button = document.querySelector('button');
    button.classList.add('hidden');

}
function play(){
    disappearOpponentsFirstCard()
    opponentChooseCard()
}
function disappearOpponentsFirstCard(){
    let firstCard = document.querySelector('.card')
    firstCard.classList.add('hidden')
}
function opponentChooseCard(){
    let opponentsCardArray = ['rock', 'paper', 'scissor']
    opponentsCardArray = opponentsCardArray.sort(() => Math.random() -0.5);
    opponentsCardChoice = (opponentsCardArray[0])
}
function choosePaper(){
    console.log('i have chosen paper')
    MyCardsArr = document.querySelectorAll('.card');
    MyCardsArr[3].classList.add('hidden');
    myChoice = 'paper'
    showChoices();
}
function chooseScissor(){
    console.log('i have chosen scissor')
    MyCardsArr = document.querySelectorAll('.card');
    MyCardsArr[4].classList.add('hidden');
    myChoice = 'scissor'
    showChoices();
}
function chooseRock(){
    console.log('i have chosen rock')
    MyCardsArr = document.querySelectorAll('.card');
    MyCardsArr[5].classList.add('hidden');
    myChoice = 'rock'
    showChoices();
}
function showChoices(){
    let main2 = document.querySelector('.play-area')
    if (myChoice == 'paper'){
        main2.innerHTML =
        `
        <div class="card">
            <img src = "paper.png">
        </div>
        `
        } if (myChoice == 'scissor'){
            main2.innerHTML =
            `
            <div class="card">
                <img src = "scissor.png">
            </div>
            `
            } if (myChoice == 'rock'){
                main2.innerHTML =
                `
                <div class="card">
                    <img src = "rock.png">
                </div>
                `
                }
    if (opponentsCardChoice == 'paper'){
        main2.innerHTML = main2.innerHTML +
        `
        <div class="card">
            <img src = "paper.png">
        </div>
        `
    } if (opponentsCardChoice == 'scissor'){
        main2.innerHTML = main2.innerHTML +
        `
        <div class="card">
            <img src = "scissor.png">
        </div>
        `
    } if (opponentsCardChoice == 'rock'){
        main2.innerHTML = main2.innerHTML +
        `
        <div class="card">
            <img src = "rock.png">
        </div>
        `
    }
    checkVictory();
}
function checkVictory(){
    if (myChoice == 'rock' && opponentsCardChoice == 'rock'){setTimeout(displayDraw, 1000)}
    if (myChoice == 'rock' && opponentsCardChoice == 'paper'){setTimeout(displayLose, 1000)}
    if (myChoice == 'rock' && opponentsCardChoice == 'scissor'){setTimeout(displayWin, 1000)}

    if (myChoice == 'paper' && opponentsCardChoice == 'rock'){setTimeout(displayWin, 1000)}
    if (myChoice == 'paper' && opponentsCardChoice == 'paper'){setTimeout(displayDraw, 1000)}
    if (myChoice == 'paper' && opponentsCardChoice == 'scissor'){setTimeout(displayLose, 1000)}

    if (myChoice == 'scissor' && opponentsCardChoice == 'rock'){setTimeout(displayLose, 1000)}
    if (myChoice == 'scissor' && opponentsCardChoice == 'paper'){setTimeout(displayWin, 1000)}
    if (myChoice == 'scissor' && opponentsCardChoice == 'scissor'){setTimeout(displayDraw, 1000)}
}
function displayDraw(){
    alert('you draw!')
    finishGame()
}
function displayWin(){
    alert('you win!')
    finishGame()
}
function displayLose(){
    alert('you lose!')
    finishGame()
}
function finishGame(){
    window.location.reload();
}