const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9_.%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'COOL'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT COOL'
        gmailResult.style.color = 'red'
    }
};



const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let position = 0;
const step = 5;
const maxPosition = parentBlock.clientWidth - childBlock.clientWidth;

function moveBlock() {
    if (position <= maxPosition) {
        childBlock.style.left = `${position}px`;
        position += step;
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()