console.log("GROOXO site started");
// =========================================
// MEDIA MODAL
// Открытие изображений и видео из портфолио в полный экран
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const mediaModal = document.getElementById("mediaModal");
  const mediaModalContent = document.getElementById("mediaModalContent");
  const mediaModalClose = document.querySelector(".media-modal__close");

  if (!mediaModal || !mediaModalContent || !mediaModalClose) {
    return;
  }

  document.addEventListener("click", (event) => {
    const mediaBlock = event.target.closest(".portfolio-work__media");

    if (!mediaBlock) {
      return;
    }

    const image = mediaBlock.querySelector("img");
    const video = mediaBlock.querySelector("video");

    mediaModalContent.innerHTML = "";

    if (image) {
      const fullImage = document.createElement("img");
      fullImage.src = image.getAttribute("src");
      fullImage.alt = image.getAttribute("alt") || "Изображение портфолио";

      mediaModalContent.appendChild(fullImage);
    }

    if (video) {
      const source = video.querySelector("source");

      if (source) {
        const fullVideo = document.createElement("video");
        const fullSource = document.createElement("source");

        fullVideo.controls = true;
        fullVideo.autoplay = true;
        fullVideo.preload = "metadata";

        fullSource.src = source.getAttribute("src");
        fullSource.type = source.getAttribute("type") || "video/mp4";

        fullVideo.appendChild(fullSource);
        mediaModalContent.appendChild(fullVideo);
      }
    }

    mediaModal.classList.add("is-open");
    document.body.classList.add("modal-open");
  });

  function closeMediaModal() {
    mediaModal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    mediaModalContent.innerHTML = "";
  }

  mediaModalClose.addEventListener("click", closeMediaModal);

  mediaModal.addEventListener("click", (event) => {
    if (event.target === mediaModal) {
      closeMediaModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMediaModal();
    }
  });
});