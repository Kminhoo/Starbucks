const tag  = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    // html에서 생성한 id palyer = <div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true,
            loop: true,  //반복재생을 사용하려면 playlist를 추가하여 반복재생될 ID목록을 작성한다.
            playlist: 'An6LvWQuj_8',
        },
        events: {
            onReady: function (event) {
                event.target.mute();  //음소거 
            }
        }
    });
}
