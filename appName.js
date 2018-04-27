const createIEXECClient = require('iexec-server-js-client');
const iexec = createIEXECClient({ server: 'https://testxw.iex.ec:443' });

const jwtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibG9ja2NoYWluYWRkciI6IjB4ODRlZGRjNDU1YjIyNGI1MjMzYjYzM2ZhYjc0NzMxMTE3ODQ2Y2Y
xOSIsImlzcyI6Inh3aGVwMTEiLCJpYXQiOjE1MjMwMjQyOTJ9.pmGrGhGGODV10fPGgw7OJAJqkgYTnbzr1v4zLqyD0Z4';
const deployTxHash = '0x6e851fdd230eeac0ccc04e3fde6754557564d94f4eec0e5bc155edd3613d3e40';

iexec.getAppByName(deployTxHash).then(console.log); // print app description from deploy txHash
