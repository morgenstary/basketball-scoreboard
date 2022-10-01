
const eventNameEnterBtn = document.getElementById('event-name-enter-btn')
const clearNameEventBtn = document.getElementById('clear-event-name-btn')

const homeAddOneBtn = document.getElementById('home-add-one-btn')
const homeAddTwoBtn = document.getElementById('home-add-two-btn')
const homeAddThreeBtn = document.getElementById('home-add-three-btn')
const backgroundHome = document.getElementById('background-home')

const homeBonusAdd = document.getElementById('home-bonus-add-btn')
const homeBonusClear = document.getElementById('home-bonus-clear-btn')

const homeFoulsAdd = document.getElementById('home-fouls-add-btn')
const homeFoulsClear = document.getElementById('home-fouls-clear-btn')

const homeTolAdd = document.getElementById('home-tol-add-btn')
const homeTolClear = document.getElementById('home-tol-clear-btn')

const uploadHomeLogo = document.getElementById('upload-home-logo')

const homeNameEnter = document.getElementById('home-name-enter-btn')
const homeNameClear = document.getElementById('home-name-clear-btn')

const timerEnterBtn = document.getElementById('timer-enter-btn')
const timerStartBtn = document.getElementById('timer-start-btn')
const timerStopBtn = document.getElementById('timer-stop-btn')

const timerClearBtn = document.getElementById('timer-clear-btn')
const overtimeBtn = document.getElementById('timer-ot-btn')

const periodAdvBtn = document.getElementById('period-adv-btn')
const periodClearBtn = document.getElementById('period-clear-btn')

const playerFoulsEnterBtn = document.getElementById('player-fouls-enter-btn')
const playerFoulsClearBtn = document.getElementById('player-fouls-clear-btn')

const guestAddOneBtn = document.getElementById('guest-add-one-btn')
const guestAddTwoBtn = document.getElementById('guest-add-two-btn')
const guestAddThreeBtn = document.getElementById('guest-add-three-btn')
const backgroundGuest = document.getElementById('background-guest')

const guestBonusAdd = document.getElementById('guest-bonus-add-btn')
const guestBonusClear = document.getElementById('guest-bonus-clear-btn')

const guestFoulsAdd = document.getElementById('guest-fouls-add-btn')
const guestFoulsClear = document.getElementById('guest-fouls-clear-btn')

const guestTolAdd = document.getElementById('guest-tol-add-btn')
const guestTolClear = document.getElementById('guest-tol-clear-btn')

const uploadGuestLogo = document.getElementById('upload-guest-logo')

const guestNameEnter = document.getElementById('guest-name-enter-btn')
const guestNameClear = document.getElementById('guest-name-clear-btn')

const playerNumSet = document.getElementById('player-num-set')
const playerFoulsSet = document.getElementById('player-fouls-set')

const clearScoreboardBtn = document.getElementById('clear-scoreboard-btn')


// Dom Manipulation

const eventInput = document.getElementById('event-input')

const clock = document.getElementById('clock')

const eventText = document.getElementById('event-text')

const timerSetMin = document.getElementById('timer-set-min')
const timerSetSec = document.getElementById('timer-set-sec')

const homeLogoBkg = document.getElementById('home-logo')
const guestLogoBkg = document.getElementById('guest-logo')


const homeName = document.getElementById('home-name')
const homeTeamName = document.getElementById('home-team-name')
const guestName = document.getElementById('guest-name')
const guestTeamName = document.getElementById('guest-team-name')

const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')

const homeBonus1 = document.getElementById('home-bonus-1')
const homeBonus2 = document.getElementById('home-bonus-2')
const guestBonus1 = document.getElementById('guest-bonus-1')
const guestBonus2 = document.getElementById('guest-bonus-2')

const homeFoulsNum = document.getElementById('home-fouls-num')
const guestFoulsNum = document.getElementById('guest-fouls-num')

const homeTolNum = document.getElementById('home-tol-num')
const guestTolNum = document.getElementById('guest-tol-num')

const periodNum = document.getElementById('period-num')

