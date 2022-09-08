/*const myImage = document.querySelector("img");

myImage.onclick() = () => {
	const mySrc = myImage.getAttribute("src");
	if mySrc === "images/fantome-logo.jpg"{
		myImage.setAttribute("src","images/fantom.webp");
	}else{
		myImage.setAttribute("src","images/fantome-logo.jpg");
	}
}*/

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/fantome-logo.jpg');
  } else {
    myImage.setAttribute('src','images/fantom.webp');
  }
}