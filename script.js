// 플레이리스트 정의 (여기 mp3 링크는 직접 넣어야 함)
const playlist = [
    { title: "윤하 - 기다리다", src: "music/waiting.mp3" },
    { title: "델리스파이스 - 고백", src: "music/confess.mp3" },
    { title: "10cm - 사랑은 은하수 다방에서", src: "music/love.mp3" }
  ];
  
  let current = 0;
  const audio = document.getElementById("player");
  const nowPlaying = document.getElementById("now-playing");
  
  // 트랙 로드
  function loadTrack(index) {
    audio.src = playlist[index].src;
    nowPlaying.innerText = `🎵 지금 재생 중: ${playlist[index].title}`;
    audio.play();
  }
  
  // 다음 곡 자동 재생
  audio.addEventListener("ended", () => {
    current = (current + 1) % playlist.length;
    loadTrack(current);
  });
  
  // 첫 곡 로드
  window.addEventListener("load", () => {
    loadTrack(current);
  });
  