const playerNum = document.getElementById('player-num')
const playerFoulsNum = document.getElementById('player-fouls-num')

const letterO = document.getElementById('letter-o')
const letterT = document.getElementById('letter-t')

// // Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit")

// // Select option buttons
const startAction = document.getElementById("timer-start-btn")
const stopAction = document.getElementById("timer-stop-btn")
const resetAction = document.getElementById("timer-clear-btn")


let homeNum = 0
let guestNum = 0
let homeBonusCount = 0
let guestBonusCount = 0
let homeFoulsCount = 0
let guestFoulsCount = 0
let homeTolCount = 0
let guestTolCount = 0
let periodCount = 1
let playerCount = 0
let foulsCount = 0

// Controlboard Button States and Colors
function mouseOver(btn) {
    btn.style.backgroundColor = "#ffff00"
    btn.style.cursor = "pointer"
}

function mouseOverNoBkg(btn) {
    btn.style.backgroundColor = ""
    btn.style.cursor = "pointer"
}

function mouseOut(btn) {
    btn.style.backgroundColor = "#D9D9D9"
}

function mouseDown(btn) {
    btn.style.backgroundColor = "chartreuse"
}

function mouseDownGrey(btn) {
    btn.style.backgroundColor = "#D9D9D9"
}

function mouseUp(btn) {
    btn.style.backgroundColor = "#ffff00"
}

function mouseUpNoBkg(btn) {
    btn.style.backgroundColor = ""
}

// Controlboard add score
homeAddOneBtn.addEventListener('click', function () {
    homeNum = homeNum += 1
    homeScore.textContent = homeNum
    getVal()
})

homeAddTwoBtn.addEventListener('click', function () {
    homeNum = homeNum += 2
    homeScore.textContent = homeNum
    getVal()
})

homeAddThreeBtn.addEventListener('click', function () {
    homeNum = homeNum += 3
    homeScore.textContent = homeNum
    getVal()
})

guestAddOneBtn.addEventListener('click', function () {
    guestNum = guestNum += 1
    guestScore.textContent = guestNum
    getVal()
})

guestAddTwoBtn.addEventListener('click', function () {
    guestNum = guestNum += 2
    guestScore.textContent = guestNum
    getVal()
})

guestAddThreeBtn.addEventListener('click', function () {
    guestNum = guestNum += 3
    guestScore.textContent = guestNum
    getVal()
})

function getVal() {
    // reset number to 0 after 999 (home)
    if (homeNum > 996) {
        homeNum = 0
    }
    // reset number to 0 after 999 (guest)
    if (guestNum > 996) {
        guestNum = 0
    }
    // highlight the leader with animation and set both teams backgrounds to white in a tie
    if (homeNum > guestNum) {
        // set animation to home
        backgroundHome.style.outline = '2px solid green'
        backgroundHome.style.animationName = 'greenToYellow'
        backgroundHome.style.animationDuration = '.25s'
        backgroundHome.style.animationTimingFunction = 'linear'
        backgroundHome.style.animationDirection = 'alternate'
        backgroundHome.style.animationIterationCount = 'infinite'
        // turn guest to black
        backgroundGuest.style.animationName = 'yellowToBlack'
        backgroundGuest.style.animationIterationCount = '1'
        backgroundGuest.style.outline = '0px solid black'
    } else if (homeNum < guestNum) {
        // set animation to guest
        backgroundGuest.style.outline = '2px solid green'
        backgroundGuest.style.animationName = 'greenToYellow'
        backgroundGuest.style.animationDuration = '.25s'
        backgroundGuest.style.animationTimingFunction = 'linear'
        backgroundGuest.style.animationDirection = 'alternate'
        backgroundGuest.style.animationIterationCount = 'infinite'
        // turn home to black
        backgroundHome.style.animationName = 'yellowToBlack'
        backgroundHome.style.animationIterationCount = '1'
        backgroundHome.style.outline = '0px solid black'

    } else {
        // set both teams to white (tie)
        backgroundHome.style.animationName = 'yellowToWhite'
        backgroundHome.style.animationIterationCount = '1'
        backgroundHome.style.animationDuration = '.001s'

        backgroundGuest.style.animationName = 'yellowToWhite'
        backgroundGuest.style.animationIterationCount = '1'
        backgroundGuest.style.animationDuration = '.001s'

        backgroundHome.style.outline = '2px solid white'
        backgroundGuest.style.outline = '2px solid white'
    }
}

