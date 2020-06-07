const colors =    
[{"hex": "#34558b", "name": "Classic Blue", "year": "2020" },
{"hex": "#ff6f61", "name": "Living Coral", "year": "2019" },
{"hex": "#645394", "name": "Ultra Violet", "year": "2018"},
{"hex": "#91B54D", "name": "Greenery", "year": "2017"},
{"hex": "#f7caca", "name": "Rose Quartz", "year": "2016"},
{"hex": "#b57170", "name": "Marsala", "year": "2015"},
{"hex": "#b067a1", "name": "Radiant Orchid", "year": "2014"},
{"hex": "#55865C", "name": "Emerald Green", "year": "2013"},
{"hex": "#dd4124", "name": "Tangerine Tango", "year": "2012"},
{"hex": "#d85a7b", "name": "Honeysuckle", "year": "2011"},
{"hex": "#53b0ae", "name": "Turquoise", "year": "2010"},
// {"hex": "#55865C", "name": "17-5641", "year": "2009"},
// {"hex": "#55865C", "name": "17-5641", "year": "2008"},
// {"hex": "#55865C", "name": "17-5641", "year": "2007"},
// {"hex": "#55865C", "name": "17-5641", "year": "2006"},
]

    const color = document.getElementById('color');
    const colorName = document.getElementById('color-name');
    const colorClick = document.getElementById('color-click');
    const colorYear = document.getElementById('color-year');

function colorChange() {
    colorClick.addEventListener("click", function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    color.style.backgroundColor = randomColor["hex"];
    colorName.innerText = randomColor["name"];
    colorYear.innerText = randomColor["year"];
    })
}
colorChange();
