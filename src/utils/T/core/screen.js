export const fullScreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

export const exitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

export const fullSreenEnable = () => {
    var isFullscreen = document.fullscreen ||
        document.mozFullScreen ||
        document.msFullScreen ||
        document.webkitIsFullScreen;;
    return isFullscreen;
}

export const fullScreenChange = (callback = () => { }) => {
    document.addEventListener('fullscreenchange', callback);
    document.addEventListener('msfullscreenchange', callback);
    document.addEventListener('mozfullscreenchange', callback);
    document.addEventListener('webkitfullscreenchange', callback);
}