// Controlboard home bonus control

homeBonusAdd.addEventListener('click', function () {
    homeBonusCount = homeBonusCount + 1
    if (homeBonusCount == 1) {
        homeBonus1.style.backgroundColor = 'red'
    } else if (homeBonusCount == 2) {
        homeBonus2.style.backgroundColor = 'red'
        homeBonusCount = 0
    }
})

homeBonusClear.addEventListener('click', function () {
    homeBonusCount = 0
    homeBonus1.style.backgroundColor = '#D9D9D9'
    homeBonus2.style.backgroundColor = '#D9D9D9'
})

// Controlboard guest bonus control

guestBonusAdd.addEventListener('click', function () {
    guestBonusCount = guestBonusCount + 1
    if (guestBonusCount == 1) {
        guestBonus1.style.backgroundColor = 'red'
    } else if (guestBonusCount == 2) {
        guestBonus2.style.backgroundColor = 'red'
        guestBonusCount = 0
    }
})

guestBonusClear.addEventListener('click', function () {
    guestBonusCount = 0
    guestBonus1.style.backgroundColor = '#D9D9D9'
    guestBonus2.style.backgroundColor = '#D9D9D9'
})

// Controlboard home fouls control

homeFoulsAdd.addEventListener('click', function () {
    homeFoulsCount = homeFoulsCount + 1
    if (homeFoulsCount < 100) {
        homeFoulsNum.textContent = homeFoulsCount
    }
})

homeFoulsClear.addEventListener('click', function () {
    homeFoulsCount = 0
    homeFoulsNum.textContent = homeFoulsCount
})

// Controlboard guest fouls control
guestFoulsAdd.addEventListener('click', function () {
    guestFoulsCount = guestFoulsCount + 1
    if (guestFoulsCount < 100) {
        guestFoulsNum.textContent = guestFoulsCount
    }
})

guestFoulsClear.addEventListener('click', function () {
    guestFoulsCount = 0
    guestFoulsNum.textContent = guestFoulsCount
})

// Controlboard home tol control
homeTolAdd.addEventListener('click', function () {
    homeTolCount = homeTolCount + 1
    if (homeTolCount < 10) {
        homeTolNum.textContent = homeTolCount
    }
})

homeTolClear.addEventListener('click', function () {
    homeTolCount = 0
    homeTolNum.textContent = homeTolCount
})

// Controlboard guest tol control
guestTolAdd.addEventListener('click', function () {
    guestTolCount = guestTolCount + 1
    if (guestTolCount < 10) {
        guestTolNum.textContent = guestTolCount
    }
})

guestTolClear.addEventListener('click', function () {
    guestTolCount = 0
    guestTolNum.textContent = guestTolCount
})

// Controlboard Team Logos
function homeLogo(event) {
    let reader = new FileReader()
    reader.onload = function () {
        let output = document.getElementById('home-logo')
        output.src = reader.result
    }
    reader.readAsDataURL(event.target.files[0])
}

function homeLogoClear() {
    let output = document.getElementById('home-logo')
    uploadHomeLogo.value = ''
    output.src = 'images/blank.png'
}

function guestLogo(event) {
    let reader = new FileReader()
    reader.onload = function () {
        let output = document.getElementById('guest-logo')
        output.src = reader.result
    }
    reader.readAsDataURL(event.target.files[0])
}

function guestLogoClear() {
    let output = document.getElementById('guest-logo')
    uploadGuestLogo.value = ''
    output.src = 'images/blank.png'
}

// Controlboard Home Naming
function getHomeTeamName() {
    const inputVal = homeName.value
    homeTeamName.textContent = inputVal
}

