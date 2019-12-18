var express = require('express');
var app = express();


const info = [{
        areaTitle: "By the same illusion which lifts the horizon(1).",
        areaText: "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
    },
    {
        areaTitle: "By the same illusion which lifts the horizon(2).",
        areaText: "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
    },
    {
        areaTitle: "By the same illusion which lifts the horizon(3).",
        areaText: "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
    }
];

const testimotionals = [{
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(1).",
        authorName: "John Wayne-1",
        authorPosition: "CEO-1"
    },
    {
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(2).",
        authorName: "John Wayne-2",
        authorPosition: "CEO-2"
    },
    {
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(3).",
        authorName: "John Wayne-3",
        authorPosition: "CEO-3"
    }
];

app.get('/api/getWhatWeDo', function(req, res) {
    res.send(info);
});

app.get('/api/getTestimotionals', function(req, res) {
    res.send(testimotionals);
});

app.listen(5000, function() {
    console.log('Example app listening on port 3000!');
});