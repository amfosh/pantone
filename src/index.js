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
{"hex": "#f0c05a", "name": "Mimosa", "year": "2009"},
{"hex": "#6364a5", "name": "Blue Iris", "year": "2008"},
{"hex": "#ca7c74", "name": "Chili Pepper", "year": "2007"},
{"hex": "#decebb", "name": "Sand Dollar", "year": "2006"},
{"hex": "#53b0ae", "name": "Blue Turquoise", "year": "2005"},
{"hex": "#e2583e", "name": "Tigerlily", "year": "2004"},
{"hex": "#7bc4c4", "name": "Aqua Sky", "year": "2003"},
{"hex": "#bf1932", "name": "True Red", "year": "2002"},
{"hex": "#c74375", "name": "Fuchsia Rose", "year": "2001"},
{"hex": "#9bb7d4", "name": "Cerulean", "year": "2000"},
]

    const color = document.getElementById('color');
    const colorName = document.getElementById('color-name');
    const colorClick = document.getElementById('color-click');
    const colorYear = document.getElementById('color-year');
    let count = 0;

function colorChange() {
    colorClick.addEventListener("click", function() {
    let randomColor = colors[count];
    count ++
    // [Math.floor(Math.random() * colors.length)];
    color.style.backgroundColor = randomColor["hex"];
    colorName.innerText = randomColor["name"];
    colorYear.innerText = randomColor["year"];
    })
}
colorChange()
