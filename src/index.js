let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  function fetchToys(){
    fetch("http://localhost:3000/toys")
    .then(response=>response.json())
    .then(json=>createCard(json))
  }

  function createCard(json){
    const collection= document.querySelector('div#toy-collection'):
    //for each toy
    for(const toy of json){
      let newDiv = document.createElement('div')
      newDiv.className= "card"
      createName(toy, newDiv)
      createPhoto(toy, newDiv)
      totalLikes(toy, newDiv)
      addButton(toy, newDiv)
      collection.appendChild(newDiv);
    }
  }

});
