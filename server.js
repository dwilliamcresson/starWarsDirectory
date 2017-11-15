// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },

    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 35,
        forcePoints: 1200
    }
];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "starWarsSearch.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "starWarsAdd.html"));
  });

app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "starWarsAll.html"));
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
});

app.post("/api/new", function(req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();    
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});