export const api = {
  characters:
    [
      {
        name: 'Noelle',
        ascensions: [
          {
            lvl: 20,
            set: [
              { type: 'ascensionMatherials', name: 'prithivaTopazSliver', counter: 1 },
              { type: 'localSpecialties', name: 'valberry', counter: 3 },
              { type: 'enhancementMaterials', name: 'damagedMask', counter: 3 }
            ]
          },
          {
            lvl: 40,
            set: [
              { type: 'levelUpMaterials', name: 'basaltPillar', counter: 2 },
              { type: 'ascensionMatherials', name: 'prithivaTopazFragment', counter: 3 },
              { type: 'localSpecialties', name: 'valberry', counter: 10 },
              { type: 'enhancementMaterials', name: 'damagedMask', counter: 15 }
            ]
          },
          {
            lvl: 50,
            set: [
              { type: 'levelUpMaterials', name: 'basaltPillar', counter: 4 },
              { type: 'ascensionMatherials', name: 'prithivaTopazFragment', counter: 6 },
              { type: 'localSpecialties', name: 'valberry', counter: 20 },
              { type: 'enhancementMaterials', name: 'stainedMask', counter: 12 }
            ]
          },
          {
            lvl: 60,
            set: [
              { type: 'levelUpMaterials', name: 'basaltPillar', counter: 8 },
              { type: 'ascensionMatherials', name: 'prithivaTopazChunk', counter: 3 },
              { type: 'localSpecialties', name: 'valberry', counter: 30 },
              { type: 'enhancementMaterials', name: 'stainedMask', counter: 18 }
            ]
          },
          {
            lvl: 70,
            set: [
              { type: 'levelUpMaterials', name: 'basaltPillar', counter: 12 },
              { type: 'ascensionMatherials', name: 'prithivaTopazChunk', counter: 6 },
              { type: 'localSpecialties', name: 'valberry', counter: 45 },
              { type: 'enhancementMaterials', name: 'ominousdMask', counter: 12 }
            ]
          },
          {
            lvl: 80,
            set: [
              { type: 'levelUpMaterials', name: 'basaltPillar', counter: 20 },
              { type: 'ascensionMatherials', name: 'prithivaTopazGemstone', counter: 6 },
              { type: 'localSpecialties', name: 'valberry', counter: 60 },
              { type: 'enhancementMaterials', name: 'ominousdMask', counter: 24 }
            ]
          }
        ]
      }
    ],
  ascensionMatherials: [
    { name: 'prithivaTopazSliver', displayName: 'Prithiva Topaz Sliver' },
    { name: 'prithivaTopazFragment', displayName: 'Prithiva Topaz Fragment' },
    { name: 'prithivaTopazChunk', displayName: 'Prithiva Topaz Chunk' },
    { name: 'prithivaTopazGemstone', displayName: 'Prithiva Topaz Gemstone' }
  ],
  localSpecialties: [
    { name: 'valberry', displayName: 'Valberry' }
  ],
  levelUpMaterials: [
    { name: 'basaltPillar', displayName: 'Basalt Pillar' }
  ],
  enhancementMaterials: [
    { name: 'damagedMask', displayName: 'Damaged Mask' },
    { name: 'stainedMask', displayName: 'Stained Mask' },
    { name: 'ominousdMask', displayName: 'Ominous Mask' }
  ]
}
