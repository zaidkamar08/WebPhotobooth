const video = document.getElementById("video");
const filterButtons = document.querySelectorAll(".filters button");
const captureBtn = document.getElementById("captureBtn");
const slots = document.querySelectorAll(".slot");

let photos = [];
let currentFilter = "none";

// Start camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

// Filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.getAttribute("data-filter");
    video.style.filter = currentFilter;
  });
});

// Capture photo
captureBtn.addEventListener("click", () => {
  if (photos.length >= 4) {
    alert("You already took 4 photos");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");

  ctx.filter = currentFilter;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imgData = canvas.toDataURL("image/png");
  photos.push(imgData);

  slots[photos.length - 1].src = imgData;
});
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  if (photos.length < 4) {
    alert("Take 4 photos first!");
    return;
  }

  const img = new Image();
  img.src = photos[0];

  img.onload = () => {
    const width = img.width;
    const height = img.height;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height * 4;

    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 4; i++) {
      const pic = new Image();
      pic.src = photos[i];

      pic.onload = () => {
        ctx.drawImage(pic, 0, i * height, width, height);

        if (i === 3) {
          const finalImage = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = finalImage;
          link.download = "photobooth_strip.png";
          link.click();
        }
      };
    }
  };
});
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  photos = [];

  slots.forEach(slot => {
    slot.src = "";
  });
});
