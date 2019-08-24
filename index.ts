// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
appDiv.onclick= function(){
  console.log("Click1")
}
appDiv.onclick= function(){
  console.log("Click2")
}
appDiv.addEventListener('click',()=>{
  console.log("click3");
})