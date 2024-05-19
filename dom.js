// const container = document.getElementById('container');
// console.log('parent',container.parentElement);
// console.log('previous Sibling',container.previousElementSibling);
// console.log('Next Sibling', container.nextElementSibling);
// console.log('children', container.children);

//editing DOM element
const containerText = document.getElementById('containerText')
containerText.innerHTML = 'Am I really a child.'


// Creating DOM Element

const newHeading = document.createElement('h1');
containerText.appendChild(newHeading);
newHeading.innerHTML = 'Introduction'
newHeading.style.color = 'red'
const button =  document.getElementById('button');
button.style.button = 'none';
button.style.padding = "10px 15px";
button.style.background = "purple"
button.style.cursor = "pointer";
button.style.borderRadius = "5px";

button.addEventListener('click', function(){
    button.innerHTML = 'clicked!';
    button.style.background = "green";
})




