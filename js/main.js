//My solution:

// document.querySelectorAll('.panel').forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('open');
//         setTimeout(function () {
//             item.classList.toggle('open-active');
//         }, 500);
//     })
// })

//Wes' solution:

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleText(e) {
    if (e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleText));
