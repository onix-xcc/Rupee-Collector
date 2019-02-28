// Set rupee variables value range
var greenRupee = fetchRupeeValue(1, 12);
var blueRupee = fetchRupeeValue(1, 12);
var redRupee = fetchRupeeValue(1, 12);
var purpleRupee = fetchRupeeValue(1, 12);

// Function for fetching the random value range
function fetchRupeeValue(leastVal, greatestVal) {
    return Math.floor(Math.random() * (leastVal - greatestVal) + leastVal);
}

//