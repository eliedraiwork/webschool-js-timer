let currentTime = new Date();
currentTime.setHours(0);
currentTime.setMinutes(0);
currentTime.setSeconds(0);

function formatNumber(num) {
	return String(num).padStart(2, '0'); // '0009'
}

function render() {
	document.querySelector('#hours').innerHTML = formatNumber(
		currentTime.getHours()
	);
	document.querySelector('#minutes').innerHTML = formatNumber(
		currentTime.getMinutes()
	);
	document.querySelector('#seconds').innerHTML = formatNumber(
		currentTime.getSeconds()
	);
}

document.querySelectorAll('.btn-up').forEach((btn) => {
	btn.addEventListener('click', () => {
		const btnId = btn.id;
		console.log(btnId);
		if (btnId === 'hours-up') {
			currentTime.setHours(currentTime.getHours() + 1);
		} else if (btnId === 'minutes-up') {
			currentTime.setMinutes(currentTime.getMinutes() + 1);
		} else {
			currentTime.setSeconds(currentTime.getSeconds() + 1);
		}
		render();
	});
});

document.querySelectorAll('.btn-down').forEach((btn) => {
	btn.addEventListener('click', () => {
		const btnId = btn.id;
		console.log(btnId);
		if (btnId === 'hours-down') {
			currentTime.setHours(currentTime.getHours() - 1);
		} else if (btnId === 'minutes-down') {
			currentTime.setMinutes(currentTime.getMinutes() - 1);
		} else {
			currentTime.setSeconds(currentTime.getSeconds() - 1);
		}
		render();
	});
});

setInterval(() => {
	currentTime.setSeconds(currentTime.getSeconds() - 1);
	render();
}, 1000);
