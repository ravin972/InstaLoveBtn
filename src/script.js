var contain = document.querySelector("#post-container");
var likeIcon = document.querySelector("lord-icon");
var likedIcon = document.querySelector(".like-icon");
var image = document.querySelector("#post-container img");
var isLiked = false;

likedIcon.addEventListener("dblclick", () => {
  if (!isLiked) {
    // Liked
    likeIcon.style.color = "red"; // Change the color to red when liked
    isLiked = true;
  } else {
    // Unliked (reset)
    likeIcon.style.color = "primary:#e4e4e4"; // Reset the color to its initial state
    isLiked = false;
  }
});

contain.addEventListener("dblclick", () => {
  likeIcon.style.transform = "translate(-50%, -50%) scale(1)";
  likeIcon.style.opacity = 0.7;
  likeIcon.style.color = "red";

  setTimeout(() => {
    likeIcon.style.transform = "translate(-50%, -50%) scale(0)";
    likeIcon.style.opacity = 0.2;
  }, 500);

  image.style.transform = "scale(1.2)";
  image.style.transition = "transform 0.35s ease-in-out";

  setTimeout(() => {
    image.style.transform = "scale(1)";
  }, 450);
});
