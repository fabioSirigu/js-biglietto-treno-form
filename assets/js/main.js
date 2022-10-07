/* GENERAL CONSTANT */
const userName = document.getElementById ('name').value;
console.log(userName);
const userKm = document.getElementById ('km').value;
console.log(userKm);
const userAge = document.getElementById ('age').value;
console.log(userAge);


/* const userAgeSelected = userAge.options[userAge.selectedIndex].text;
console.log(userAgeSelected);
const minors = document.getElementById ('minors');
const adult = document.getElementById ('adult');
const over = document.getElementById ('over'); */


const basicPrice = 0.21;
let ticketPrice = userKm * basicPrice;
const euro = '€';

/* DISCOUNT CONSTANT */
const salesMinors = (ticketPrice / 100) * 20;
const salesOver = (ticketPrice / 100) * 40;

const btnGenerator = document.querySelector('.btn_generator');

btnGenerator.addEventListener('click', function () {
      document.getElementById("ticket_card").style.display = "block";
      
      if (userAge < 18) {
            ticketPrice = ticketPrice - salesMinors;
            document.getElementById("discount").innerHTML = "-20%";       
      } else if (userAge > 64) {
            ticketPrice = ticketPrice - salesOver;
            document.getElementById("discount").innerHTML = "-40%";
      }

      document.getElementById("final_price").innerHTML = `${ticketPrice.toFixed( 2 )} €`;
      document.getElementById("ticket_name").innerHTML = userName;
      document.getElementById("ticket_distance").innerHTML = userKm;
      document.getElementById("discount").innerHTML = "/";
      document.getElementById("current_age").innerHTML = userAge;


});