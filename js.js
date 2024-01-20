const MemeForm = document.querySelector(".meme-generator");
const memeImages = document.querySelector("#memeImage")

MemeForm.addEventListener("submit", function(e) {
  e.preventDefault();
  //create li for meme Image
  // const memeImages = document.querySelector("#memeImage")
  const newMeme = document.createElement("li");
  newMeme.classList.add("meme-img")
  memeImages.appendChild(newMeme);
  //put meme Image inside li
  const URLInput = document.querySelector('#URLInput').value,
    src = URLInput,
    img = document.createElement('img');
  img.src = src;
  newMeme.appendChild(img);
  //put top text on meme Image
  const topText = document.querySelector("#topText");
  const topTextDiv = document.createElement('div');
  topTextDiv.classList.add("text", "top");
  topTextDiv.innerHTML = topText.value;
  newMeme.appendChild(topTextDiv);
  // put bottom text on meme Image
  const bottomText = document.querySelector('#bottomText');
  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.classList.add("text", "bottom");
  bottomTextDiv.innerHTML = bottomText.value;
  newMeme.appendChild(bottomTextDiv);
  //Add remove button on meme Image
  const removeBtn = document.createElement("div");
  removeBtn.classList.add("cancleSymbol");
  removeBtn.innerHTML = "&#10060";
  newMeme.appendChild(removeBtn);
  //to reset the input form and ready for the second input.

});
memeImages.addEventListener("click", function(e) {
  e.target.parentNode.remove();
});

