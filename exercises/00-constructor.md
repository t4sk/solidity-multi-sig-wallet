# Constructor

### 1. Checkout the exercise

```
git checkout exercise-00
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Complete the `constructor`

```solidity
constructor(address[] memory _owners, uint _numConfirmationsRequired) public {

}
```

- [ ] Validate `_owner` is not empty

- [ ] Validate `_numConfirmationsRequired` is greater than 0

- [ ] Validate `_numConfirmationsRequired` is less than or equal to the number of `_owners`

- [ ] Set the state variables `owners` from the input `_owners`.

  - Each owner should not be the zero address
  - Validate `owners` are unique using the `isOwner` mapping

- [ ] Set the state variable numConfirmationsRequired from the input.

### 3. Test

Test your code

```
npm test
```

### 4. Solution

```
git checkout exercise-00-solution
```
