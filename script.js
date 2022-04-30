const ratingBtn = document.querySelectorAll(".popup_button");
const popupRatings = document.querySelector(".popup_ratings");
const submitBtn = document.querySelector(".popup_submit");
const firstWindow = document.querySelector(".popup_firstWindow");
const secondWindow = document.querySelector(".popup_secondWindow");
const displayNumber = document.querySelector(".popup_displayNumber");

let id;

const displayRating = function () {
	displayNumber.textContent = `You selected ${id} out of ${ratingBtn.length}`;
};

const changeSite = function () {
	if (!submitBtn.classList.contains("popup_button--active")) {
		alert("Please rate!");
	} else {
		firstWindow.style.display = "none";
		secondWindow.style.display = "block";
		displayRating(id);
	}
};

const mouseOver = function () {
	ratingBtn.forEach(function (rate) {
		if (rate.classList.contains("popup_button--active")) {
			submitBtn.classList.add("popup_button--active");
			submitBtn.style.color = "white";
		}
	});
};

const mouseOut = function () {
	submitBtn.classList.remove("popup_button--active");
	submitBtn.style.color = "orange";
};

popupRatings.addEventListener("click", function (event) {
	if (event.target.dataset.id) id = event.target.dataset.id;
	ratingBtn.forEach(function (rate) {
		if (rate.dataset.id != id)
			rate.classList.remove("popup_button--active");
	});

	if (event.target.classList.contains("popup_button")) {
		event.target.classList.toggle("popup_button--active");
		// id = 0;
	}
});

submitBtn.addEventListener("mouseover", mouseOver);
submitBtn.addEventListener("mouseout", mouseOut);
submitBtn.addEventListener("click", changeSite);
