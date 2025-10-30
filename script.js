const dropbtn = document.getElementById('dropbtn');
const dropdown = document.querySelector('.dropdown');

dropbtn.addEventListener('click',(e)=> {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

window.addEventListener('click', (e)=> {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});