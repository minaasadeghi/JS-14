//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
const firstP = document.querySelector("p");
console.log(firstP.textContent);

//todo3. Get each of the paragraph using document.querySelector(#id)
const p1 = document.querySelector('#p1');
console.log( p1.textContent);

const p2 = document.querySelector('#p2');
console.log( p2.textContent);

const p3 = document.querySelector('#p3');
console.log( p3.textContent);

const p4 = document.querySelector('#p4');
console.log( p4.textContent);

//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
const allP = document.querySelectorAll('p');
console.log( allP);

//todo5. Loop through the nodeList and get the text content of each paragraph
allP.forEach((para, index) => {
    console.log(`Paragraph ${index + 1}:`, para.textContent);
});

//todo6. Set a text content to the fourth paragraph
p4.textContent = 'Where were you born?';
console.log( p4.textContent);

//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

