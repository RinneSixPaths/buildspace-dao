import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x71D480d99Da1C56E9E89Eb18348Bb77c954bEA26");
// const vote = sdk.getVote("0x7D386dB2442036D6380221c4d03E804C22f44091");

(async () => {
  try {
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.setAll({ admin: [], minter: [] });
    // await token.roles.grant("minter", vote.getAddress());
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();
