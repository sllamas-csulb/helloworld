const moment = require("moment");
const pastDate = moment('26-11-1976', 'DD-MM-YYYY');

console.log( moment().format('dddd MMMM Do, YYYY') );
console.log(  pastDate.from( moment() ) );
