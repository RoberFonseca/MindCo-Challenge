import { saveUser, saveUserInteraction } from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log(`-----MindCotine-----`);
});

const taskForm = document.getElementById('form');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = taskForm['name'];
  const age = taskForm['age'];
  const email = taskForm['email'];

  // Save user
  saveUser(name.value, age.value, email.value);
});
