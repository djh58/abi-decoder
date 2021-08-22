const abiDecoder = require("./index.js");
const abi = require("./abi.js");
const logs = require("./logs.js");
var fs = require('fs');
const Web3 = require('web3');

const ABI = abi.ABI();
const LOGS = logs.LOGS();
const INFURA = 'https://mainnet.infura.io/v3/017a6325bb7d4f8ab30bb681362cc322';
const CONTRACT_ADDR = '0x6dd655f10d4b9E242aE186D9050B68F725c76d76';
const CALLER_ADDR = '0x34eB5140Ba1B60689f26B7e8b83AADdD13f29f18'; //empty test wallet (it's a read only function so no gas needed)

try {
  const web3 = new Web3(new Web3.providers.HttpProvider(INFURA));
  const stakingContract = new web3.eth.Contract(ABI, CONTRACT_ADDR);
  abiDecoder.addABI(ABI);
  const dec = abiDecoder.decodeLogs(LOGS);
  fs.truncate('./stakers.txt', 0, function(){console.log('done')})
  for (var i = 0; i < dec.length; i++) {
    const addr = dec[i].events[0].value;
    stakingContract.methods.userStake(addr).call({from: CALLER_ADDR}).then(
        function(result) {
            new_data = "Address: " + addr.toString() + " Staked: " + result.toString() + '\n';
            fs.appendFile('stakers.txt', new_data , (err) => {
                if(err) 
                    throw err;
            });
        }
    ); 
  }
} catch (error) {
  console.log(error);
}