function clearHomeTeamName() {
    homeTeamName.textContent = "Home"
    homeName.value = ""
}

// Controlboard Guest Naming
function getGuestTeamName() {
    const inputVal = guestName.value
    guestTeamName.textContent = inputVal
}

function clearGuestTeamName() {
    guestTeamName.textContent = "Guest"
    guestName.value = ""
}

// Controlboard Event Naming
function getEventName() {
    const inputVal = eventInput.value
    eventText.textContent = inputVal
}

function clearEventName() {
    eventText.textContent = "National Championships"
    eventInput.value = ""
}

// Controlboard timer module

// Timer module 

// // Default inital value of timer
let timerMinutes = 12
let timerSeconds = 60

// get user timer entry
function getUserTime() {
    timerSeconds = timerSetSec.value
    timerMinutes = timerSetMin.value

    let userSec = Number(timerSeconds)
    let userMin = Number(timerMinutes * 60)

    countDownTime = userMin + userSec

    const time = findTimeString()
    countContainer.forEach((count, index) => {
        count.innerHTML = time.charAt(index)
    })

    letterO.textContent = ''
    letterT.textContent = ''
    clock.style.color = '#FDA605'
}

function setOT() {
    letterO.textContent = 'O'
    letterT.textContent = 'T'
    timerSetMin.value = '05'
    timerSetSec.value = '00'
    clock.style.color = '#ffff00ea'
    countDownTime = 300

    const time = findTimeString()

    countContainer.forEach((count, index) => {
        count.innerHTML = time.charAt(index)
    })
}

// const defaultValue = 12 * 60
let defaultValue = timerMinutes * timerSeconds

// // variable to the time
let countDownTime = defaultValue

// // variable to store time interval
let timerID

// // Variable to track whether timer is running or not
let isStopped = true


// // Function calculate time string
const findTimeString = () => {
    let minutes = String(Math.trunc(countDownTime / 60))
    let seconds = String(countDownTime % 60)

    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    if (seconds.length === 1) {
        seconds = "0" + seconds
    }

    return minutes + seconds
}

// // Function to start Countdown
const startTimer = () => {
    if (isStopped) {
        isStopped = false
        timerID = setInterval(runCountDown, 1000)
    }
}

// // Function to stop Countdown
const stopTimer = () => {
    isStopped = true
    if (timerID) {
        clearInterval(timerID)
    }
}

// // Function to reset Countdown
const resetTimer = () => {
    stopTimer()
    countDownTime = defaultValue;
    renderTime()
    timerSetMin.value = '12'
    timerSetSec.value = '00'
    letterO.textContent = ''
    letterT.textContent = ''
    clock.style.color = '#FDA605'
}

// HTML5 Audio
let timeoutAudio = new Audio('audio/Basketball_Buzzer_SFX.mp3')
timeoutAudio.volume = .2

// // Attach onclick event to buttons
timerEnterBtn.onclick = getUserTime
overtimeBtn.onclick = setOT
startAction.onclick = startTimer
resetAction.onclick = resetTimer
stopAction.onclick = stopTimer

// // Function to display coundown on screen
const renderTime = () => {
    const time = findTimeString()
    countContainer.forEach((count, index) => {
        count.innerHTML = time.charAt(index)
    })
}

// // function to execute timer
const runCountDown = () => {
    // decement time
    countDownTime -= 1
    //Display updated time
    renderTime()

    // timeout on zero
    if (countDownTime === 0) {
        stopTimer()
        // Play alarm on timeout

        timeoutAudio.play()
        countDownTime = defaultValue
    }
}

// Controlboard period module
periodAdvBtn.addEventListener('click', function () {
    periodCount = periodCount + 1
    if (periodCount < 5) {
        periodNum.textContent = periodCount
    }
})

periodClearBtn.addEventListener('click', function () {
    periodCount = 1
    periodNum.textContent = periodCount
})

// Controlboard player module
function getPlayerFouls() {
    const inputPlayerVal = playerNumSet.value
    playerNum.textContent = inputPlayerVal

    const inputFoulsVal = playerFoulsSet.value
    playerFoulsNum.textContent = inputFoulsVal
}

