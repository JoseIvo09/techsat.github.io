
function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://cdn-1.livestreamgratis.com/playboy/tracks-v1a1/mono.m3u8?remote=177.6.98.154&token=48bb121bf904d5ae4c106c5ce87d81bc5ab82c25-1f972f70cc330d6b05cd8e2222a896f1-1707484755-1707473955');
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
