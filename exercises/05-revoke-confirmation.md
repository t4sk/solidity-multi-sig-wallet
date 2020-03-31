# Confirm Transaction

### 1. Checkout the exercise

```
git checkout exercise-05
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Complete the `revokeConfirmation` function

```solidity
function revokeConfirmation(uint _txIndex)
    public
{

}
```

- [ ] Add appropriate modifiers
  - only owner should be able to call this function
  - transaction at `_txIndex` must exist
  - transaction at `_txIndex` must be executed
- [ ] Revoke the confirmation
  - require that `msg.sender` has confirmed the transaction
  - set `isConfirmed` to `false` for `msg.sender`
  - decrement `numConfirmations` by 1
  - emit `RevokeConfirmation`

```solidity
event RevokeConfirmation(address indexed owner, uint indexed txIndex);
```

### 3. Test

Test your code

```
npm test
```

### 4. Solution

```
git checkout exercise-05-solution
```
