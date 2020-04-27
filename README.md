# Solidity Multi-Sig Wallet

Learn how to write a multi-sig wallet in Solidty

### Getting Started

Start by cloning the repo

```
git clone git@github.com:t4sk/solidity-multi-sig-wallet.git
```

Then install `npm` dependencies

```
cd solidity-multi-sig-wallet
npm install
```

You are now ready to do the exercises below

### Exercises

- [0 - Constructor](exercises/00-constructor.md)
- [1 - Fallback](exercises/01-fallback.md)
- [2 - Submit Transaction](exercises/02-submit-transaction.md)
- [3 - Confirm Transaction](exercises/03-confirm-transaction.md)
- [4 - Execute Transaction](exercises/04-execute-transaction.md)
- [5 - Revoke Confirmation](exercises/05-revoke-confirmation.md)

### Mnemonic

```
derive woman glance cruise bicycle music apology scorpion boy broom bamboo clay
```

### Accounts

```
0xf36467c4e023c355026066b8dc51456e7b791d99
0x6b1a5bb56b9956e2db2b5584846c5641331134d0
0x6dd58e6bccc8ba9269783d470e3dda3a6e8d8c7f
```

### Private Keys

```
03f7c8a78d147592992a7b835d3e0cc29e992e6924af7a1fcced5b0d25317c86
4902221c58878e6e8bccf35d68371b28f06d1fc7bb4e49baf919bf696460f92d
af7592d51c7cde468ec5d45ec3ccda0401d150131876c8db3ca36324c009d837
```

# ropsten faucet

https://faucet.metamask.io/

# deploy to ropsten

Setup Infura

```shell
npm i --save-dev @truffle/hdwallet-provider
```

configure `truffle-config.js`

Copy paste truffle seed to `.seed`
`.gitignore` `.seed`

```shell
truffle migrate --network ropsten
```
