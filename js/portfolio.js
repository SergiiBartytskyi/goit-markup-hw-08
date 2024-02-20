const listEl = document.querySelector(".js-filter");

const examples = document.querySelectorAll(".js-project__item");
listEl.addEventListener("click", onProjectClick);

function onProjectClick(e) {
	examples.forEach(element => {
		if (element.dataset.option === "all") {
			element.style.display = "block";
		} else if (e.target.dataset.option !== element.dataset.option && e.target.dataset.option !== "all") {
			element.style.display = "none";
		} else {
			element.style.display = "block";
		}
	});
}
