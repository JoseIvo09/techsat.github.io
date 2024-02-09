
function play_stream(url) {
    var video = document.getElementById('video');
    var m3u8Url = decodeURIComponent(url);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://cdn-1.livestreamgratis.com/venus/tracks-v1a1/mono.m3u8?remote=177.6.98.154&token=fbd58838fa3d4c46de0c7d3389308f081024db9b-958f09b823815fc8776f238762138568-1707487158-1707476358');
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
