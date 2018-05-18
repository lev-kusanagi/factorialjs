Error.stackTraceLimit = Infinity;


const createIEXECClient = require('iexec-server-js-client');
const iexec = createIEXECClient({ server: 'https://testxw.iex.ec:443' });
const Web3 = require('web3');

const deployTxHash = '0x6e851fdd230eeac0ccc04e3fde6754557564d94f4eec0e5bc155edd3613d3e40';
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/ABw2aOBsYPZToLrVYDxs"));

const jwtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibG9ja2NoYWluYWRkciI6IjB4ODRlZGRjNDU1YjIyNGI1MjMzYjYzM2ZhYjc0NzMxMTE3ODQ2Y2YxOSIsImlzcyI6Inh3aGVwMTEiLCJpYXQiOjE1MjMwMjQyOTJ9.pmGrGhGGODV10fPGgw7OJAJqkgYTnbzr1v4zLqyD0Z4';
const cookie = 'be6823a77190f1a9438f90bb0eade9ff779cb55d7bc8ad84ea6efe9bdcd43c18';

console.trace(iexec.getAppByName(deployTxHash).then(console.log));
