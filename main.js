const button = document.querySelector('.btn-primary');

button.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (data) {
            return data.json();
        })
        .then(function (response) {
            const image = document.querySelector('.card-img-top');
            image.src = response.message;
        })
});

const submit = document.querySelector('.btn-secondary');

submit.addEventListener('click', function () {
    const input = document.querySelector('#user-input');
    const inputValue = input.value;

    const url = 'https://goweather.herokuapp.com/weather/' + inputValue;


    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (response) {
            const temp = document.querySelector('#temperature');
            const wind = document.querySelector('#wind');
            const description = document.querySelector('#description');

            temp.innerText = response.temperature;
            wind.innerText = response.wind;
            description.innerText = response.description;
        })
});