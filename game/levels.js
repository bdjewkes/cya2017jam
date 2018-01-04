var levelsData = [
    {
        "mapKey": "map0",
        "monsters": [
            {"x": 350, "y": 250, "key": "spider", "scale": 3, "health": 3 },
            {"x": 250, "y": 350, "key": "skeleton", "scale": 2, "health": 3 }
        ],
        "exits": { "top": 1 }
    },
    {
        "mapKey": "map1",
        "monsters": [
            {"x": 350, "y": 250, "key": "spider", "scale": 3, "health": 3 },
            {"x": 450, "y": 400, "key": "spider", "scale": 3, "health": 3 },
            {"x": 250, "y": 350, "key": "skeleton", "scale": 2, "health": 5 }
        ],
        "exits": { 
            "top": 2,
            "bottom": 0
        }
    },
    {
        "mapKey": "map2",
        "monsters": [
            {"x": 350, "y": 250, "key": "amoeba1", "scale": 3, "health": 3 },
        ], 
        "exits": { 
            "top": 3,
            "bottom": 1 
        }
    },
    {
        "mapKey": "map3",
        "monsters": [
            {"x": 350, "y": 250, "key": "bear", "scale": 3, "health": 3 },
        ],
        "exits": { 
            "top": 4,
            "bottom": 2
        }
    },
    {
        "mapKey": "map4",
        "monsters": [
            {"x": 200, "y": 50, "key": "amoeba1", "scale": 4, "health": 5 },
        ],

        "exits": { 
            "top": 5,
            "bottom": 3
        }
    },
    {
        "mapKey": "map5",
        "monsters": [
            {"x": 350, "y": 250, "key": "amoeba2", "scale": 3, "health": 3 },
        ],
        "exits": { 
            "top": 6,
            "bottom": 4
        }
    },
    {
        "mapKey": "map6",
        "music": "boss",
        "monsters": [
            {"x": 200, "y": 50, "key": "ghost", "scale": 6, "health": 15 },
        ],
        "exits": { 
            "bottom": 5,
            "top": 0
        }
    }
]