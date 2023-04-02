//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//Create a family tree
//containing names, ailment and age of your family members

contract Family {

    address owner1 = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4; //These are public addresses - not safe

    struct Familytree {
        string name;
        string ailment;
        uint age;
        uint number;
    }

    Familytree [] public familytree;

    constructor() {
       owner1 = msg.sender; 
    }

    function getOwner() public view returns(address) {
        return owner1;
    }

    function familyStore(string memory _name, string memory _ailment, uint _age) public {
        require(msg.sender == owner1);
        familytree.push(Familytree(_name, _ailment,  _age, familytree.length));
    }
}

// You don't need the below since the Familytree is public above
/*
    function seeMember(uint _number) public view returns(string memory name, string memory ailment, uint age) {
           return(familytree[_number].name, familytree[_number].ailment, familytree[_number].age);
    }
*/

