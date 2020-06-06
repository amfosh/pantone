const colors =    
[{"hex": "#34558b", "name": "19-4052", "year": "2020" },
{"hex": "#ff6f61", "name": "16-1546", "year": "2019" },
{"hex": "#645394", "name": "18-3838", "year": "2018"},
{"hex": "#91B54D", "name": "15-0343", "year": "2017"},
{"hex": "#f7caca", "name": "13-1520", "year": "2016"},
{"hex": "#b57170", "name": "18-1438", "year": "2015"},
{"hex": "#b067a1", "name": "18-3224", "year": "2014"},
{"hex": "#55865C", "name": "17-5641", "year": "2013"},
{"hex": "#dd4124", "name": "17-1463", "year": "2012"},
{"hex": "#d85a7b", "name": "18-2120", "year": "2011"},
{"hex": "#53b0ae", "name": "15-5217", "year": "2010"},
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
    console.log(randomColor)
    color.style.backgroundColor = randomColor["hex"];
    colorName.innerText = randomColor["name"];
    colorYear.innerText = randomColor["year"];
    })
}
colorChange();
