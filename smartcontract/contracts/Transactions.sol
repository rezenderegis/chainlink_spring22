//SPDX-License-Identifier: <SPDX-License>
//Default licence
pragma solidity ˆ0.8.13;

contract Transactions {

    //Store transaction numbers. This case default integer
    uint256 transactionsCount;

    //Origin addres
    event Transfer(addres from, addres receiver, uint amount, string message, uint256 timestamp, string keyword);

    //The object
    struct TransferStruct {

        address sender;
        addres receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;

    }

    //Create array of TransferStructure
    TransferStruct[] transactions; 

    /**
    Will add to blockchain
    address will receive
    string memory message: doen't go to blockchain
     */
    function addToClockChain(address payable receiver, uint amount, string memory message, string memory keyword) public  {
        transactionsCount += 1;

        /*msg.sender is a global variable to identify who ask the contract.
        Adding data on transaction pool
        */
        transaction.push(TransferStructure(msg.sender, receiver, amount, message, block.timestamp, keyword));

        //Send transaction
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }   

    function getAllTransactions() public view returns (TransferStruct[] memory) {

        return transactions;

    }

    public function getTransactionCount() public view returns (uint256) {

        return transactionsCount;

    }



}
