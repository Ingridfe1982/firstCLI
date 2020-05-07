#!/usr/bin/env node

const { getCode, getName } = require('country-list');
const axios = require('axios').default;
 
// console.log(getName('IS')); // Iceland
// console.log(getCode('Iceland')); // IS
// console.log(getCode('Nowhere-to-be-found-land')); // undefined

let date = new Date();
let getFullYears = date.getFullYear();
// console.log(getFullYears);

let myArgs = process.argv.slice(2);

let myArgsString = myArgs[0];

let myCountryCode = getCode(myArgsString);
console.log(myCountryCode);

axios.get("https://date.nager.at/api/v2/PublicHolidays/" + getFullYears +"/" + myCountryCode)
  .then(function (response) {
    // handle success
    for (let i = 0; i<response.data.length; i++) {
      console.log(response.data[i].name);
      console.log(response.data[i].date);
    }

    console.log("ça marche");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


