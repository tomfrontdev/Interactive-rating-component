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

const previousWindow = function (event) {
	if (event.target == event.currentTarget) {
		firstWindow.style.display = "block";
		secondWindow.style.display = "none";
	}
};

const nextWindow = function (event) {
	if (!submitBtn.classList.contains("popup_button--active")) {
		alert("Select a button!");
	} else {
		firstWindow.style.display = "none";
		secondWindow.style.display = "block";
		displayRating(id);
		document.body.addEventListener("click", previousWindow);
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
submitBtn.addEventListener("click", nextWindow);