playerNumSet.addEventListener('click', function () {
    playerNumSet.value = ''
})

playerFoulsSet.addEventListener('click', function () {
    playerFoulsSet.value = ''
})

function clearPlayerFouls() {
    playerNum.textContent = '0'
    playerFoulsNum.textContent = '0'
    playerNumSet.value = '00'
    playerFoulsSet.value = '00'
}

// Controlboard scoreboard clear module
clearScoreboardBtn.addEventListener('click', function () {
    eventText.textContent = "National Championships"
    homeTeamName.textContent = "Home"
    homeName.value = ''
    guestTeamName.textContent = "Guest"
    guestName.value = ''
    homeNum = 0
    guestNum = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    backgroundGuest.style.animationName = 'yellowToBlack'
    backgroundGuest.style.animationIterationCount = '1'
    backgroundGuest.style.outline = '0px solid black'
    backgroundHome.style.animationName = 'yellowToBlack'
    backgroundHome.style.animationIterationCount = '1'
    backgroundHome.style.outline = '0px solid black'
    homeBonusCount = 0
    guestBonusCount = 0
    homeBonus1.style.backgroundColor = '#D9D9D9'
    homeBonus2.style.backgroundColor = '#D9D9D9'
    guestBonus1.style.backgroundColor = '#D9D9D9'
    guestBonus2.style.backgroundColor = '#D9D9D9'
    homeFoulsCount = 0
    homeFoulsNum.textContent = homeFoulsCount
    guestFoulsCount = 0
    guestFoulsNum.textContent = guestFoulsCount
    homeTolCount = 0
    homeTolNum.textContent = homeTolCount
    guestTolCount = 0
    guestTolNum.textContent = guestTolCount
    periodCount = 1
    periodNum.textContent = periodCount
    playerNum.textContent = '0'
    playerFoulsNum.textContent = '0'
    playerNumSet.value = '00'
    playerFoulsSet.value = '00'
    resetTimer()
    homeLogoClear()
    guestLogoClear()
})

// Controlboard Event Name Module
eventNameEnterBtn.addEventListener('mouseover', () => {
    mouseOver(eventNameEnterBtn)
})

eventNameEnterBtn.addEventListener('mouseout', () => {
    mouseOut(eventNameEnterBtn)
})

eventNameEnterBtn.addEventListener('mousedown', () => {
    mouseDown(eventNameEnterBtn)
    getEventName()
})

eventNameEnterBtn.addEventListener('mouseup', () => {
    mouseUp(eventNameEnterBtn)
})

clearNameEventBtn.addEventListener('mouseover', () => {
    mouseOver(clearNameEventBtn)
})

clearNameEventBtn.addEventListener('mouseout', () => {
    mouseOut(clearNameEventBtn)
})

clearNameEventBtn.addEventListener('mousedown', () => {
    mouseDown(clearNameEventBtn)
    clearEventName()
})

clearNameEventBtn.addEventListener('mouseup', () => {
    mouseUp(clearNameEventBtn)
})

// Controlboard Home Module

homeAddOneBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(homeAddOneBtn)
})

homeAddOneBtn.addEventListener('mousedown', () => {
    mouseDownGrey(homeAddOneBtn)
})

homeAddOneBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(homeAddOneBtn)
})

homeAddTwoBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(homeAddTwoBtn)
})

homeAddTwoBtn.addEventListener('mousedown', () => {
    mouseDownGrey(homeAddTwoBtn)
})

homeAddTwoBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(homeAddTwoBtn)
})

homeAddThreeBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(homeAddThreeBtn)
})

homeAddThreeBtn.addEventListener('mousedown', () => {
    mouseDownGrey(homeAddThreeBtn)
})

homeAddThreeBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(homeAddThreeBtn)
})

homeBonusAdd.addEventListener('mouseover', () => {
    mouseOver(homeBonusAdd)
})

homeBonusAdd.addEventListener('mouseout', () => {
    mouseOut(homeBonusAdd)
})

