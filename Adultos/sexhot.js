
function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://cdn-1.livestreamgratis.com/sexyhot/tracks-v1a1/mono.m3u8?remote=177.6.98.154&token=2d6e1f5744717814f0ef819c5a3616245aa16c6d-c7de8ea2e2a51aeea7fbfcc4ac235d29-1707486953-1707476153');
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
