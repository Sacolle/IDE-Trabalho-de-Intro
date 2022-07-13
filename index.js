const red = 'var(--menu-red)';

function menuToggle(subMenuId,itemListId){
	document.querySelectorAll('.MenuButtons').forEach(e=>e.style.backgroundColor = 'black')
	document.querySelectorAll('.MenuItems').forEach(e=>e.style.display = 'none')

	document.getElementById(subMenuId).style.backgroundColor = red 
	document.getElementById(itemListId).style.display = 'block'
}

