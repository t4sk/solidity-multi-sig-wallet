# Fallback

### 1. Checkout the exercise

```
git checkout exercise-01
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Declare a `payable` fallback function

- [ ] it should emit the `Deposit` event (see below) with

  - `msg.sender`
  - `msg.value`
  - current amount of ether in the contract (`address(this).balance`)

```solidity
event Deposit(address indexed sender, uint amount, uint balance);
```

### 3. Test

Test your code

```
npm test
```

### 4. Solution

```
git checkout exercise-01-solution
```
