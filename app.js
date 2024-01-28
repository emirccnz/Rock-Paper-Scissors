const getContainers = {
    container1:document.getElementById("container1"),
    container2:document.getElementById("container2"),
    container3:document.getElementById("container3")
}
const getStartGameButton = document.getElementById("startGameButton")
const getBigImg = document.getElementById("choosing");
const choosedImg = document.getElementById("choosed");
const getBigImgDiv = document.getElementsByClassName("bigImgDiv")
const getBigImgRobot = document.getElementById("choosing2");
const choosedImgRobot = document.getElementById("choosed2");
const getOtherImgDiv = document.getElementById("otherImgDiv")
const choices = Array.from(document.getElementsByClassName("otherImgs"));
const getPlayersScore = document.getElementById("scorePlayerH1")
const getRobotsScore = document.getElementById("scoreRobotH1")
const youH1 = document.getElementById("youH1")
const robotH1 = document.getElementById("robotH1")
const getFinishGameButton = document.getElementById("finishGameButton")
const getWhoWinsH1 = document.getElementById("whoWins")
const playersLastScore = document.getElementById("finishedPlayerSc")
const robotsLastScore = document.getElementById("finishedRobotSc")
const getPlayAgainButton = document.getElementById("playAgainButton")
const getGameDivBot = document.getElementById("gameDivRobot")
let playersChoice = "rock";
let robotsChoice = "rock";
let extraSentences = null
events()

function events(){
    document.addEventListener("DOMContentLoaded",()=>{
        getContainers.container2.style.display = "none"
        getContainers.container3.style.display = "none"
        getContainers.container1.style.display = "flex"
    })
    getStartGameButton.addEventListener("click",()=>{
        getContainers.container1.style.display = "none"
        getContainers.container2.style.display = "flex"
    })
    playerSelectedChoice()
    getFinishGameButton.addEventListener("click",()=>{
        getContainers.container1.style.display = "none"
        getContainers.container2.style.display = "none"
        getContainers.container3.style.display = "flex"
        getWinnerFinished()
        getScores()
        getPlayersScore.textContent = "0"
        getRobotsScore.textContent = "0"
    })
    getPlayAgainButton.addEventListener("click",()=>{
        getContainers.container2.style.display = "none"
        getContainers.container3.style.display = "none"
        getContainers.container1.style.display = "flex"
    })
}

function playerSelectedChoice(){
    choices.forEach((element)=>{
        element.addEventListener("click",()=>{
            getOtherImgDiv.style.visibility = "hidden"
            let elementSrc = element.getAttribute("src")
            getBigImg.style.display = "none"
            getBigImgRobot.style.display = "none"
            getCount()
            setTimeout(()=>{
            choosedImg.setAttribute("src",elementSrc)
            choosedImg.style.display = "block"
            choosedImgRobot.style.display = "block"
            switch(elementSrc)
            {
                case "images/pngwing.com (6).png":
                    choosedImg.style.width = "90%"
                    choosedImg.style.marginLeft = "1rem"
                    choosedImg.style.marginTop = "0px"
                    break
                case "images/scissors.png":
                    choosedImg.style.width = "90%"
                    choosedImg.style.marginTop = "3rem"
                    choosedImg.style.marginLeft = "1rem"
                    break
                case "images/rock.png":
                    choosedImg.style.width = "100%"
                    choosedImg.style.marginTop = "0px"
                    choosedImg.style.marginLeft = "0px"
                    break
                default:
                    break
            }
        robotSelectedChoice()
        score()
        getWinner()
            },2000)
            setTimeout(()=>{
                getOtherImgDiv.style.visibility = "visible"
                getBigImg.style.display = "inline-block"
                getBigImgRobot.style.display = "inline-block"
                choosedImg.style.display = "none"
                choosedImgRobot.style.display = "none"
                youH1.innerHTML = `${youH1.innerHTML.replace(extraSentences,"")}`
                robotH1.innerHTML = `${robotH1.innerHTML.replace(extraSentences,"")}`
            },4000)
           
        })
    })
    
}

function robotSelectedChoice(){
    let randomNum = Math.floor(Math.random() *3) + 1
            switch(randomNum){
                case 1:
                    choosedImgRobot.setAttribute("src","images/rock.png")
                    choosedImgRobot.style.width = "100%"
                    choosedImgRobot.style.marginTop = "0px"
                    choosedImgRobot.style.marginLeft = "0px"
                    break
                case 2:
                    choosedImgRobot.setAttribute("src","images/pngwing.com (6).png")
                    choosedImgRobot.style.width = "90%"
                    choosedImgRobot.style.marginLeft = "1rem"
                    choosedImgRobot.style.marginTop = "0px"
                    break
                case 3:
                    choosedImgRobot.setAttribute("src","images/scissors.png")
                    choosedImgRobot.style.width = "90%"
                    choosedImgRobot.style.marginTop = "3rem"
                    choosedImgRobot.style.marginLeft = "1rem"
                    break
            }
}

