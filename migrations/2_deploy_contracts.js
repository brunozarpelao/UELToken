var UELToken = artifacts.require("UELToken");

module.exports = function(deployer) {
  // Deploy the UELToken contract as our only task
  deployer.deploy(UELToken);
};