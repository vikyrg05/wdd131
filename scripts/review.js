let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount);
}

reviewCount += 1;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("review-count").textContent = `Total Reviews Submitted: ${reviewCount}`;