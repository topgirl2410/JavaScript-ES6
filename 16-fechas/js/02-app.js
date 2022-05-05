'use strict';

/*********************************************************** Moment JS *****************************************/

const diaHoy = new Date();

moment.locale('es'); // Queremos la fecha en español 

/*********************************************************** Format Dates *********************************************** */

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))  // Fecha completa (dia, mes, año, hora, minuto y segundos)

console.log(moment().format('dddd'));  // Dia en el que estamos

console.log(moment().format("MMM Do YY")); // Mes, dia y año

console.log(moment().format()); // Fecha completa 

/************************************************************* Relative Time ************************************************* */

moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // a day ago
moment().endOf('day').fromNow();          // in 2 hours
moment().startOf('hour').fromNow();       // 2 minutes ago


/**************************************************************** Calendar Time ****************************************************/

moment().subtract(10, 'days').calendar(); // 04/24/2022
moment().subtract(6, 'days').calendar();  // Last Thursday at 10:03 PM
moment().subtract(3, 'days').calendar();  // Last Sunday at 10:03 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 10:03 PM
moment().calendar();                      // Today at 10:03 PM
moment().add(1, 'days').calendar();       // Tomorrow at 10:03 PM
moment().add(3, 'days').calendar();       // Saturday at 10:03 PM
moment().add(10, 'days').calendar();     

/*********************************************************** Multiple Locale Support ************************************************** */

moment.locale();         // en
moment().format('LT');   // 10:04 PM
moment().format('LTS');  // 10:04:09 PM
moment().format('L');    // 05/04/2022
moment().format('l');    // 5/4/2022
moment().format('LL');   // May 4, 2022
moment().format('ll');   // May 4, 2022
moment().format('LLL');  // May 4, 2022 10:04 PM
moment().format('lll');  // May 4, 2022 10:04 PM
moment().format('LLLL'); // Wednesday, May 4, 2022 10:04 PM
moment().format('llll');