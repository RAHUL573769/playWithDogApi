

function loadDogs(){
    fetch('https://api.thedogapi.com/v1/breeds')
.then(response=>response.json())
.then(data=>displayDogs(data))

}

function displayDogs(dogList) {
    // console.log(dogList);

    const main=document.getElementById('main');
    const first10Data=dogList.slice(10,100);

  
    for(const dog of first10Data){
        const div=document.createElement('div');
        div.className="col-lg-3"
    
        // console.log(dog);
      div.innerHTML=`
      <h2>${dog.name}</h2>
      <p>${dog.temperament}</p>
      <h4>${dog.weight.imperial}</h4>
      <img width="400px" height="250px" src="${dog.image.url}"/>
      `
      main.appendChild(div)
    }
   
}