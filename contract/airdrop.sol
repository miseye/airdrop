pragma solidity ^0.4.7;

contract ERC20Interface {
  function transferFrom(address _from, address _to, uint _value) public returns (bool){}
  function transfer(address _to, uint256 _value){}
}
contract Ownable {
  address public owner;

  function Ownable() public {
    owner = msg.sender;
  }

  modifier onlyOwner()  {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {

    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }
}


contract TokenAirDrop is Ownable {

  function airDrop ( address contractObj,
                    address[] airDropDesinationAddress,
                    uint[] amounts) public onlyOwner{

    for( uint i = 0 ; i < airDropDesinationAddress.length ; i++ ) {

        ERC20Interface(contractObj).transfer(airDropDesinationAddress[i],amounts[i]);
    }
   }
}