import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
	
}).catch(function (error) {
	switch (error.name) {
		case 'RangeError':
			
			break;

		default:
			
			break;
	}
});
player.on('play', function (data) {
	
});

player.on('timeupdate', throttle((data) => {
	localStorage.setItem('videoplayer-current-time', data.seconds);
	console.log(localStorage.getItem('videoplayer-current-time'));
	}, 1000));



