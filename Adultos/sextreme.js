
function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://cdn-1.livestreamgratis.com/sextreme/tracks-v1a1/mono.m3u8?remote=177.6.98.154&token=ae448341de845400daee11d185a220adff02ad6a-2bd48cbb5865ab2a4862c01e3042ef95-1707486757-1707475957');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
        document.title = url;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
        document.title = url;
    }
}

var url = window.location.href.split("#")[1];
play_stream(url);
