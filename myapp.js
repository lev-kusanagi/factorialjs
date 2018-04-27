// Create iExec client
const createIEXECClient = require('iexec-server-js-client');
const iexec = createIEXECClient({ server: 'https://testxw.iex.ec:443' });

// // Authenticate before hitting iExec API:

const jwtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibG9ja2NoYWluYWRkciI6IjB4ODRlZGRjNDU1YjIyNGI1MjMzYjYzM2ZhYjc0NzMxMTE3ODQ2Y2YxOSIsImlzcyI6Inh3aGVwMTEiLCJpYXQiOjE1MjMwMjQyOTJ9.pmGrGhGGODV10fPGgw7OJAJqkgYTnbzr1v4zLqyD0Z4'

// iexec.auth(web3.currentProvider, accountAddress).then(({ jwtoken, cookie }) => {
//   console.log(jwtoken); // this is given by auth.iex.ec server
//   console.log(cookie); // this is given by iExec server
//   // hit iExec server API
//   iexec.getAppByName(deployTxHash).then(console.log); // print app description from deploy txHash
//   iexec.getWorkByExternalID(submitTxHash).then(console.log); // print work description from submit txHash
// });

// If you already have your JWT token, no need to do full auth (avoid wallet signing):
iexec.getCookieByJWT(jwtoken).then(cookie => {
  // hit iExec server API
  iexec.getByUID(workUID).then(console.log); // print work description
});


// Submit work.
// Call the dapp smart contract "iexecSubmit" method to submit a work (for reference only, not part of this repo library):
const oracleJSON = require('iexec-oracle-contract/build/contracts/IexecOracle.json');
const work = '{"cmdline":"10"}'

const oracleContract = web3.eth
  .contract(oracleJSON.abi)
  .at(oracleJSON.networks[chainID].address);
const callbackPrice = await oracleContract.callbackPrice();

const dappContract = web3.eth
  .contract(dappSubmitABI)
  .at(dappAddress);

// this is the work submit
const txHash = await dappContract.iexecSubmit(work, {
  value: callbackPrice[0].toNumber(),
});


// Wait for the result.
// After submitting a work through Ethereum, use the transaction hash (txHash) to wait for the work result:

iexec
  .waitForWorkResult(oracleContract.getWork, txHash)
  .then(workResultURI => iexec.createDownloadURI(workResultURI))
  .then(console.log); // let user open this URL in the browser to download the work result
