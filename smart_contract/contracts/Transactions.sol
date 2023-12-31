// spdx-license-identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Tranfer(address from,address receiver,uint256 amount,string message,uint256 timestamp,string keyword);

    struct TransferStruct {
        address from;address receiver;uint256 amount;string message;uint256 timestamp; string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver,uint256 amount,string memory message,string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword  ));
        emit Tranfer(msg.sender,receiver,amount,message,block.timestamp,keyword);
    }

    function getAllTransactions()public view returns (TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
