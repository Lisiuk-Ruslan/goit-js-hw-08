const throttle = require('lodash.throttle');
let formData = {};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(saveInputValue, 500));
form.addEventListener('submit', clearStorage);
function saveInputValue(e) {
	formData[e.target.name] = e.target.value;
	localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
getLS()
function getLS() {
	if (localStorage.getItem('feedback-form-state')) {
		formData = JSON.parse(localStorage.getItem('feedback-form-state'));
		
		for (let key in formData) {
			form.elements[key].value = formData[key];
		}

	}
}

function clearStorage(e) {
	e.preventDefault();
	form.reset();
	console.log(formData);
	localStorage.removeItem('feedback-form-state');
}