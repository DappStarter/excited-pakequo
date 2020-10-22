require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth screen coin grace merry forward general'; 
let testAccounts = [
"0xbcf302a31eb8d190e1e9beb3bfab4180166dc0d1f5cd7176455dba351dd5b194",
"0x8ce653633ac602f61a2d970a97dab7d202a16540d2580e4b9351d15b1dfab2df",
"0xcefc8d06fe04222e858f2baf53a227fa6dbe8e2e01b48201a08cf2e283c5c18c",
"0xf3d675c0e08d8d1e9de7c0120ead1e604d1dfbec9e788f3f1fe5a871d5359682",
"0xfb12fa6a9008309bbd72bac434f5a77574f5131b28f32224e8c2867daadf33b5",
"0x4fda68c02afd0666a835fe5bf34b2c4b91898be9a7720962c0006295476007a8",
"0x13cbc25fe027d217425ccaf9c17c453cd7264809f38e7cb44cc3886794cba315",
"0xd993e02b3b5afb2700cbbcd71fbc2a5494d4a159539f95d2fd416b8b657b4029",
"0x95933072b56e28e1405c5ef318a40005a4740cee2d38f47403f3c3874eb81848",
"0xb02a35b90400e43e4ccb312a65b9f9a6c8f745e330ea855d9bb87db2ff978581"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
