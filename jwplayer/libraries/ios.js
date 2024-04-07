var retryCounts = {};
var maxRetries = 2;
var retryDelay = 2000;

document.getElementById('video-container').style.display = 'block';
var video = document.getElementById('video');

async function loadStream(index = 0) {
    if (index >= streams.length) {
        console.error("Todas as transmissões estão indisponíveis");
        return;
    }

    let stream = streams[index];
    retryCounts[stream] = (retryCounts[stream] || 0) + 1;

    if (video.canPlayType("application/vnd.apple.mpegurl") !== "") {
        video.src = stream;
        try {
            await video.play();
        } catch (e) {
            console.error("Erro ao reproduzir a transmissão: ", e);
            if (retryCounts[stream] < maxRetries) {
                console.log("Reconectando-se ao stream: ", stream);
                setTimeout(() => loadStream(index), retryDelay);
            } else {
                console.log("Mudar para a próxima transmissão");
                setTimeout(() => loadStream(index + 1), retryDelay);
            }
        }
    } else {
        setTimeout(() => loadStream(index + 1), retryDelay);
    }
}

video.muted = true;
video.controls = true;
video.setAttribute('playsinline', '');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

loadStream();


var style = document.createElement('style');
style.type = 'text/css';
var css = '.menu { margin-top:50px !important }';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);