```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: In the code you provided, there's a typo in the variable name. You've declared the variable as greeting but then attempted to assign an empty object to greetign

</p>
</details>

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: The code you provided defines a function sum that takes two parameters a and b and returns their sum. when me call sum(1, "2") . Then sum 12.

</p>
</details>

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: B</b></summary>
<p>

#### Answer: i have an array containing four elements, and i also have an object info with a property favoriteFood that is initially set to the first element of the food array ("0"). However, i then reassign the info.favoriteFood property to a new value "0".

</p>
</details>

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B</b></summary>
<p>

#### Answer: i have defined a parameter name, which means i expect to pass an argument when calling the function. However, when i call sayHi() without providing an argument, it will result in an error because the name parameter is undefined.

</p>
</details>

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: i have an array nums containing four numbers [0, 1, 2, 3], and i want to count the number of elements in the array that are truthy when used as conditions.The forEach method is used to iterate over each element of the nums array, and for each element (num), i check if it's truthy (meaning not equal to zero). If the condition is met, i increment the count variable by 1.

</p>
</details>
