pragma solidity ^0.5.16;

contract MultiSigWallet {
    event Deposit(address indexed sender, uint amount, uint balance);
    event SubmitTransaction(
        address indexed owner,
        uint indexed txIndex,
        address indexed to,
        uint value,
        bytes data
    );
    event ConfirmTransaction(address indexed owner, uint indexed txIndex);
    event RevokeConfirmation(address indexed owner, uint indexed txIndex);
    event ExecuteTransaction(address indexed owner, uint indexed txIndex);

    address[] public owners;
    mapping(address => bool) public isOwner;
    uint public numConfirmationsRequired;

    /*
    Exercise
    1. Validate that the _owner is not empty
    2. Validate that _numConfirmationsRequired is greater than 0
    3. Validate that _numConfirmationsRequired is less than or equal to the number of _owners
    4. Set the state variables owners from the input _owners.
        - each owner should not be the zero address
        - validate that the owners are unique using the isOwner mapping
    5. Set the state variable numConfirmationsRequired from the input.
    */
    constructor(address[] memory _owners, uint _numConfirmationsRequired) public {
    }
}
