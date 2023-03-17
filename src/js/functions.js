function handleClick(evt) {
  console.log('I got resized!!', evt.srcElement);
  console.log('I got resized!!', evt.srcElement.style.width)
  console.log('I got resized!!', evt.srcElement.style.height)
}

function logClick() {
  this.wrapper = document.getElementById('viewer')
  this.wrapper.addEventListener('click',(evt) => handleClick(evt));
}