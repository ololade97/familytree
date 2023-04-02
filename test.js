const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Family", function () {
    const _name = "Sabit Ololade";
    const _ailment = "Hypertension";
    const _age = 32;

    it("Get owner of contract", async function () {
    const owner1 = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    const Family = await ethers.getContractFactory("Family");
    const family = await Family.deploy();
    await family.deployed();
    console.log('family deployed at:'+ family.address)
    expect(await family.getOwner()).to.equal(owner1);
  });

    it("Only owner can add to family tree", async function () {
    const owner2 = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    const Family = await ethers.getContractFactory("Family");
    const family = await Family.deploy();
    await family.deployed();
    await expect(family.familyStore(_name, _ailment, _age, {from: owner2})).to.not.be.reverted;
  });
});

//The test is written in the Remix environment. That's why there is repetition. Remix doesn't allow the use of loadFixture.
