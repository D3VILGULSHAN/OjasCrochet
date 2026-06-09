const slider = document.querySelector('.slider-content');

let scrollAmount = 0;
let scrollStep = 1;
let maxScroll = slider.scrollWidth - slider.clientWidth;

function autoScroll() {
    scrollAmount += scrollStep;

    if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        scrollStep = -scrollStep;
    }

    slider.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
}

autoScroll();

console.log("Products Loaded");

document.querySelectorAll("#para h2").forEach(h2 => {
  h2.innerHTML = [...h2.textContent]
    .map(char => `<span>${char}</span>`)
    .join("");
});

gsap.to("#para h2 span", {
  color: "#0c2738",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#para h2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub: 2
  }
});

const reviews = [
    {
        text: "Amazing service. Evil Eye was a bit too big and they offered to resize it for free and very swiftly.",
        author: "Kathryn Murphy",
        img: "images/review1.jpg"
    },
    {
        text: "The quality is outstanding! Delivery was fast and the packaging was beautiful.",
        author: "Robert Fox",
        img: "images/review2.jpg"
    },
    {
        text: "I absolutely love my purchase! Looks even better in real life.",
        author: "Theresa Webb",
        img: "images/review3.jpg"
    }
];

let currentIndex = 0;

const quoteEl = document.querySelector(".reviews-quote");
const authorEl = document.querySelector(".reviews-author");
const imgEl = document.querySelector(".reviews-right img");

document.querySelector(".reviews-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
});

document.querySelector(".reviews-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview();
});

function updateReview() {
    quoteEl.textContent = reviews[currentIndex].text;
    authorEl.textContent = reviews[currentIndex].author;
    imgEl.src = reviews[currentIndex].img;
}
