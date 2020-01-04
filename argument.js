function useArguments() {
    var aArguments = Array.prototype.slice.call(arguments);
    var sum = 0;
    aArguments.forEach(function (value) {
        sum += value;
    });
    return sum;
}
