const userName = document.getElementById ('name')
const userKm = document.getElementById ('Km')
const userAge = document.getElementById ('age')

const basicPrice = 0.21
const ticketPrice = userKm * basicPrice
const euro = '€'

const btnGenerator = document.querySelector('.btn_generator');

btnGenerator.addEventListener('click', function () {
      console.log(userName.value);
      console.log(userKm.value);
      console.log(age.value);
});