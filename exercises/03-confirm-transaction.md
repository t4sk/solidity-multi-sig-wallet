# Confirm Transaction

### 1. Checkout the exercise

```
git checkout exercise-03
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Complete the `confirmTransaction` function

```solidity
function confirmTransaction(uint _txIndex)
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
    notConfirmed(_txIndex)
{

}
```

- [ ] Complete the modifier `txExists`
  - it should require that the transaction at `txIndex` exists
- [ ] Complete the modifier `notExecuted`
  - it should require that the transaction at `txIndex` is not yet executed
- [ ] Complete the modifier `notConfirmed`
  - it should require that the transaction at `txIndex` is not yet
    confirmed by `msg.sender`
- [ ] Confirm the transaction
  - update the `isConfirmed` to `true` for `msg.sender`
  - increment `numConfirmation` by 1
  - emit `ConfirmTransaction` event for the transaction being confirmed

```solidity
event ConfirmTransaction(address indexed owner, uint indexed txIndex);
```

### 3. Test

Test your code

```
npm test
```

### 4. Solution

```
git checkout exercise-03-solution
```
