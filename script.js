const skins = {
  Common: ["common1.png", "common2.png"],
  Rare: ["rare1.png", "rare2.png"],
  Epic: ["epic1.png"],
  Legendary: ["legendary1.png"]
};

const rarities = [
  { type: "Common", chance: 60 },
  { type: "Rare", chance: 25 },
  { type: "Epic", chance: 10 },
  { type: "Legendary", chance: 5 }
];

function getRandomRarity() {
  let rand = Math.random() * 100;
  let total = 0;
  for (let rarity of rarities) {
    total += rarity.chance;
    if (rand <= total) return rarity.type;
  }
}

document.getElementById("unlockBtn").addEventListener("click", () => {
  const rarity = getRandomRarity();
  const skinList = skins[rarity];
  const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
  
  document.getElementById("result").innerHTML = `
    <h2>${rarity} Skin Unlocked!</h2>
    <img src="assets/skins/${rarity.toLowerCase()}/${randomSkin}" width="200">
  `;
});
