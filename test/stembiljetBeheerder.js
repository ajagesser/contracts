var StembiljetBeheerder = artifacts.require("./StembiljetBeheerder.sol");

var voteTokenGlobal = "0xbbdef80000000000000000000000000000000000000000000000000000000000";

contract('StembiljetBeheerder', function(accounts) {

  it("should be able to insert votes", function() {
      return StembiljetBeheerder.deployed().then(function(instance) { 
           instance.registerVoteToken(voteTokenGlobal, "0xbbded0000000000000000000000000000000000000000000000000000000000");
           return instance.getVoteTokens();
        }).then(function(voteToken) {
            assert.equal(voteToken[0], 0xbbded00000000000000000000000000000000000000000000000000000000000, "Token was registered");
        })
  });
});


