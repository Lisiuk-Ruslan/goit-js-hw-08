import { save, load } from '../js/local_storage';
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
// console.log('formRef:', formRef);
const emailRef = document.querySelector('[name="email"]');
// console.log('emailRef:', emailRef);
const messageRef = document.querySelector('[name="message"]');
// console.log('messageRef:', messageRef);
const LOCALSTORAGE_KEY = 'feedback-form-state';

let feedbackData = {
    email: '',
    message: '',
};

formRef.addEventListener('input', throttle(updateFeedbackData, 500));
formRef.addEventListener('submit', onFormSubmit);

if (load(LOCALSTORAGE_KEY) !== undefined) {
    feedbackData = load(LOCALSTORAGE_KEY);
    //   console.log('feedbackData:', feedbackData);
    emailRef.value = feedbackData.email;
    messageRef.value = feedbackData.message;
}

function updateFeedbackData(e) {
    feedbackData[e.target.name] = e.target.value;
    save(LOCALSTORAGE_KEY, feedbackData);
    //   console.log(e.target.name, ':', e.target.value);
}

function onFormSubmit(e) {
    e.preventDefault();

    console.log(feedbackData);

    formRef.reset();
    localStorage.clear();
}
