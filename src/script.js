document.addEventListener("DOMContentLoaded", () => {
  const blogBtn = document.querySelector("#blog-btn");
  const socialsBtn = document.querySelector("#socials-btn");
  const youtubeBtn = document.querySelector("#youtube-btn");
  const matrixBtn = document.querySelector("#Matrix-btn");
  const friendsLocks = document.querySelectorAll("[data-friends-only]");
  const friendsAccessKey = "friendsOnlyAccessGranted";

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

  const unlockAllFriendsEntries = () => {
    friendsLocks.forEach((lock) => {
      const content = lock.querySelector(".locked-content");
      const status = lock.querySelector(".unlock-status");
      const unlockBtn = lock.querySelector(".unlock-btn");

      if (content) {
        content.hidden = false;
      }
      if (status) {
        status.textContent = "Friends-only content unlocked.";
      }
      if (unlockBtn) {
        unlockBtn.hidden = true;
      }
    });
  };

  if (localStorage.getItem(friendsAccessKey) === "true") {
    unlockAllFriendsEntries();
  }

  friendsLocks.forEach((lock) => {
    const unlockBtn = lock.querySelector(".unlock-btn");
    const status = lock.querySelector(".unlock-status");
    const passcode = (lock.dataset.passcode || "").trim();

    if (!unlockBtn) {
      return;
    }

    unlockBtn.addEventListener("click", () => {
      const entered = window.prompt("Enter the friends-only passcode:");

      if (entered === null) {
        return;
      }

      if (entered.trim() === passcode) {
        localStorage.setItem(friendsAccessKey, "true");
        unlockAllFriendsEntries();
      } else if (status) {
        status.textContent = "Wrong passcode.";
      }
    });
  });
});
