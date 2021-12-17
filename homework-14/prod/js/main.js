// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
   const player = new YT.Player('video', {
      height: '390',
      width: '640',
      playerVars: { rel: '0', showinfo: '0' },
      videoId: 'M7lc1UVf-VE',
   });
}

window.onload = function () {
   document.body.classList.add('loaded');
}