# static

1. **Instance Variables vs. Static Variables**
   - **Instance Variable**: Each object has its own copy.
   - **Static Variable**: Shared among all instances.

2. **Instance Methods vs. Static Methods**
   - **Instance Method**: Requires an object to be invoked.
   - **Static Method**: Can be called without an object.

3. **Instance Initialization Blocks vs. Static Blocks**
   - **Instance Initialization Block**: Runs for each object creation.
   - **Static Block**: Runs once when the class is loaded.

4. **Non-Static Inner Classes vs. Static Inner Classes**
   - **Non-Static Inner Class**: Can access instance variables of the outer class.
   - **Static Inner Class**: Cannot access instance variables of the outer class.
 
<br>

# call by value / reference 

Yes, whether JavaScript uses **call by value** or **call by reference** depends on the **data structure** and its type:

### Call by Value
- **Data Structures**: Primitives
- **Examples**: `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
- **Behavior**: When you pass a primitive type to a function, JavaScript passes a **copy** of the value. Changes to the copied value do not affect the original value.
  
  ```js
  function changeValue(val) {
      val = 10;  // Only changes the local copy
  }
  let num = 5;
  changeValue(num);
  console.log(num);  // Output: 5 (unchanged)
  ```

### Call by Reference
- **Data Structures**: Non-primitives (objects, arrays, functions)
- **Examples**: `object`, `array`, `function`
- **Behavior**: When you pass a non-primitive type to a function, JavaScript passes a **reference** to the actual data in memory. Changes made through this reference will affect the original data.

  ```js
  function addElement(arr) {
      arr.push(4);  // Modifies the original array
  }
  let myArray = [1, 2, 3];
  addElement(myArray);
  console.log(myArray);  // Output: [1, 2, 3, 4] (modified)
  ```

### Summary
- **Primitives** are passed by value: A copy of the value is used, so changes inside the function do not affect the original variable.
- **Non-primitives** (objects and arrays) are passed by reference: A reference to the actual data is used, so changes inside the function affect the original data.

So, the type of data structure (primitive vs. non-primitive) determines whether JavaScript uses call by value or call by reference when passing arguments to functions.
