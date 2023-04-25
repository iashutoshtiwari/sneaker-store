import root from "window-or-global";

export const scrollTo = (top = 0, left = 0, isSmooth = true) => {
	root.scrollTo({
		top: top,
		left: left,
		behavior: isSmooth ? "smooth" : "auto",
	});
};

export const scrollToElement = (id) => {
	const offsetTop = root.document.getElementById(`${id}`) && root.document.getElementById(`${id}`).offsetTop;
	root && root.scrollTo && scrollTo(offsetTop, 0, true);
};
