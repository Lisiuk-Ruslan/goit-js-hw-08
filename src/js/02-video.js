import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

import { save, load } from '../js/local_storage';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
    'timeupdate',
    throttle(function ({ seconds }) {
        save(LOCALSTORAGE_KEY, seconds);
        // console.log('sec: ', seconds, ' minute: ', Number(seconds / 60).toFixed(1));
    }, 1000)
);

load(LOCALSTORAGE_KEY) === undefined
    ? player.setCurrentTime(0)
    : player.setCurrentTime(load(LOCALSTORAGE_KEY));

// if (load(LOCALSTORAGE_KEY) === undefined) {
//   player.setCurrentTime(0);
// } else {
//   player.setCurrentTime(load(LOCALSTORAGE_KEY));
// }
