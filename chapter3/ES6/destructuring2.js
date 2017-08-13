const regex = /(\d{4})(\d{2})(\d{2})/;

console.log(regex.exec('20151231'));
// => [ '20151231', '2015', '12', '31', index: 0, input: '20151231' ]

const [, year, month, day] = regex.exec('20151231');
console.log(year, month, day);
