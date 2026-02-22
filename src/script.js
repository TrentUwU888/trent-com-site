document.addEventListener("DOMContentLoaded", () => {
  const blogBtn = document.querySelector("#blog-btn");
  const socialsBtn = document.querySelector("#socials-btn");

  if (blogBtn) {
    blogBtn.addEventListener("click", () => {
      window.location.href = "blog.html";
    });
  }

  if (socialsBtn) {
    socialsBtn.addEventListener("click", () => {
      window.open("https://www.youtube.com/@TBruns-w9o", "_blank", "noopener");
    });
  }
});
