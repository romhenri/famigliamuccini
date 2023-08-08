console.log("Desenvolvido por Rômulo Henri (2023).")

const getVideo = document.getElementById('moreInfoButton')
const closeVideo = document.getElementById('closeVideo')
const videoBox = document.querySelector(".modal-body")

getVideo.addEventListener('click', () => {
  videoBox.innerHTML = `
  <iframe
  width="100%"
  height="300px"
  src="https://www.youtube.com/embed/Q3Bys7bqHog"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  ></iframe>
  `
})

closeVideo.addEventListener('click', () => {
  videoBox.innerHTML = ``
  console.clear()
  console.log("Desenvolvido por Rômulo Henri (2023).")
})