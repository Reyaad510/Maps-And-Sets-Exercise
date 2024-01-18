const quickQuestionOne = new Set([1, 1, 2, 2, 3, 4]);

console.log(quickQuestionOne); // Set {1,2,3,4}

// Quick Question 2
const quickQuestionTwo = [...new Set("referee")].join("");

console.log(quickQuestionTwo); // ref

// Quick Question 3

let m = new Map();
m.set([1, 2, 3], true); // [1,2,3] => true
m.set([1, 2, 3], false); // [1,2,3] => true, [1,2,3] => false

m.size; // 2
// An array and obj are instances so if you say [] = [] it will return false bcuz they are diff instances so the results above will create two keys and two values. It does not reassign true to false

console.log(m);

// hasDuplicate

const hasDuplicate = (arr) => {
  // compare the Set size to the arr length to see if any duplicates were removed
  return new Set(arr).size === arr.length ? true : false;
};

console.log(hasDuplicate([1, 1, 4, 5, 2, 6, 2, 98]));
console.log(hasDuplicate([1, 2, 3, 4]));

// vowelCount

const vowelCount = (str) => {
  const vowels = "aeiou";
  let m = new Map();

  for (let char of str) {
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
      if (m.has(lowerCase)) {
        m.set(lowerCase, m.get(lowerCase) + 1);
      } else {
        m.set(lowerCase, 1);
      }
    }
  }
  return m;
};

console.log(vowelCount("awesome"));
console.log(vowelCount("Colt"));
