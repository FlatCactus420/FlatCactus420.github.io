let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/charlene.jpg') {
      myImage.setAttribute('src','images/luckas-old-house.png');
    } else {
      myImage.setAttribute('src','images/charlene.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'You are the biggest nugget, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are the biggest nugget, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  