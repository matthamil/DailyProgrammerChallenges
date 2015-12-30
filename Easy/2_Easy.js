// reddit.com/r/dailyprogrammer/wiki/challenges
// [2/10/12] Challenge #2 [Easy]

// Calculating Standard Deviation of a Sample

var sample = [40, 34, 46, 50, 29, 31, 42, 53, 45, 39];

var StdDev = (function(n){
    var nums = n;
    var avg =  function(x) {
        var sum = x.reduce(function(all, item){
            return all + item;
        }, 0);
        var avg = sum / x.length;
        return avg;
    };
    var calcStdDev = function(){
        // σ^2 = (Σ(x - xbar)^2)/(n - 1)
        var sqDifferences = nums.map(function(n){
            var difference = n - avg(nums);
            return Math.pow(difference, 2);
        });

        // correcting for the lost degree of freedom
        var avgSqDiff = (avg(sqDifferences) * nums.length)/(nums.length - 1);

        return Math.sqrt(avgSqDiff);
    };

    return calcStdDev();
})(sample);

console.log(StdDev);
// 7.922541679705237