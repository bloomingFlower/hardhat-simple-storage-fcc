const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Shold start with a favorite number of 0", async function () {
    const currnetValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    assert.equal(currnetValue.toString(), expectedValue)
    // expect(currentValue.toString().to.equal(expectedValue))
  })
  // it.only("Should update when we call store", async function () {
  it("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
})
