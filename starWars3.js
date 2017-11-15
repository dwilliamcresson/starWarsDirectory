// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 5000;

// Data
// ===========================================================
var characters = [{
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 3000
    },

    {
        routeName: "darthMaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },

    {
        routeName: "obiWanKenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 35,
        forcePoints: 1200
    }
];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.send("Welcome to the Star Wars Page!");
});

app.get("/api/:characters?", function (req, res) {
    var chosen = req.params.characters;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }
        return res.send("No Character Found");
    }
    return res.json(characters);

    // What does this log?
    //console.log(chosen);

    //res.end();
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});