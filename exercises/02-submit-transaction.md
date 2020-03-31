# Submit Transaction

### 1. Checkout the exercise

```
git checkout exercise-02
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Complete the `submitTransaction` function

```solidity
function submitTransaction(address _to, uint _value, bytes memory _data)
    public
    onlyOwner
{

}
```

- [ ] Complete the `onlyOwner` modifier defined above.
  - This modifier should require that `msg.sender` is an owner
- [ ] Inside `submitTransaction`, create a new `Transaction` struct from the inputs and append it to the `transactions` array
  - `executed` should be initialized to `false`
  - `numConfirmations` should be initialized to 0
- [ ] Emit the `SubmitTransaction` event (see below)
  - `txIndex` should be the index of the newly created transaction

```solidity
event SubmitTransaction(
    address indexed owner,
    uint indexed txIndex,
    address indexed to,
    uint value,
    bytes data
);
```

### 3. Test

Test your code

```
npm test
```

### 4. Solution

```
git checkout exercise-02-solution
```
