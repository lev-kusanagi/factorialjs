const createIEXECClient = require('iexec-server-js-client');
const iexec = createIEXECClient({ server: 'https://testxw.iex.ec:443' });

const jwtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibG9ja2NoYWluYWRkciI6IjB4ODRlZGRjNDU1YjIyNGI1MjMzYjYzM2ZhYjc0NzMxMTE3ODQ2Y2YxOSIsImlzcyI6Inh3aGVwMTEiLCJpYXQiOjE1MjMwMjQyOTJ9.pmGrGhGGODV10fPGgw7OJAJqkgYTnbzr1v4zLqyD0Z4';
const deployTxHash = '0x6e851fdd230eeac0ccc04e3fde6754557564d94f4eec0e5bc155edd3613d3e40';

// If you already have your JWT token, no need to do full auth (avoid wallet signing):
iexec.getCookieByJWT(jwtoken).then(cookie => {
  // hit iExec server API
    iexec.getAppByName(deployTxHash).then(console.log); // print app description from deploy txHash
    // iexec.getByUID(workUID).then(console.log); // print work description
});
