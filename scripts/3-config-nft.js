import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop('0x35ea66999f1c806387032002e69c76C6fe3C5400');

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Hogwarts Invitation Letter",
        description: "An invitation to Hogwarts DAO!",
        image: readFileSync("scripts/assets/hogwarts_letter.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
