function main(){
    copy(
        document.getElementById("source") ,
        document.getElementById("player").getContext("2d")
    )
}

function copy(videoSource,destinationCanvasContext){
    return setInterval(function render(){
        destinationCanvasContext.drawImage(videoSource, 0, 0)
    },0)
}