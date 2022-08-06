const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');

//LAMPORT_PER_SOL = A CONVERSION

//new wallet made via keyapir
const wallet = new Keypair();

//extract public and private key from wallet
const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

//get balance

const getWalletBalance = async() => {
    try {
        //new connection with dev net
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance = await connection.getBalance(publicKey);
        console.log('Wallet balance is: ', walletBalance);
    } catch (error) {
        console.log(error);
    }
};

const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);
        await connection.confirmTransaction(fromAirDropSignature);

    } catch (error) {
        console.log(error);
    }
}

const main = async() => {
    await getWalletBalance();
};

main();