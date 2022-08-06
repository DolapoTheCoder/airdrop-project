const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');


//new wallet made via keyapir
const wallet = new Keypair();

//extract public and private key from wallet
const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

//get balance

const getWalletBalance = async() => {
    try {
        
    } catch (error) {
        
    }
}