homeBonusAdd.addEventListener('mousedown', () => {
    mouseDown(homeBonusAdd)
})

homeBonusAdd.addEventListener('mouseup', () => {
    mouseUp(homeBonusAdd)
})

homeBonusClear.addEventListener('mouseover', () => {
    mouseOver(homeBonusClear)
})

homeBonusClear.addEventListener('mouseout', () => {
    mouseOut(homeBonusClear)
})

homeBonusClear.addEventListener('mousedown', () => {
    mouseDown(homeBonusClear)
})

homeBonusClear.addEventListener('mouseup', () => {
    mouseUp(homeBonusClear)
})

homeFoulsAdd.addEventListener('mouseover', () => {
    mouseOver(homeFoulsAdd)
})

homeFoulsAdd.addEventListener('mouseout', () => {
    mouseOut(homeFoulsAdd)
})

homeFoulsAdd.addEventListener('mousedown', () => {
    mouseDown(homeFoulsAdd)
})

homeFoulsAdd.addEventListener('mouseup', () => {
    mouseUp(homeFoulsAdd)
})

homeFoulsClear.addEventListener('mouseover', () => {
    mouseOver(homeFoulsClear)
})

homeFoulsClear.addEventListener('mouseout', () => {
    mouseOut(homeFoulsClear)
})

homeFoulsClear.addEventListener('mousedown', () => {
    mouseDown(homeFoulsClear)
})

homeFoulsClear.addEventListener('mouseup', () => {
    mouseUp(homeFoulsClear)
})

homeTolAdd.addEventListener('mouseover', () => {
    mouseOver(homeTolAdd)
})

homeTolAdd.addEventListener('mouseout', () => {
    mouseOut(homeTolAdd)
})

homeTolAdd.addEventListener('mousedown', () => {
    mouseDown(homeTolAdd)
})

homeTolAdd.addEventListener('mouseup', () => {
    mouseUp(homeTolAdd)
})

homeTolClear.addEventListener('mouseover', () => {
    mouseOver(homeTolClear)
})

homeTolClear.addEventListener('mouseout', () => {
    mouseOut(homeTolClear)
})

homeTolClear.addEventListener('mousedown', () => {
    mouseDown(homeTolClear)
})

homeTolClear.addEventListener('mouseup', () => {
    mouseUp(homeTolClear)
})

homeNameEnter.addEventListener('mouseover', () => {
    mouseOver(homeNameEnter)
})

homeNameEnter.addEventListener('mouseout', () => {
    mouseOut(homeNameEnter)
})

homeNameEnter.addEventListener('mousedown', () => {
    mouseDown(homeNameEnter)
    getHomeTeamName()
})

homeNameEnter.addEventListener('mouseup', () => {
    mouseUp(homeNameEnter)
})

homeNameClear.addEventListener('mouseover', () => {
    mouseOver(homeNameClear)
})

homeNameClear.addEventListener('mouseout', () => {
    mouseOut(homeNameClear)
})

homeNameClear.addEventListener('mousedown', () => {
    mouseDown(homeNameClear)
    clearHomeTeamName()
})

homeNameClear.addEventListener('mouseup', () => {
    mouseUp(homeNameClear)
})

// Controlboard Timer Module

timerEnterBtn.addEventListener('mouseover', () => {
    mouseOver(timerEnterBtn)
})

timerEnterBtn.addEventListener('mouseout', () => {
    mouseOut(timerEnterBtn)
})

timerEnterBtn.addEventListener('mousedown', () => {
    mouseDown(timerEnterBtn)
})

timerEnterBtn.addEventListener('mouseup', () => {
    mouseUp(timerEnterBtn)
})

timerStartBtn.addEventListener('mouseover', () => {
    mouseOver(timerStartBtn)
})

timerStartBtn.addEventListener('mouseout', () => {
    mouseOut(timerStartBtn)
})

timerStartBtn.addEventListener('mousedown', () => {
    mouseDown(timerStartBtn)
})

timerStartBtn.addEventListener('mouseup', () => {
    mouseUp(timerStartBtn)
})

