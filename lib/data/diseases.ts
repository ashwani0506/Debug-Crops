

export const diseases = [
  // Fungal Diseases
  {
    id: 1,
    common_name: "Late Blight",
    scientific_name: "Phytophthora infestans",
    category: "fungal",
    description: "A devastating disease that affects potatoes and tomatoes. It caused the Irish Potato Famine and remains a serious threat to food security.",
    symptoms: [
      "Dark brown spots on leaves",
      "White fuzzy growth underneath leaves",
      "Rotting tubers",
      "Rapid plant collapse"
    ],
    treatment: [
      "Remove and destroy infected plants",
      "Apply copper-based fungicides",
      "Improve air circulation",
      "Plant resistant varieties"
    ],
    images: [
      "https://extension.umn.edu/sites/extension.umn.edu/files/late-blight-tomato-leaf.jpg",
      "https://extension.umn.edu/sites/extension.umn.edu/files/late-blight-potato.jpg"
    ]
  },
  {
    id: 2,
    common_name: "Black Spot",
    scientific_name: "Diplocarpon rosae",
    category: "fungal",
    description: "A common fungal disease affecting roses worldwide, causing significant damage to plant appearance and health.",
    symptoms: [
      "Black spots with fringed margins on leaves",
      "Yellowing leaves",
      "Premature defoliation",
      "Reduced flowering"
    ],
    treatment: [
      "Remove infected leaves",
      "Improve air circulation",
      "Apply fungicide preventatively",
      "Water at base of plant"
    ],
    images: [
      "https://www.missouribotanicalgarden.org/images/E0040/blackspot_rose1.jpg",
      "https://www.missouribotanicalgarden.org/images/E0040/blackspot_rose2.jpg"
    ]
  },
  // Bacterial Diseases
  {
    id: 3,
    common_name: "Bacterial Leaf Spot",
    scientific_name: "Xanthomonas campestris",
    category: "bacterial",
    description: "A widespread bacterial disease affecting various plants, particularly vegetables and ornamentals.",
    symptoms: [
      "Dark, water-soaked spots on leaves",
      "Yellow halos around spots",
      "Spots turning brown or black",
      "Leaf drop"
    ],
    treatment: [
      "Remove infected plant parts",
      "Avoid overhead watering",
      "Apply copper-based bactericides",
      "Practice crop rotation"
    ],
    images: [
      "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-leaf-spot-pepper.jpg",
      "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-spot-tomato.jpg"
    ]
  },
  {
    id: 4,
    common_name: "Crown Gall",
    scientific_name: "Agrobacterium tumefaciens",
    category: "bacterial",
    description: "A bacterial disease causing tumorous growths on roots and stems of many woody and herbaceous plants.",
    symptoms: [
      "Round galls on roots or crown",
      "Stunted growth",
      "Reduced vigor",
      "Wilting in severe cases"
    ],
    treatment: [
      "Remove infected plants",
      "Sterilize tools",
      "Avoid wounding plants",
      "Use resistant rootstocks"
    ],
    images: [
      "https://www.missouribotanicalgarden.org/images/E0040/crown_gall1.jpg",
      "https://www.missouribotanicalgarden.org/images/E0040/crown_gall2.jpg"
    ]
  },
  // Viral Diseases
  {
    id: 5,
    common_name: "Mosaic Virus",
    scientific_name: "Tobacco Mosaic Virus",
    category: "viral",
    description: "A highly infectious viral disease affecting many plants, especially tobacco, tomatoes, and peppers.",
    symptoms: [
      "Mottled light and dark green patterns",
      "Stunted growth",
      "Leaf curling",
      "Reduced yield"
    ],
    treatment: [
      "Remove and destroy infected plants",
      "Control insect vectors",
      "Use resistant varieties",
      "Practice good sanitation"
    ],
    images: [
      "https://extension.umn.edu/sites/extension.umn.edu/files/mosaic-virus-tomato.jpg",
      "https://extension.umn.edu/sites/extension.umn.edu/files/mosaic-virus-pepper.jpg"
    ]
  },
  {
    id: 6,
    common_name: "Cucumber Mosaic",
    scientific_name: "Cucumber Mosaic Virus",
    category: "viral",
    description: "A widespread viral disease affecting cucumbers and many other plants, transmitted by aphids.",
    symptoms: [
      "Mosaic pattern on leaves",
      "Distorted growth",
      "Stunted plants",
      "Malformed fruits"
    ],
    treatment: [
      "Remove infected plants",
      "Control aphid populations",
      "Use reflective mulches",
      "Plant resistant varieties"
    ],
    images: [
      "https://extension.umn.edu/sites/extension.umn.edu/files/cucumber-mosaic-virus1.jpg",
      "https://extension.umn.edu/sites/extension.umn.edu/files/cucumber-mosaic-virus2.jpg"
    ]
  }
  // Additional Fungal Diseases
  ,{
    id: 7,
    common_name: "Anthracnose",
    scientific_name: "Colletotrichum species",
    category: "fungal",
    description: "A group of fungal diseases affecting many plants, causing dark, sunken lesions on leaves, stems, flowers, and fruits.",
    symptoms: [
      "Dark, sunken lesions",
      "Leaf spots with yellow halos",
      "Stem cankers",
      "Fruit rot"
    ],
    treatment: [
      "Remove infected plant parts",
      "Improve air circulation",
      "Apply fungicides",
      "Practice crop rotation"
    ],
    images: [
      "https://www.extension.purdue.edu/extmedia/BP/BP-179-W.jpg"
    ]
  },
  {
    id: 8,
    common_name: "Fusarium Wilt",
    scientific_name: "Fusarium oxysporum",
    category: "fungal",
    description: "A soil-borne fungal disease that causes wilting and yellowing of plants, particularly affecting tomatoes and other vegetables.",
    symptoms: [
      "Yellowing of lower leaves",
      "Wilting despite adequate water",
      "Brown vascular tissue",
      "Plant death"
    ],
    treatment: [
      "Plant resistant varieties",
      "Improve soil drainage",
      "Practice crop rotation",
      "Solarize soil"
    ],
    images: [
      "https://extension.umn.edu/sites/extension.umn.edu/files/fusarium-wilt-tomato.jpg"
    ]
  },
    {
      id: 9,
      common_name: "Bacterial Canker",
      scientific_name: "Clavibacter michiganensis",
      category: "bacterial",
      description: "A serious bacterial disease affecting tomatoes and other solanaceous crops, causing wilting and stem lesions.",
      symptoms: [
        "Dark stem lesions",
        "Leaf margin necrosis",
        "Bird's eye spots on fruit",
        "Wilting and plant death"
      ],
      treatment: [
        "Use disease-free seeds",
        "Practice crop rotation",
        "Remove infected plants",
        "Sanitize tools and equipment"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-canker-tomato.jpg"
      ]
    },
    {
      id: 10,
      common_name: "Bacterial Blight",
      scientific_name: "Xanthomonas oryzae",
      category: "bacterial",
      description: "A devastating bacterial disease of rice and other grains, causing leaf blight and significant yield losses.",
      symptoms: [
        "Water-soaked leaf lesions",
        "Yellow to white streaks",
        "Wilting of leaves",
        "Reduced grain quality"
      ],
      treatment: [
        "Use resistant varieties",
        "Apply copper-based bactericides",
        "Proper field drainage",
        "Balanced fertilization"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-blight-rice.jpg"
      ]
    }
    // Additional Viral Diseases
    ,{
      id: 11,
      common_name: "Tomato Spotted Wilt",
      scientific_name: "Tomato Spotted Wilt Virus",
      category: "viral",
      description: "A destructive viral disease affecting many crops, particularly tomatoes and ornamentals.",
      symptoms: [
        "Bronze or black rings on leaves",
        "Stunted growth",
        "Necrotic spots",
        "Fruit deformation"
      ],
      treatment: [
        "Control thrips vectors",
        "Remove infected plants",
        "Use resistant varieties",
        "Maintain weed control"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/tomato-spotted-wilt.jpg"
      ]
    },
    {
      id: 12,
      common_name: "Bean Common Mosaic",
      scientific_name: "Bean Common Mosaic Virus",
      category: "viral",
      description: "A widespread viral disease of beans, causing mosaic patterns and reduced yields.",
      symptoms: [
        "Mosaic leaf patterns",
        "Leaf puckering",
        "Stunted growth",
        "Reduced pod set"
      ],
      treatment: [
        "Use certified disease-free seeds",
        "Control aphid vectors",
        "Plant resistant varieties",
        "Remove infected plants"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bean-common-mosaic.jpg"
      ]
    },
    {
      id: 13,
      common_name: "Root Rot",
      scientific_name: "Pythium species",
      category: "fungal",
      description: "A common soil-borne fungal disease affecting plant roots, leading to decay and plant death.",
      symptoms: [
        "Wilting despite moist soil",
        "Yellowing leaves",
        "Brown, mushy roots",
        "Stunted growth"
      ],
      treatment: [
        "Improve soil drainage",
        "Reduce watering frequency",
        "Use fungicides preventatively",
        "Plant in raised beds"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/pythium-root-rot.jpg"
      ]
    },
    {
      id: 14,
      common_name: "Downy Mildew",
      scientific_name: "Peronospora species",
      category: "fungal",
      description: "A fungal-like disease affecting many plants, particularly cucumbers, grapes, and lettuce.",
      symptoms: [
        "Yellow leaf spots",
        "Gray-purple fuzzy growth",
        "Leaf curling",
        "Plant collapse"
      ],
      treatment: [
        "Improve air circulation",
        "Water early in day",
        "Apply fungicides",
        "Remove infected plants"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/downy-mildew-cucumber.jpg"
      ]
    },
    {
      id: 15,
      common_name: "Bacterial Wilt",
      scientific_name: "Erwinia tracheiphila",
      category: "bacterial",
      description: "A serious disease of cucurbits spread by cucumber beetles, causing rapid wilting.",
      symptoms: [
        "Rapid leaf wilting",
        "Vine collapse",
        "Bacterial ooze in stems",
        "Complete plant death"
      ],
      treatment: [
        "Control cucumber beetles",
        "Remove infected plants",
        "Use row covers",
        "Plant resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-wilt-cucumber.jpg"
      ]
    },
    {
      id: 16,
      common_name: "Citrus Greening",
      scientific_name: "Candidatus Liberibacter asiaticus",
      category: "bacterial",
      description: "A devastating bacterial disease of citrus trees spread by psyllids.",
      symptoms: [
        "Yellow mottled leaves",
        "Misshapen fruit",
        "Premature fruit drop",
        "Tree decline"
      ],
      treatment: [
        "Control psyllid vectors",
        "Remove infected trees",
        "Use disease-free nursery stock",
        "Regular monitoring"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/citrus-greening.jpg"
      ]
    },
    {
      id: 17,
      common_name: "Potato Virus Y",
      scientific_name: "Potato Virus Y",
      category: "viral",
      description: "A significant viral disease affecting potatoes and other solanaceous crops.",
      symptoms: [
        "Leaf mosaic patterns",
        "Leaf drop",
        "Stunted growth",
        "Tuber necrosis"
      ],
      treatment: [
        "Use certified seed potatoes",
        "Control aphid vectors",
        "Remove volunteer plants",
        "Practice crop rotation"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/potato-virus-y.jpg"
      ]
    },
    {
      id: 18,
      common_name: "Squash Mosaic",
      scientific_name: "Squash Mosaic Virus",
      category: "viral",
      description: "A seed-borne viral disease affecting squash, melons, and other cucurbits.",
      symptoms: [
        "Leaf mottling",
        "Fruit deformation",
        "Vein banding",
        "Reduced yield"
      ],
      treatment: [
        "Use disease-free seeds",
        "Control beetle vectors",
        "Remove infected plants",
        "Practice good sanitation"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/squash-mosaic-virus.jpg"
      ]
    },
    {
      id: 19,
      common_name: "Apple Scab",
      scientific_name: "Venturia inaequalis",
      category: "fungal",
      description: "A serious fungal disease of apple trees that affects both leaves and fruit, causing significant economic losses.",
      symptoms: [
        "Olive-green spots on leaves",
        "Dark, scabby lesions on fruit",
        "Deformed fruit",
        "Premature leaf drop"
      ],
      treatment: [
        "Apply fungicides early spring",
        "Remove fallen leaves",
        "Prune for good air circulation",
        "Plant resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab.jpg"
      ]
    },
    {
      id: 20,
      common_name: "Clubroot",
      scientific_name: "Plasmodiophora brassicae",
      category: "fungal",
      description: "A soil-borne disease affecting cabbage family crops, causing root deformation and stunted growth.",
      symptoms: [
        "Swollen, distorted roots",
        "Yellowing leaves",
        "Wilting in hot weather",
        "Stunted growth"
      ],
      treatment: [
        "Adjust soil pH to 7.2",
        "Practice long crop rotation",
        "Improve drainage",
        "Use resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/clubroot.jpg"
      ]
    },
    {
      id: 21,
      common_name: "Bacterial Ring Rot",
      scientific_name: "Clavibacter michiganensis subsp. sepedonicus",
      category: "bacterial",
      description: "A devastating bacterial disease of potatoes that can cause significant storage losses.",
      symptoms: [
        "Yellow to brown ring in tuber",
        "Stem wilt and decay",
        "Cracking of tubers",
        "Plant collapse"
      ],
      treatment: [
        "Use certified seed potatoes",
        "Clean and disinfect equipment",
        "Practice crop rotation",
        "Remove infected plants"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-ring-rot.jpg"
      ]
    },
    {
      id: 22,
      common_name: "Grapevine Leafroll",
      scientific_name: "Grapevine Leafroll-associated Virus",
      category: "viral",
      description: "A complex viral disease affecting grapevines worldwide, reducing fruit quality and yield.",
      symptoms: [
        "Red leaves in red varieties",
        "Yellow leaves in white varieties",
        "Downward rolling leaves",
        "Delayed ripening"
      ],
      treatment: [
        "Remove infected vines",
        "Control mealybug vectors",
        "Use virus-free propagation material",
        "Monitor regularly"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/grapevine-leafroll.jpg"
      ]
    },
    {
      id: 23,
      common_name: "Verticillium Wilt",
      scientific_name: "Verticillium dahliae",
      category: "fungal",
      description: "A soil-borne fungal disease affecting many plants, causing wilting and plant death.",
      symptoms: [
        "One-sided leaf wilting",
        "Yellow V-shaped lesions",
        "Brown vascular tissue",
        "Sudden plant collapse"
      ],
      treatment: [
        "Practice crop rotation",
        "Remove infected plants",
        "Soil solarization",
        "Use resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/verticillium-wilt.jpg"
      ]
    },
    {
      id: 24,
      common_name: "Peach Leaf Curl",
      scientific_name: "Taphrina deformans",
      category: "fungal",
      description: "A fungal disease affecting peach and nectarine trees, causing leaf distortion and reduced fruit production.",
      symptoms: [
        "Puckered, distorted leaves",
        "Red-colored leaf tissue",
        "Leaf thickening",
        "Premature leaf drop"
      ],
      treatment: [
        "Apply fungicide in dormant season",
        "Remove infected leaves",
        "Improve air circulation",
        "Protect from rain during bud break"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/peach-leaf-curl.jpg"
      ]
    },
    {
      id: 25,
      common_name: "Rice Blast",
      scientific_name: "Magnaporthe oryzae",
      category: "fungal",
      description: "One of the most destructive rice diseases worldwide, causing significant yield losses in all rice-growing regions.",
      symptoms: [
        "Diamond-shaped lesions on leaves",
        "White to gray centers in spots",
        "Infected grains become chalky",
        "Neck rot in panicles"
      ],
      treatment: [
        "Plant resistant varieties",
        "Apply fungicides preventatively",
        "Maintain proper water management",
        "Balance nitrogen fertilization"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/rice-blast.jpg"
      ]
    },
    {
      id: 26,
      common_name: "Wheat Stem Rust",
      scientific_name: "Puccinia graminis",
      category: "fungal",
      description: "A devastating fungal disease of wheat and other cereals, capable of causing complete crop failure.",
      symptoms: [
        "Reddish-brown pustules on stems",
        "Torn plant tissue around pustules",
        "Weakened stems",
        "Reduced grain filling"
      ],
      treatment: [
        "Plant resistant varieties",
        "Early planting",
        "Monitor fields regularly",
        "Apply fungicides when needed"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/wheat-stem-rust.jpg"
      ]
    },
    {
      id: 27,
      common_name: "Corn Smut",
      scientific_name: "Ustilago maydis",
      category: "fungal",
      description: "A fungal disease of corn that produces galls filled with dark spores, considered a delicacy in some cultures.",
      symptoms: [
        "Large silvery-white galls",
        "Galls turning dark and powdery",
        "Distorted plant growth",
        "Reduced yield"
      ],
      treatment: [
        "Crop rotation",
        "Remove infected plants",
        "Avoid plant injury",
        "Use resistant hybrids"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/corn-smut.jpg"
      ]
    },
    {
      id: 28,
      common_name: "Bacterial Brown Spot",
      scientific_name: "Pseudomonas syringae",
      category: "bacterial",
      description: "A bacterial disease affecting beans and other legumes, causing spots on leaves and pods.",
      symptoms: [
        "Brown necrotic spots",
        "Water-soaked lesions",
        "Yellow halos around spots",
        "Pod discoloration"
      ],
      treatment: [
        "Use disease-free seeds",
        "Avoid overhead irrigation",
        "Rotate crops",
        "Apply copper-based sprays"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-brown-spot.jpg"
      ]
    },
    {
      id: 29,
      common_name: "Soybean Mosaic",
      scientific_name: "Soybean Mosaic Virus",
      category: "viral",
      description: "A common viral disease of soybeans transmitted by aphids and through seeds.",
      symptoms: [
        "Mosaic patterns on leaves",
        "Leaf puckering and distortion",
        "Stunted growth",
        "Reduced pod set"
      ],
      treatment: [
        "Plant virus-free seeds",
        "Control aphid populations",
        "Remove infected plants",
        "Use resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/soybean-mosaic.jpg"
      ]
    },
    {
      id: 30,
      common_name: "Barley Yellow Dwarf",
      scientific_name: "Barley Yellow Dwarf Virus",
      category: "viral",
      description: "A widespread viral disease affecting cereals and grasses, transmitted by aphids.",
      symptoms: [
        "Yellow or red leaf discoloration",
        "Stunted growth",
        "Reduced tillering",
        "Poor root development"
      ],
      treatment: [
        "Control aphid vectors",
        "Plant early in season",
        "Use resistant varieties",
        "Apply insecticides when needed"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/barley-yellow-dwarf.jpg"
      ]
    }
    ,{
      id: 31,
      common_name: "Panama Disease",
      scientific_name: "Fusarium oxysporum f.sp. cubense",
      category: "fungal",
      description: "A devastating fungal disease of banana plants, particularly affecting the Cavendish variety.",
      symptoms: [
        "Yellowing of older leaves",
        "Stem splitting",
        "Vascular discoloration",
        "Plant death"
      ],
      treatment: [
        "Plant resistant varieties",
        "Quarantine infected areas",
        "Clean equipment thoroughly",
        "Long-term crop rotation"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/panama-disease.jpg"
      ]
    },
    {
      id: 32,
      common_name: "Coffee Rust",
      scientific_name: "Hemileia vastatrix",
      category: "fungal",
      description: "A serious fungal disease affecting coffee plants worldwide, causing significant economic losses.",
      symptoms: [
        "Orange-yellow powder on leaves",
        "Circular spots on leaves",
        "Premature leaf drop",
        "Reduced coffee yield"
      ],
      treatment: [
        "Apply fungicides preventatively",
        "Improve air circulation",
        "Plant resistant varieties",
        "Proper plant spacing"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/coffee-rust.jpg"
      ]
    },
    {
      id: 33,
      common_name: "Cassava Mosaic",
      scientific_name: "Cassava Mosaic Virus",
      category: "viral",
      description: "A widespread viral disease of cassava in Africa and Asia, causing significant yield losses.",
      symptoms: [
        "Mosaic leaf patterns",
        "Leaf distortion",
        "Stunted growth",
        "Reduced tuber size"
      ],
      treatment: [
        "Use virus-free cuttings",
        "Remove infected plants",
        "Control whitefly vectors",
        "Plant resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/cassava-mosaic.jpg"
      ]
    },
    {
      id: 34,
      common_name: "Mango Malformation",
      scientific_name: "Fusarium mangiferae",
      category: "fungal",
      description: "A serious disease affecting mango trees, causing deformation of vegetative and floral parts.",
      symptoms: [
        "Compact flower clusters",
        "Shortened internodes",
        "Thick stems",
        "Reduced fruit set"
      ],
      treatment: [
        "Prune affected parts",
        "Apply fungicides",
        "Maintain tree health",
        "Remove infected panicles"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/mango-malformation.jpg"
      ]
    },
    {
      id: 35,
      common_name: "Bacterial Blight of Rice",
      scientific_name: "Xanthomonas oryzae pv. oryzae",
      category: "bacterial",
      description: "A major bacterial disease of rice in tropical and subtropical regions.",
      symptoms: [
        "Yellow-white leaf streaks",
        "Wilting of seedlings",
        "Leaf blight",
        "Reduced grain quality"
      ],
      treatment: [
        "Plant resistant varieties",
        "Balanced fertilization",
        "Proper water management",
        "Copper-based sprays"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-blight-rice-tropical.jpg"
      ]
    },
    {
      id: 36,
      common_name: "Papaya Ring Spot",
      scientific_name: "Papaya Ringspot Virus",
      category: "viral",
      description: "A devastating viral disease affecting papaya production worldwide.",
      symptoms: [
        "Ring spots on fruit",
        "Mosaic patterns on leaves",
        "Distorted leaves",
        "Stunted growth"
      ],
      treatment: [
        "Use virus-free seedlings",
        "Control aphid vectors",
        "Remove infected plants",
        "Plant resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/papaya-ringspot.jpg"
      ]
    },
    {
      id: 37,
      common_name: "Okra Yellow Vein Mosaic",
      scientific_name: "Okra Yellow Vein Mosaic Virus",
      category: "viral",
      description: "A serious viral disease affecting okra production in tropical and subtropical regions.",
      symptoms: [
        "Yellow vein network on leaves",
        "Leaf curling and distortion",
        "Stunted plant growth",
        "Reduced fruit yield"
      ],
      treatment: [
        "Control whitefly vectors",
        "Remove infected plants",
        "Use resistant varieties",
        "Apply insecticidal soaps"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/okra-yellow-vein-mosaic.jpg"
      ]
    },
    {
      id: 38,
      common_name: "Yam Anthracnose",
      scientific_name: "Colletotrichum gloeosporioides",
      category: "fungal",
      description: "A devastating fungal disease affecting yam cultivation in tropical regions.",
      symptoms: [
        "Dark brown leaf spots",
        "Stem dieback",
        "Tuber rot",
        "Leaf necrosis"
      ],
      treatment: [
        "Use clean planting materials",
        "Apply fungicides",
        "Improve air circulation",
        "Practice crop rotation"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/yam-anthracnose.jpg"
      ]
    },
    {
      id: 39,
      common_name: "Taro Leaf Blight",
      scientific_name: "Phytophthora colocasiae",
      category: "fungal",
      description: "A serious disease of taro causing significant losses in tropical regions.",
      symptoms: [
        "Large water-soaked leaf spots",
        "White fungal growth",
        "Leaf collapse",
        "Corm rot"
      ],
      treatment: [
        "Remove infected leaves",
        "Improve drainage",
        "Apply fungicides",
        "Use resistant cultivars"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/taro-leaf-blight.jpg"
      ]
    },
    {
      id: 40,
      common_name: "Sweet Potato Scurf",
      scientific_name: "Monilochaetes infuscans",
      category: "fungal",
      description: "A fungal disease affecting sweet potato skin quality in tropical areas.",
      symptoms: [
        "Brown discoloration on roots",
        "Rough skin texture",
        "Reduced market value",
        "Storage rot"
      ],
      treatment: [
        "Use disease-free slips",
        "Rotate planting areas",
        "Cure properly after harvest",
        "Maintain field sanitation"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/sweet-potato-scurf.jpg"
      ]
    },
    {
      id: 41,
      common_name: "Bacterial Wilt of Eggplant",
      scientific_name: "Ralstonia solanacearum",
      category: "bacterial",
      description: "A severe bacterial disease affecting eggplant production in tropical climates.",
      symptoms: [
        "Rapid wilting of plants",
        "Vascular browning",
        "Root decay",
        "Complete plant collapse"
      ],
      treatment: [
        "Plant resistant varieties",
        "Practice crop rotation",
        "Improve soil drainage",
        "Remove infected plants"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/eggplant-bacterial-wilt.jpg"
      ]
    },
    {
      id: 42,
      common_name: "Yard-long Bean Mosaic",
      scientific_name: "Bean Common Mosaic Virus",
      category: "viral",
      description: "A viral disease affecting yard-long beans and other legumes in tropical regions.",
      symptoms: [
        "Mosaic patterns on leaves",
        "Leaf curling",
        "Pod deformation",
        "Reduced yield"
      ],
      treatment: [
        "Use virus-free seeds",
        "Control aphid vectors",
        "Remove infected plants",
        "Plant resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/yard-long-bean-mosaic.jpg"
      ]
    },
    {
      id: 43,
      common_name: "Citrus Canker",
      scientific_name: "Xanthomonas citri",
      category: "bacterial",
      description: "A serious bacterial disease affecting all citrus varieties, causing lesions on fruits, leaves, and stems.",
      symptoms: [
        "Raised corky lesions",
        "Yellow halo around spots",
        "Premature fruit drop",
        "Defoliation"
      ],
      treatment: [
        "Remove infected parts",
        "Windbreaks for protection",
        "Copper-based sprays",
        "Quarantine measures"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/citrus-canker.jpg"
      ]
    },
    {
      id: 44,
      common_name: "Guava Wilt",
      scientific_name: "Fusarium oxysporum f.sp. psidii",
      category: "fungal",
      description: "A destructive fungal disease causing wilting and death of guava trees.",
      symptoms: [
        "Sudden wilting",
        "Yellowing leaves",
        "Vascular browning",
        "Root decay"
      ],
      treatment: [
        "Remove infected trees",
        "Soil solarization",
        "Use resistant rootstock",
        "Improve drainage"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/guava-wilt.jpg"
      ]
    },
    {
      id: 45,
      common_name: "Avocado Root Rot",
      scientific_name: "Phytophthora cinnamomi",
      category: "fungal",
      description: "A devastating root disease affecting avocado trees worldwide.",
      symptoms: [
        "Leaf yellowing",
        "Branch dieback",
        "Small fruit size",
        "Root necrosis"
      ],
      treatment: [
        "Improve soil drainage",
        "Mulch application",
        "Phosphonate treatments",
        "Resistant rootstocks"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/avocado-root-rot.jpg"
      ]
    },
    {
      id: 46,
      common_name: "Passion Fruit Woodiness",
      scientific_name: "Passion Fruit Woodiness Virus",
      category: "viral",
      description: "A viral disease causing woodiness in passion fruit and reduced fruit quality.",
      symptoms: [
        "Woody fruit",
        "Reduced fruit size",
        "Leaf mottling",
        "Stunted growth"
      ],
      treatment: [
        "Control aphid vectors",
        "Remove infected vines",
        "Plant virus-free material",
        "Use resistant varieties"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/passion-fruit-woodiness.jpg"
      ]
    },
    {
      id: 47,
      common_name: "Durian Phytophthora",
      scientific_name: "Phytophthora palmivora",
      category: "fungal",
      description: "A serious fungal disease affecting durian trees, causing root and fruit rot.",
      symptoms: [
        "Trunk cankers",
        "Fruit rot",
        "Leaf yellowing",
        "Root decay"
      ],
      treatment: [
        "Improve drainage",
        "Fungicide application",
        "Proper tree spacing",
        "Canopy management"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/durian-phytophthora.jpg"
      ]
    },
    {
      id: 48,
      common_name: "Rambutan Yellow Leaf",
      scientific_name: "Rambutan Yellow Leaf Disease",
      category: "viral",
      description: "A viral disease affecting rambutan trees, causing yellowing and reduced fruit production.",
      symptoms: [
        "Yellow leaves",
        "Reduced fruit size",
        "Leaf curling",
        "Poor fruit quality"
      ],
      treatment: [
        "Remove infected branches",
        "Control insect vectors",
        "Proper fertilization",
        "Regular monitoring"
      ],
      images: [
        "https://extension.umn.edu/sites/extension.umn.edu/files/rambutan-yellow-leaf.jpg"
      ]
    }
];

export type Disease = typeof diseases[0];

export interface PaginatedResponse {
  data: Disease[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export function getAllDiseases(page: number = 1, itemsPerPage: number = 6): PaginatedResponse {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = diseases.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    currentPage: page,
    totalPages: Math.ceil(diseases.length / itemsPerPage),
    totalItems: diseases.length,
    itemsPerPage: itemsPerPage
  };
}

export function searchDiseases(query: string, page: number = 1, itemsPerPage: number = 6): PaginatedResponse {
  const searchTerm = query.toLowerCase();
  const filteredDiseases = diseases.filter(disease => 
    disease.common_name.toLowerCase().includes(searchTerm) ||
    disease.scientific_name.toLowerCase().includes(searchTerm)
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredDiseases.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    currentPage: page,
    totalPages: Math.ceil(filteredDiseases.length / itemsPerPage),
    totalItems: filteredDiseases.length,
    itemsPerPage: itemsPerPage
  };
}

export function getDiseaseById(id: number) {
  return diseases.find(disease => disease.id === id);}

