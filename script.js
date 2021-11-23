const audio = document.getElementById("audioPlayer")

function play(){
    audio.play()
}

function pause(){
    audio.pause()
}

function stop(){
    audio.pause()
    audio.currentTime = 0
}

function back15s(){
    audio.currentTime -= 15
}

function foward15s(){
    audio.currentTime += 15
}

function currentTime(){
    let time = audio.currentTime
    let hour = Math.floor(time / 3600)
    let minutes = Math.floor((time - (hour * 3600)) / 60)
    let seconds = Math.floor(time % 60)

    if(hour < 10){
        hour = '0' + hour
    }
    if(minutes < 10){
        minutes = '0' + minutes
    }
    if(seconds < 10) {
        seconds = '0' + seconds
    }

    document.querySelector('#currentTime').innerHTML = minutes + ':' + seconds
}
setInterval(currentTime, 1000)

function backVolume(){
    audio.volume = 1
}

function mute(){
    audio.volume = 0
}