require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember social install creek fringe team'; 
let testAccounts = [
"0x20d4a823fce3ea884c33e3e0bd31e12799a37c9737087bb61c8923bfe4b158b5",
"0x1584b6a1fc5a76943afb46bd8c4f4d6d9bcc01b3de6ac8d14aef80e9b92307ec",
"0x76ed89a50710d982016c2797af8ba02c7e22053203c48d1b2806210d39728de7",
"0xed0f7f00e7b954dbc823ad8f9d10e195736a3b17f71ae5bef836f10b1ac68f4b",
"0xcca5cbc94cf36332547525b915719114605c260401b85fc71b72558397d95994",
"0xa1e3ba87636e8e7cb3beec07ac77defa7d8c2257110392fe0e0a52b69c602230",
"0x38c53a75777f8eb9ff28fff6bf52f7c205341d1b9fc7146aebca51c9ac026c88",
"0x5840e7c20dd1ce1b20e1c5ca10dff26124323fc4cb6c07f17c32eb333f788d8e",
"0x36175c67b58ea86464fc8567f123cc27826cc6d65e5a1d859934647868868c2e",
"0xde2d9dfbdbb7059976af54724b2e44d77756c2b1d6b5231d3efb88066982ad29"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


