import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const onFormThrottle = throttle(onformInput, 500);
formRef.addEventListener('input', onFormThrottle);
formRef.addEventListener('submit', onFormSubmit);

loadText();

const formData = {};

function onformInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value;
  save(LOCALSTORAGE_KEY, formData);
}

function loadText(evt) {
  const { message, email } = formRef;
  const saveData = load(LOCALSTORAGE_KEY);
  if (saveData) {
    message.value = saveData.message;
    email.value = saveData.email;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  const saveData = load(LOCALSTORAGE_KEY);
  console.log(saveData);
  remove(LOCALSTORAGE_KEY);
}
