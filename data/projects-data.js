const PROJECT_TYPES = [
    {
        id: 0,
        fullName: "Simple single-storey single-family building",
        complexityCategory: 0,
        icon: "0.png"
    },
    {
        id: 1,
        fullName: "Single-family building with garage",
        complexityCategory: 1,
        icon: "1.png"
    },
    {
        id: 2,
        fullName: "Residence of the highest standard",
        complexityCategory: 4,
        icon: "2.png"
    },
    {
        id: 3,
        fullName: "Terraced house",
        complexityCategory: 2,
        icon: "3.png"
    },
    {
        id: 4,
        fullName: "Low-rise multi-family buildings",
        complexityCategory: 1,
        icon: "4.png"
    },
    {
        id: 5,
        fullName: "High-rise multi-family buildings",
        complexityCategory: 3,
        icon: "5.png"
    },
]

PERCENTAGE_INDICATORS = [
    {
        min: 0,
        max: 200*1000,
        indicator: [5, 5, 5, 5, 5],
    },
    {
        min: 200*1000 + 1,
        max: 500 * 1000,
        indicators: [4.6, 5.95, 6, 6, 6],
    },
    {
        min: 500*1000 + 1,
        max: 1000 * 1000,
        indicators: [4.2, 5.45, 7.55, 7.6, 7.6],
    },
    {
        min: 1000*1000 + 1,
        max: 2000 * 1000,
        indicators: [3.9, 5, 6.9, 8.65, 8.65],
    },
    {
        min: 2000*1000 + 1,
        max: 5000 * 1000,
        indicators: [3.6, 4.55, 6.25, 7.85, 9.4],
    },
    {
        min: 5000*1000 + 1,
        max: 10000 * 1000,
        indicators: [3.3, 4.2, 5.9, 7.1, 8.5],
    },
    {
        min: 10000*1000 + 1,
        max: 20000 * 1000,
        indicators: [3, 3.8, 5.2, 6.45, 7.7],
    },
    {
        min: 20000*1000 + 1,
        max: 50000 * 1000,
        indicators: [2.8, 3.5, 4.7, 5.85, 7],
    },
    {
        min: 50000*1000 + 1,
        max: 1000000 * 1000,
        indicators: [2.55, 3.2, 4.3, 5.3, 6.3],
    },
]

const PROJECT_ADDONS = [
    {
        id: 0,
        fullName: "Map for design purposes",
        priceFactor: 0.02,
        icon: "0.png"
    },
    {
        id: 1,
        fullName: "Interior design",
        priceFactor: 0.5,
        icon: "1.png"
    },
    {
        id: 2,
        fullName: "The project concerns the superstructure, extension or reconstruction of an existing facility",
        priceFactor: 0.15,
        icon: "2.png"
    },
    {
        id: 3,
        fullName: "The project concerns a facility or area under the supervision of a monument conservator",
        priceFactor: 0.3,
        icon: "3.png"
    },
]

const PROJECT_PHASES = [
{
    id: 0,
        fullName: "Concept phase",
    priceFactor: 0.15,
    icon: "0.png"
},
    {
        id: 1,
        fullName: "Building permit phase",
        priceFactor: 0.3,
        icon: "1.png"
    },
    {
        id: 2,
        fullName: "Executive project",
        priceFactor: 0.5,
        icon: "2.png"
    },
    {
        id: 3,
        fullName: "All phases from concept to construction",
        priceFactor: 0.5,
        icon: "3.png"
    },
]
