/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];
const prompt = prompt('Please enter your text:');
let colorText = '';
for (let i = 0; i < prompt.length; i++) {
    const randC = colors[Math.floor(Math.random() * colors.length)];

    colorText += `<span style="color: ${randC};">${prompt[i]}</span>`;
}

document.getElementById('word').innerHTML = colorText;