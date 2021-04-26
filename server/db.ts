import cuid = require("cuid");

export const simplifiedRangeLogs = [
    {
        id: cuid(),
        date: "2017-04-21",
        firearm: "Some firearm",
        rounds: 100,
        range: "Some random range",
        ammoDescription: "A bunch of bullets",
        notes: "Some clever observations"
    },
    {
        id: cuid(),
        date: "2017-05-21",
        firearm: "Some  other firearm",
        rounds: 59,
        range: "A new range",
    },
    {
        id: cuid(),
        date: "2017-04-18",
        firearm: "F3",
        rounds: 11,
        ammoDescription: "More bullets",
        notes: "Other observations."
    },

];
