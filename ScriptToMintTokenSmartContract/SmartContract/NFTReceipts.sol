// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Ownable {
    // 1) private '_owner' variable of type address with a public getter function
    // 2) internal constructor that sets the _owner var to the creator of the contract 
    // 3) 'onlyOwner' modifier that throws if called by any account other than the owner.
    // 4) transferOwnership function
    // 5) event that emits anytime ownerShip is transfered (including in the constructor)

    address private _owner;

    constructor ()  {
        _owner = msg.sender;
        emit OwnershipTransferred(_owner);
    }

    //events
    event OwnershipTransferred(address newOwner);

    //modifiers
    modifier onlyOwner {
        require(_owner == msg.sender, "Only the owner can perform this action");
        _;
    }

    function getOwner() public view returns (address) {
        return _owner;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        // functionality to transfer control of the contract to a newOwner.
        // make sure the new owner is a real address
        require(newOwner == address(newOwner), "Address is not valid");
        _owner = newOwner;
        emit OwnershipTransferred(newOwner);
    }
}

// Pausable contract that inherits from the Ownable contract
// 1) private '_paused' variable of type bool
// 2) public setter using the inherited onlyOwner modifier 
// 3) internal constructor that sets the _paused variable to false
// 4) 'whenNotPaused' & 'paused' modifier that throws in the appropriate situation
// 5) Paused & Unpaused event that emits the address that triggered the event

contract Pausable is Ownable {
    bool private _paused;

    constructor ()  {
        _paused = false;
    }

    //modifiers
    modifier whenNotPaused {
        require(!_paused, "Contract is paused");
        _;
    }

    modifier paused {
        require(_paused, "Contract is not paused");
        _;
    }

    function setPaused() public onlyOwner whenNotPaused {
        _paused = true;
        emit Paused(msg.sender);
    }

    function setUnpaused() public onlyOwner paused {
        _paused = false;
        emit Unpaused(msg.sender);
    }

    //events
    event Paused(address _address);
    event Unpaused(address _address);
}

//Contract deployed on goerli
//https://goerli.etherscan.io/tx/0x6f55ee7e2551b32aaf2d89ef258627fc8602df6f99b252a215673cd4303f9add
contract Receipts is ERC721URIStorage, Pausable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("BLOCK-RCPT", "BR") {
        //_setBaseURI("https://gateway.pinata.cloud/ipfs/");
    }

    function mintToken(address owner, string memory metadataURI)
    public
    onlyOwner
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _safeMint(owner, id);
        _setTokenURI(id, metadataURI);

        return id;
    }
}