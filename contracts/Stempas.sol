pragma solidity ^0.4.4;

contract Stempas {

    event Deposit(
       bytes32 _signedRequest,
       address _target
   );

  function requestStempas(bytes32 signedRequest, address target) {
      Deposit(signedRequest, target);
  }
}
