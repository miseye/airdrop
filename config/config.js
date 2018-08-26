/**
 * Created by zhaoyiyu on 2018/2/3.
 */
require('web3');
require('ethereumjs-tx');
require('solc');
require('ethjs-account');
require('node-xlsx');
require('silly-datetime');
require('ws');

console.log('require librarys');

//itc 主空投账户
const userConfig_main = {
    userPrivateKey:'e69e1e09f7ff992a08bac9ba01360083a1da92efaf3f390ae26644c4e0b4c7b4',
    userAddress:'0x459cfdd4cf5f8b823bec4489594c1207d6f076a1',
    airdropContractAddress:'0x79Eded88689292144c74AAB0952c38cF94D99650'

};

//Ethereum Rinkeby 测试账户
const userConfig_rinkeby = {
    userPrivateKey:'e69e1e09f7ff992a08bac9ba01360083a1da92efaf3f390ae26644c4e0b4c7b4',
    userAddress:'0x459cfdd4cf5f8b823bec4489594c1207d6f076a1',
    airdropContractAddress:'0x91d11487b9a5e719ceec5894c38860c48cc602ba'
};

//let userConfig = userConfig_rinkeby;
 let userConfig = userConfig_main;

//主网
mainnetConfig = {
    internetType:'main',
    userModule:{
        userPrivateKey:userConfig.userPrivateKey,
    },
    tokenholderStartBlock:userConfig.startBlock,
    transaction:{
        url:'https://mainnet.infura.io',
        gasPrice:600000000,
        gasLimit:7047129
    },
    airdropModule: {
        ercAirDropAmount:'1',       //amount of normal airdrop
        airdropContractAddress:userConfig.airdropContractAddress,                             //
        tokenContractAddress:'0x5af3630746975d9cbaf236d4117b08a2c7a0bd77',                               //erc20 token contract address
    },
    approveModule:{
        amount : '5000',             //The amount of contract transferable accounts
        approveAddress : userConfig.airdropContractAddress,                             //airdrop contract address
        tokenContractAddress : '0x5af3630746975d9cbaf236d4117b08a2c7a0bd77',                       //erc20 token contract address
    },
};

//rinkeby网络
rinkebyConfig = {
    internetType:'rinkeby',
    userModule:{
        userPrivateKey:userConfig.userPrivateKey,
    },
    tokenholderStartBlock:userConfig.startBlock,
    transaction:{
        url:'https://rinkeby.infura.io/0x585a40461ff12c6734e8549a7fb527120d4b8d0d',
        gasPrice:500000000,
        gasLimit:3000000
    },
    airdropModule: {
        ercAirDropAmount:'1',       //amount of normal airdrop
        airdropContractAddress:userConfig.airdropContractAddress,                             //
        tokenContractAddress:'0x9e6072cc88c05b37f33136e33a84fed287ba6c95',                               //erc20 token contract address
    },
    approveModule:{
        amount : '5000',             //The amount of contract transferable accounts
        approveAddress : userConfig.airdropContractAddress,                             //airdrop contract address
        tokenContractAddress : '0x9e6072cc88c05b37f33136e33a84fed287ba6c95',                       //erc20 token contract address
    },
};
//module.exports = rinkebyConfig;
 module.exports = mainnetConfig;