timerStopBtn.addEventListener('mouseover', () => {
    mouseOver(timerStopBtn)
})

timerStopBtn.addEventListener('mouseout', () => {
    mouseOut(timerStopBtn)
})

timerStopBtn.addEventListener('mousedown', () => {
    mouseDown(timerStopBtn)
})

timerStopBtn.addEventListener('mouseup', () => {
    mouseUp(timerStopBtn)
})

timerClearBtn.addEventListener('mouseover', () => {
    mouseOver(timerClearBtn)
})

timerClearBtn.addEventListener('mouseout', () => {
    mouseOut(timerClearBtn)
})

timerClearBtn.addEventListener('mousedown', () => {
    mouseDown(timerClearBtn)
})

timerClearBtn.addEventListener('mouseup', () => {
    mouseUp(timerClearBtn)
})

overtimeBtn.addEventListener('mouseover', () => {
    mouseOver(overtimeBtn)
})

overtimeBtn.addEventListener('mouseout', () => {
    mouseOut(overtimeBtn)
})

overtimeBtn.addEventListener('mousedown', () => {
    mouseDown(overtimeBtn)
})

overtimeBtn.addEventListener('mouseup', () => {
    mouseUp(overtimeBtn)
})

// Controlboard Period Module

periodAdvBtn.addEventListener('mouseover', function () {
    mouseOver(periodAdvBtn)
})

periodAdvBtn.addEventListener('mouseout', function () {
    mouseOut(periodAdvBtn)
})

periodAdvBtn.addEventListener('mousedown', function () {
    mouseDown(periodAdvBtn)
    clearEventName()
})

periodAdvBtn.addEventListener('mouseup', function () {
    mouseUp(periodAdvBtn)
})

periodClearBtn.addEventListener('mouseover', function () {
    mouseOver(periodClearBtn)
})

periodClearBtn.addEventListener('mouseout', function () {
    mouseOut(periodClearBtn)
})

periodClearBtn.addEventListener('mousedown', function () {
    mouseDown(periodClearBtn)
    clearEventName()
})

periodClearBtn.addEventListener('mouseup', function () {
    mouseUp(periodClearBtn)
})

// Controlboard Player Module

playerFoulsEnterBtn.addEventListener('mouseover', function () {
    mouseOver(playerFoulsEnterBtn)
})

playerFoulsEnterBtn.addEventListener('mouseout', function () {
    mouseOut(playerFoulsEnterBtn)
})

playerFoulsEnterBtn.addEventListener('mousedown', function () {
    mouseDown(playerFoulsEnterBtn)
    getPlayerFouls()
})

playerFoulsEnterBtn.addEventListener('mouseup', function () {
    mouseUp(playerFoulsEnterBtn)
})

playerFoulsClearBtn.addEventListener('mouseover', function () {
    mouseOver(playerFoulsClearBtn)
})

playerFoulsClearBtn.addEventListener('mouseout', function () {
    mouseOut(playerFoulsClearBtn)
})

playerFoulsClearBtn.addEventListener('mousedown', function () {
    mouseDown(playerFoulsClearBtn)
    clearPlayerFouls()
})

playerFoulsClearBtn.addEventListener('mouseup', function () {
    mouseUp(playerFoulsClearBtn)
})

// Controlboard Scoreboard Module

clearScoreboardBtn.addEventListener('mouseover', function () {
    mouseOver(clearScoreboardBtn)
})

clearScoreboardBtn.addEventListener('mouseout', function () {
    mouseOut(clearScoreboardBtn)
})

clearScoreboardBtn.addEventListener('mousedown', function () {
    mouseDown(clearScoreboardBtn)
    clearEventName()
})

clearScoreboardBtn.addEventListener('mouseup', function () {
    mouseUp(clearScoreboardBtn)
})

// Controlboard Guest Module

guestAddOneBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(guestAddOneBtn)
})

guestAddOneBtn.addEventListener('mousedown', () => {
    mouseDownGrey(guestAddOneBtn)
})

guestAddOneBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(guestAddOneBtn)
})

guestAddTwoBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(guestAddTwoBtn)
})

guestAddTwoBtn.addEventListener('mousedown', () => {
    mouseDownGrey(guestAddTwoBtn)
})

guestAddTwoBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(guestAddTwoBtn)
})

guestAddThreeBtn.addEventListener('mouseover', () => {
    mouseOverNoBkg(guestAddThreeBtn)
})

guestAddThreeBtn.addEventListener('mousedown', () => {
    mouseDownGrey(guestAddThreeBtn)
})

guestAddThreeBtn.addEventListener('mouseup', () => {
    mouseUpNoBkg(guestAddThreeBtn)
})

guestBonusAdd.addEventListener('mouseover', () => {
    mouseOver(guestBonusAdd)
})

guestBonusAdd.addEventListener('mouseout', () => {
    mouseOut(guestBonusAdd)
})

guestBonusAdd.addEventListener('mousedown', () => {
    mouseDown(guestBonusAdd)
})

guestBonusAdd.addEventListener('mouseup', () => {
    mouseUp(guestBonusAdd)
})

guestBonusClear.addEventListener('mouseover', () => {
    mouseOver(guestBonusClear)
})

guestBonusClear.addEventListener('mouseout', () => {
    mouseOut(guestBonusClear)
})

guestBonusClear.addEventListener('mousedown', () => {
    mouseDown(guestBonusClear)
})

guestBonusClear.addEventListener('mouseup', () => {
    mouseUp(guestBonusClear)
})

guestFoulsAdd.addEventListener('mouseover', () => {
    mouseOver(guestFoulsAdd)
})

guestFoulsAdd.addEventListener('mouseout', () => {
    mouseOut(guestFoulsAdd)
})

guestFoulsAdd.addEventListener('mousedown', () => {
    mouseDown(guestFoulsAdd)
})

guestFoulsAdd.addEventListener('mouseup', () => {
    mouseUp(guestFoulsAdd)
})

guestFoulsClear.addEventListener('mouseover', () => {
    mouseOver(guestFoulsClear)
})

guestFoulsClear.addEventListener('mouseout', () => {
    mouseOut(guestFoulsClear)
})

guestFoulsClear.addEventListener('mousedown', () => {
    mouseDown(guestFoulsClear)
})

guestFoulsClear.addEventListener('mouseup', () => {
    mouseUp(guestFoulsClear)
})

guestTolAdd.addEventListener('mouseover', () => {
    mouseOver(guestTolAdd)
})

guestTolAdd.addEventListener('mouseout', () => {
    mouseOut(guestTolAdd)
})

guestTolAdd.addEventListener('mousedown', () => {
    mouseDown(guestTolAdd)
})

guestTolAdd.addEventListener('mouseup', () => {
    mouseUp(guestTolAdd)
})

guestTolClear.addEventListener('mouseover', () => {
    mouseOver(guestTolClear)
})

guestTolClear.addEventListener('mouseout', () => {
    mouseOut(guestTolClear)
})

guestTolClear.addEventListener('mousedown', () => {
    mouseDown(guestTolClear)
})

guestTolClear.addEventListener('mouseup', () => {
    mouseUp(guestTolClear)
})

guestNameEnter.addEventListener('mouseover', () => {
    mouseOver(guestNameEnter)
})

guestNameEnter.addEventListener('mouseout', () => {
    mouseOut(guestNameEnter)
})

guestNameEnter.addEventListener('mousedown', () => {
    mouseDown(guestNameEnter)
    getGuestTeamName()
})

guestNameEnter.addEventListener('mouseup', () => {
    mouseUp(guestNameEnter)
})

guestNameClear.addEventListener('mouseover', () => {
    mouseOver(guestNameClear)
})

guestNameClear.addEventListener('mouseout', () => {
    mouseOut(guestNameClear)
})

guestNameClear.addEventListener('mousedown', () => {
    mouseDown(guestNameClear)
    clearGuestTeamName()
})

guestNameClear.addEventListener('mouseup', () => {
    mouseUp(guestNameClear)
})














