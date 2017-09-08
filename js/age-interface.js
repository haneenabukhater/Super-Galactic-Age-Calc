import { AgeCalc } from './../js/ageCalc.js';

$(document).ready(function() {

  // $('#ageConverter').submit(function(event) {
  //   event.preventDefault();
  //   let input = $('#age').val();
  //   if (isNaN(input)) {
  //     alert("Please enter a valid age.");
  //   } else{
  //     let output = new AgeCalc(input);
  //
  //     $('#result').show();
  //   }
  // });
  $('#dateToAge').submit(function(event) {
      event.preventDefault();
      let date = $('#bday').val();
      let contintent= $('#dropDown :selected').text();
      let gender = "female";
      
      let ageCalc = new AgeCalc(date);
      let age = ageCalc.bdayToAge(date);
      $('#ageDate').text(age);
      $('#ageInSecResult').text(ageCalc.ageToSec(age));
      $('#earthYears').text(ageCalc.residence(age, contintent, gender));
      $('#result').show();
  });
});




// $('#btnA').click(function(){
//   $('#ageConverter').show();
// });
