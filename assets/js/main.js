/* GENERAL CONSTANT */



/* const userAgeSelected = userAge.options[userAge.selectedIndex].text;
console.log(userAgeSelected);
const minors = document.getElementById ('minors');
const adult = document.getElementById ('adult');
const over = document.getElementById ('over'); */


const generalPrice = 0.21;
const minorDiscount = (generalPrice * 20 / 100);
const overDisconut = (generalPrice * 40 / 100);
const euro = '€';

/* DISCOUNT CONSTANT */


const btnGenerator = document.querySelector('.btn_generator');

btnGenerator.addEventListener('click', function () {
      const userName = document.getElementById ('name').value;
      console.log(userName);
      const userKm = document.getElementById ('km').value;
      console.log(userKm);
      const userAge = document.getElementById ('age').value;
      console.log(userAge);

      document.getElementById("ticket_card").style.display = "block";
      
      if (userAge < 18) {
            finalPrice = userKm * (generalPrice - minorDisconut);
            document.getElementById("discount").innerHTML = "-20%";       
      } else if (userAge > 64) {
            finalPrice = userKm * (generalPrice - overDisconut);
            document.getElementById("discount").innerHTML = "-40%";
      } else {
            finalPrice = userKm * generalPrice;
      }

      document.getElementById("final_price").innerHTML = `${finalPrice.toFixed( 2 )} €`;

      document.getElementById("ticket_name").innerHTML = userName;
      document.getElementById("ticket_distance").innerHTML = userKm;
      document.getElementById("discount").innerHTML = "/";
      document.getElementById("current_age").innerHTML = userAge;


});