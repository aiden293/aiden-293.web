const playlist = [
    { title: "윤하 - 기다리다", file: "music/waiting.mp3" }
  ];
  
  const player = document.getElementById("player");
  
  window.addEventListener("load", () => {
    player.src = playlist[0].file;
    player.play();
  });
  