const chai = require("chai")
chai.use(require("chai-as-promised"))

const expect = chai.expect

const MultiSigWallet = artifacts.require("MultiSigWallet")

contract("MultiSigWallet", accounts => {
  const owners = [accounts[0], accounts[1], accounts[2]]
  const NUM_CONFIRMATIONS_REQUIRED = 2

  let wallet
  beforeEach(async () => {
    wallet = await MultiSigWallet.new(owners, NUM_CONFIRMATIONS_REQUIRED)
  })

  describe("constructor", () => {
    it("should deploy", async () => {
      const wallet = await MultiSigWallet.new(
        owners,
        NUM_CONFIRMATIONS_REQUIRED
      )

      for (let i = 0; i < owners.length; i++) {
        assert.equal(await wallet.owners(i), owners[i])
      }

      assert.equal(
        await wallet.numConfirmationsRequired(),
        NUM_CONFIRMATIONS_REQUIRED
      )
    })

    it("should reject if no owners", async () => {
      await expect(MultiSigWallet.new([], NUM_CONFIRMATIONS_REQUIRED)).to.be
        .rejected
    })

    it("should reject if num conf required > owners", async () => {
      await expect(MultiSigWallet.new(owners, owners.length + 1)).to.be.rejected
    })

    it("should reject if owners not unique", async () => {
      await expect(
        MultiSigWallet.new([owners[0], owners[0]], NUM_CONFIRMATIONS_REQUIRED)
      ).to.be.rejected
    })
  })

  describe("fallback", async () => {
    it("should receive ether", async () => {
      const { logs } = await wallet.sendTransaction({
        from: accounts[0],
        value: 1,
      })

      assert.equal(logs[0].event, "Deposit")
      assert.equal(logs[0].args.sender, accounts[0])
      assert.equal(logs[0].args.amount, 1)
      assert.equal(logs[0].args.balance, 1)
    })
  })
})
