const sunicon = document.querySelector('#sun');
const moonicon = document.querySelector('#moon');
const body = document.querySelector('body');

sunicon.addEventListener('click', () => {
    sunicon.classList.add('hidden');
    moonicon.classList.remove('hidden');
    body.classList.remove('dark')
});

moonicon.addEventListener('click', () => {
    moonicon.classList.add('hidden');
    sunicon.classList.remove('hidden');
    body.classList.add('dark')
});