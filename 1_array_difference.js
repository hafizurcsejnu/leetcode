
//2215. Find the Difference of Two Arrays
//test case 1
// var nums1 = [1, 2, 3];
// var nums2 = [2, 4, 6];

//test case 2
var nums1 = [1,2,3,3];
var nums2 = [1,1,2,2];

var findDifference = function(a1, a2) {
    let difference1 = a1.filter(x => !a2.includes(x));
    let difference2 = a2.filter(x => !a1.includes(x));

    const ans1 = Array.from(new Set(difference1));
    const ans2 = Array.from(new Set(difference2));
    let answers = [ans1, ans2];
    return answers;   
};


console.log(findDifference(nums1, nums2));

