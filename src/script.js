document.addEventListener("DOMContentLoaded", () => {
  const blogBtn = document.querySelector("#blog-btn");
  const socialsBtn = document.querySelector("#socials-btn");
  const youtubeBtn = document.querySelector("#youtube-btn");
  const matrixBtn = document.querySelector("#Matrix-btn");

  if (blogBtn) {
    blogBtn.addEventListener("click", () => {
      window.location.href = "blog.html";
    });
  }

  if (socialsBtn) {
    socialsBtn.addEventListener("click", () => {
      window.open("https://github.com/TrentUwU888", "_blank", "noopener");
    });
  }

  if (youtubeBtn) {
    youtubeBtn.addEventListener("click", () => {
      window.open("https://www.youtube.com/@TBruns-w9o", "_blank", "noopener");
    });
  }

  if (matrixBtn) {
    matrixBtn.addEventListener("click", () => {
      alert("Matrix link coming soon.");
    });
  }
});
