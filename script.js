

function loadDogs() {
    fetch('https://api.thedogapi.com/v1/breeds')
.then(response=>response.json())
.then(data=>displayDogs(data))

}

function displayDogs(dogList) {
    console.log(dogList);
}