export type WordData = {
  word: string;
  validAnagrams: string[];
};

export const wordsData: WordData[] = [
  // 3 LETTRES
  { word: "ARC", validAnagrams: ["CAR"] },
  { word: "ART", validAnagrams: ["RAT"] },
  { word: "RUE", validAnagrams: ["EUR"] },
  { word: "BAC", validAnagrams: ["CAB"] },
  { word: "MER", validAnagrams: ["REM"] },

  // 4 LETTRES
  { word: "RAME", validAnagrams: ["MARE", "ARME", "AMER"] },
  { word: "RATE", validAnagrams: ["TARE"] },
  { word: "GARE", validAnagrams: ["RAGE"] },
  { word: "NIER", validAnagrams: ["REIN"] },
  { word: "RITE", validAnagrams: ["TIRE"] },
  { word: "MITE", validAnagrams: ["TIME"] },
  { word: "ARTS", validAnagrams: ["RATS", "STAR"] },
  { word: "LOTS", validAnagrams: ["SLOT"] },
  { word: "ROBE", validAnagrams: ["BORE"] },
  { word: "AVIS", validAnagrams: ["VISA"] },

  // 5 LETTRES
  { word: "CHIEN", validAnagrams: ["CHINE", "NICHE"] },
  { word: "POIRE", validAnagrams: ["PROIE"] },
  { word: "RESTE", validAnagrams: ["ESTER"] },
  { word: "VENIR", validAnagrams: ["VERNI"] },
  { word: "LOUER", validAnagrams: ["ROULE"] },
  { word: "TORSE", validAnagrams: ["STORE", "SORTE"] },
  { word: "CRISE", validAnagrams: ["SCIER"] },
  { word: "PROSE", validAnagrams: ["REPOS", "SPORE"] },
  { word: "CARTE", validAnagrams: ["TRACE"] },
  { word: "TENIR", validAnagrams: ["TRINE", "INTER"] },
  { word: "RIMES", validAnagrams: ["MIRES", "MISER"] },
  { word: "TAPIS", validAnagrams: ["PATIS"] },
  { word: "PARLE", validAnagrams: ["PERLA"] },
  { word: "AMOUR", validAnagrams: ["RAMOU", "MOURA"] },

  // 6 LETTRES
  { word: "MARINE", validAnagrams: ["RANIME", "ANIMER"] },
  { word: "SAUTER", validAnagrams: ["AUTRES"] },
  { word: "PANIER", validAnagrams: ["RAPINE"] },
  { word: "TRANSE", validAnagrams: ["ENTRAS"] },
  { word: "PARTIE", validAnagrams: ["PATRIE"] },
  { word: "MASTER", validAnagrams: ["STREAM"] },
  { word: "PORTER", validAnagrams: ["REPORT"] },
  { word: "POULIE", validAnagrams: ["OUPLIE"] },

  // 7 LETTRES
  { word: "LUCIOLE", validAnagrams: ["COUILLE"] },
  // 8  LETTRES
  { word: "ALSACIEN", validAnagrams: ["CANALISE"] },
  // 9 LETTRES
  { word: "CLIENTÈLE", validAnagrams: ["ÉTINCELLE"] },
];

export function getRandomWords(): WordData {
  const randomIndex = Math.floor(Math.random() * wordsData.length);
  return wordsData[randomIndex];
}
