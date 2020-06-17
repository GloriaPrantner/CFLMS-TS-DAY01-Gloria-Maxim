var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(function (i) {
    for (var j = 1; j < 11; j++) {
        var result = num[i] * j;
        document.write(j + " x " + num[i] + " = " + result + "<br>");
    }
});
