document.addEventListener("DOMContentLoaded", () => {
  const blogBtn = document.querySelector("#blog-btn");
  if (blogBtn) {
    blogBtn.addEventListener("click", () => {
      window.location.href = "blog.html";
    });
  }
});