function getCount(){
    let newH1 = document.createElement("h1")
    let newH2 = document.createElement("h1")
    getBigImgDiv[0].appendChild(newH1)
    getBigImgDiv[1].appendChild(newH2)
    newH1.style.fontSize = "11rem"
    newH2.style.fontSize = "11rem"
    let count = 2
    newH1.style.color = "purple"
    newH2.style.color = "purple"
    newH1.textContent = count
    newH2.textContent = count
    function countDown(){
        count--
        newH1.style.color = "orange"
        newH2.style.color = "orange"
        newH1.textContent = count
        newH2.textContent = count
      if (count <= 0) {
        clearInterval(countDownInterval)
        newH1.remove()
        newH2.remove()
      }
    }

    const countDownInterval = setInterval(countDown,1000)
}

function score(){
    if(choosedImg.getAttribute("src") == "images/rock.png"){
        playersChoice = "rock"
    }
    else if(choosedImg.getAttribute("src") == "images/scissors.png"){
        playersChoice = "scissors"
    }
    else if(choosedImg.getAttribute("src") == "images/pngwing.com (6).png"){
        playersChoice = "paper"
    }

    if(choosedImgRobot.getAttribute("src") == "images/rock.png"){
        robotsChoice = "rock"
    }
    else if(choosedImgRobot.getAttribute("src") == "images/scissors.png"){
        robotsChoice = "scissors"
    }
    else if(choosedImgRobot.getAttribute("src") == "images/pngwing.com (6).png"){
        robotsChoice = "paper"
    }
}

function getWinner(){
    
    if(playersChoice=="rock" && robotsChoice=="scissors"){
        getPlayersScore.textContent = `${Number(getPlayersScore.textContent) + 1}`
        extraSentences = " <br> Win"
        youH1.innerHTML = `${youH1.textContent.concat(extraSentences)}`
    }
    else if(playersChoice=="scissors" && robotsChoice=="paper"){
        getPlayersScore.textContent = `${Number(getPlayersScore.textContent) + 1}`
        extraSentences = " <br> Win"
        youH1.innerHTML = `${youH1.textContent.concat(extraSentences)}`
    }
    else if(playersChoice=="paper" && robotsChoice=="rock"){
        getPlayersScore.textContent = `${Number(getPlayersScore.textContent) + 1}`
        extraSentences = " <br> Win"
        youH1.innerHTML = `${youH1.textContent.concat(extraSentences)}`
    }
    
    else if(robotsChoice=="rock" && playersChoice=="scissors"){
        getRobotsScore.textContent = `${Number(getRobotsScore.textContent) + 1}`
        extraSentences = " <br> Wins"
        robotH1.innerHTML = `${robotH1.textContent.concat(extraSentences)}`
    }
    else if(robotsChoice=="scissors" && playersChoice=="paper"){
        getRobotsScore.textContent = `${Number(getRobotsScore.textContent) + 1}`
        extraSentences = " <br> Wins"
        robotH1.innerHTML = `${robotH1.textContent.concat(extraSentences)}`
    }
    else if(robotsChoice=="paper" && playersChoice=="rock"){
        getRobotsScore.textContent = `${Number(getRobotsScore.textContent) + 1}`
        extraSentences = " <br> Wins"
        robotH1.innerHTML = `${robotH1.textContent.concat(extraSentences)}`
    }

    else{
        extraSentences = " <br> Draw"
        robotH1.innerHTML = `${robotH1.textContent.concat(extraSentences)}`
        youH1.innerHTML = `${youH1.textContent.concat(extraSentences)}`
    }
}

function getWinnerFinished(){
    if(Number(getPlayersScore.textContent) > Number(getRobotsScore.textContent)){
        getWhoWinsH1.innerHTML = "You Win!"
    }
    else if(Number(getPlayersScore.textContent) < Number(getRobotsScore.textContent)){
        getWhoWinsH1.innerHTML = "Robot Wins!"
    }
    else{
        getWhoWinsH1.innerHTML = "Draw!"
    }
}
function getScores(){
    playersLastScore.innerHTML = getPlayersScore.textContent
    robotsLastScore.innerHTML = getRobotsScore.textContent
}