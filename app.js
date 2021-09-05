var square = document.querySelectorAll('.square');
var displayColor = document.querySelector('.displayColor');
var h1 = document.querySelector('h1');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var masage = document.querySelector('#masage');
var newColors = document.querySelector('#reset');

var colors = ganrtRadomColr(6);

var pickedColor = pickedRandomColor(colors);
displayColor.textContent = pickedColor;

easy.addEventListener('click', function() {
    this.classList.add('selected');
    hard.classList.remove('selected');

    colors = ganrtRadomColr(4);
    pickedColor = pickedRandomColor(colors);
    displayColor.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = 'none';
        }
        square[i].style.backgroundColor = colors[i];
    };
});

hard.addEventListener('click', function() {
    this.classList.add('selected');
    easy.classList.remove('selected');

    colors = ganrtRadomColr(6);
    pickedColor = pickedRandomColor(colors);
    displayColor.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = 'block';
    };
});

newColors.addEventListener('click', function() {
    this.textContent = 'New Colors!'
    masage.textContent = '';
    colors = ganrtRadomColr(6);
    pickedColor = pickedRandomColor(colors);
    displayColor.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    };
});

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener('click', function() {
        var chosenColor = this.style.backgroundColor;
        if (chosenColor === pickedColor) {
            newColors.textContent = 'Play agin?'
            masage.textContent = 'Correct!';
            h1.style.backgroundColor = pickedColor;
            mathColor(pickedColor);
        } else {
            this.style.backgroundColor = '#232323';
            masage.textContent = 'Try again';
        }
    });
};

function mathColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
};

function pickedRandomColor(colors) {
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
};

function ganrtRadomColr(number) {
    var clors = [];
    for (var i = 1; i < number; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var randomColors = "rgb" + "(" + r + ", " + g + ", " + b + ")";
        clors.push(randomColors);
    };
    return clors;
};