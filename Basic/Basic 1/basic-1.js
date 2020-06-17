var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(function (i) {
    for (var j = 1; j < 11; j++) {
        var result = num[i] * j;
        document.write(j + " x " + num[i] + " = " + result + "<br>");
    }
});
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var i = num_1[_i];
    for (var _a = 0, num_2 = num; _a < num_2.length; _a++) {
        var y = num_2[_a];
        console.log(i + " X " + y + " = " + i * y);
    }
}
