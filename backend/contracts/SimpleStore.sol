//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStore {

    event ValueChanged(address indexed author, string oldValue, string newValue);

    string _value = "First!!1";

    function setValue(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }

    function value() public view returns(string memory) {
        return _value;
    }

}