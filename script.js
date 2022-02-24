

function loadDogs() {
    fetch('https://api.thedogapi.com/v1/breeds')
.then(response=>response.json())
.then(data=>displayDogs(data))

}

function displayDogs(dogList) {
    // console.log(dogList);

    const main=document.getElementById('main');
    const first10Data=dogList.slice(0,10);

    const div=document.createElement('div');

    for(const dog of first10Data){
      
    }
   
}