const red = 'var(--menu-red)';

function menuToggle(subMenuId,itemListId){
	document.querySelectorAll('.MenuButtons').forEach(e=>e.style.backgroundColor = 'black')
	document.querySelectorAll('.MenuItems').forEach(e=>e.style.display = 'none')

	document.getElementById(subMenuId).style.backgroundColor = red 
	document.getElementById(itemListId).style.display = 'block'
}

function scrollToIdOnClick(event){
	event.preventDefault();
	const section = getScrollTopByHref(event.target) - 45;
	scrollToPosition(section);
}

function scrollToPosition(section){
	// window.scroll({
	//     top: section,
	//     behavior: "smooth"
	// })
	smoothScrollTo(0,section,1500)
}   

function getScrollTopByHref(element){
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function smoothScrollTo(endX, endY, duration) {
	//retirado de: https://gist.github.com/origamid/79ec81fa835e16ff754eb1e5fbb0c047
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== 'undefined' ? duration : 400;

	// Easing function
	const easeInOutQuart = (time, from, distance, duration) => {
	if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
	return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
	const time = new Date().getTime() - startTime;
	const newX = easeInOutQuart(time, startX, distanceX, duration);
	const newY = easeInOutQuart(time, startY, distanceY, duration);
	if (time >= duration) {
		clearInterval(timer);
	}
	window.scroll(newX, newY);
	}, 1000 / 60); // 60 fps
};

