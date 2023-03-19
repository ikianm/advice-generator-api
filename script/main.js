const generateBtn = document.querySelector('button');
const getAdvice = async () => {
  const p = document.getElementById('advice');
  const id = document.querySelector('h3');
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  id.textContent = `ADVICE #${data.slip.id}`;
  p.textContent = `" ${data.slip.advice} "`;
  btnStyle(false);
  await setTimer();
  generateBtn.addEventListener('click', getAdvice);
};

const setTimer = async () => {
  setTimeout(() => {
    btnStyle(true);
  }, 1500);
};

const btnStyle = onCoolDown => {
  if (onCoolDown) {
    generateBtn.style.background = 'hsl(150, 100%, 66%)';
    generateBtn.classList.remove('coolDown');
  } else {
    generateBtn.style.background = 'hsl(0 , 80% , 60%)';
    generateBtn.classList.add('coolDown');
  }
};

getAdvice();
