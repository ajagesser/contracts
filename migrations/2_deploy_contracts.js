var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var StembiljetBeheerder = artifacts.require("./StembiljetBeheerder.sol");
var Stempas = artifacts.require("./Stempas.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(StembiljetBeheerder);
  deployer.deploy(Stempas);
};
