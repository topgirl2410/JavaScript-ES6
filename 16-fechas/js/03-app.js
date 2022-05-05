const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));

console.log(moment().format('LLLL', diaHoy)); // (Me encanta este formato) Dia de la semana, dia, mes, año y hora actuales

console.log(moment().add(3, 'days').calendar())  // finaliza dentro de 3 dias