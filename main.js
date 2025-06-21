function updateTimer() {
  const now = new Date();
  const tomorrow = new Date();

  tomorrow.setHours(24, 0, 0, 0);

  const diff = tomorrow - now;

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateTimer, 1000);

updateTimer();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

function updateSliderButtons(container, leftButton, rightButton) {
  const scrollLeft = container.scrollLeft;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (scrollLeft <= 0) {
    leftButton.style.opacity = "0.5";
    leftButton.style.pointerEvents = "none";
  } else {
    leftButton.style.opacity = "1";
    leftButton.style.pointerEvents = "auto";
  }

  if (scrollLeft >= maxScrollLeft - 1) {
    rightButton.style.opacity = "0.5";
    rightButton.style.pointerEvents = "none";
  } else {
    rightButton.style.opacity = "1";
    rightButton.style.pointerEvents = "auto";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollableContainer = document.querySelector(
    ".best__sallers-products-wrapper"
  );

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  if (scrollableContainer && leftArrow && rightArrow) {
    updateSliderButtons(scrollableContainer, leftArrow, rightArrow);

    scrollableContainer.addEventListener("scroll", () => {
      updateSliderButtons(scrollableContainer, leftArrow, rightArrow);
    });

    const getProductWidthWithGap = () => {
      const firstProduct = scrollableContainer.querySelector(
        ".best__sallers-product"
      );
      if (firstProduct) {
        const productWidth = firstProduct.offsetWidth;

        const containerStyle = window.getComputedStyle(scrollableContainer);
        let gapValue = 0;

        if (containerStyle.columnGap && containerStyle.columnGap !== "normal") {
          gapValue = parseFloat(containerStyle.columnGap);
        } else if (
          containerStyle.gap &&
          containerStyle.gap.split(" ").length > 1
        ) {
          gapValue = parseFloat(containerStyle.gap.split(" ")[1]);
        } else if (containerStyle.gap && containerStyle.gap !== "normal") {
          gapValue = parseFloat(containerStyle.gap);
        }

        return productWidth + gapValue;
      }
      return 0;
    };

    rightArrow.addEventListener("click", () => {
      const widthToScroll = getProductWidthWithGap();
      if (widthToScroll > 0) {
        const currentScroll = scrollableContainer.scrollLeft;
        const maxScroll =
          scrollableContainer.scrollWidth - scrollableContainer.clientWidth;
        const remainingScroll = maxScroll - currentScroll;

        const actualScrollDistance = Math.min(widthToScroll, remainingScroll);

        scrollableContainer.scrollBy({
          left: actualScrollDistance,
          behavior: "smooth",
        });
      }
    });

    leftArrow.addEventListener("click", () => {
      const widthToScroll = getProductWidthWithGap();
      if (widthToScroll > 0) {
        const currentScroll = scrollableContainer.scrollLeft;

        const actualScrollDistance = Math.min(widthToScroll, currentScroll);

        scrollableContainer.scrollBy({
          left: -actualScrollDistance,
          behavior: "smooth",
        });
      }
    });
  } else {
    console.warn(
      "Один або кілька елементів для прокрутки (контейнер, стрілки або продукти) не знайдені. Переконайтеся, що класи та структура HTML правильні."
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let scrollableContainer = document.querySelector(".wishes__reviews-wrapper");

  let leftArrow = document.querySelector(".left-arrow-recall");
  let rightArrow = document.querySelector(".right-arrow-recall");

  if (scrollableContainer && leftArrow && rightArrow) {
    updateSliderButtons(scrollableContainer, leftArrow, rightArrow);

    scrollableContainer.addEventListener("scroll", () => {
      updateSliderButtons(scrollableContainer, leftArrow, rightArrow);
    });

    rightArrow.addEventListener("click", () => {
      const scrollDistance = 411;
      const currentScroll = scrollableContainer.scrollLeft;
      const maxScroll =
        scrollableContainer.scrollWidth - scrollableContainer.clientWidth;
      const remainingScroll = maxScroll - currentScroll;

      const actualScrollDistance = Math.min(scrollDistance, remainingScroll);

      scrollableContainer.scrollBy({
        left: actualScrollDistance,
        behavior: "smooth",
      });
    });

    leftArrow.addEventListener("click", () => {
      const scrollDistance = 411;
      const currentScroll = scrollableContainer.scrollLeft;

      const actualScrollDistance = Math.min(scrollDistance, currentScroll);

      scrollableContainer.scrollBy({
        left: -actualScrollDistance,
        behavior: "smooth",
      });
    });
  } else {
    console.log(
      "Один або кілька елементів для прокрутки не знайдені. Переконайтеся, що класи та структура HTML правильні."
    );
  }
});
