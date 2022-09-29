import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
const LOCALSTORAGE_KEY = 'feedback-form-state';

const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

ref.form.addEventListener('submit', onFormSabmit);
ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));
loadText();

function onTextareaInput(evt) {
  const value = evt.target.value;
  save(LOCALSTORAGE_KEY, value);
}

function onFormSabmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  remove(LOCALSTORAGE_KEY);
  console.log('Отправляем форму');
}

function loadText(evt) {
  const saveData = load(LOCALSTORAGE_KEY);
  if (saveData) {
    ref.textarea.value = saveData;
  }
}

const formData = {};
ref.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});
