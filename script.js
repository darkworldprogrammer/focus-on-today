const checkList = document.querySelectorAll('.checkbox');
// const goalContainer = document.querySelectorAll('.goal-container');
const inputs = document.querySelectorAll('input');
const errorLabel = document.querySelector('.err-label');
const progressBar = document.querySelector('.progress-bar');

checkList.forEach((c) => {
  c.addEventListener('click', (e) => {
    const allInputsFilled = [...inputs].every((e) => {
      return e.value;
    });
    if (allInputsFilled) {
      c.parentElement.classList.toggle('checked');
    } else if (!allInputsFilled) {
      progressBar.classList.add('show-error');
    }
  });
});

inputs.forEach((e) => {
  e.addEventListener('focus', () => {
    progressBar.classList.remove('show-error');
  });
});
