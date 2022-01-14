const navBar = document.getElementById('navBar');
const root = document.documentElement;

const updateBodyOffset = () => {
	const navHeight = navBar.offsetHeight;

	root.style.setProperty('--body-offset', navHeight + 'px');
};
updateBodyOffset();

const resizeObserver = new ResizeObserver(updateBodyOffset);
resizeObserver.observe(navBar);
