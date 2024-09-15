Certainly! Here’s a quick reference guide with concise solution ideas for each problem:

### **Find Closest Number to Zero**
**Problem Statement:** Find the number in an array closest to zero.

**Solution Idea:**
1. **Initialize Closest:** Start with the first element as the closest.
2. **Iterate and Compare:** Compare each element to update the closest if the absolute difference is smaller.

**Example:**  
Array: `[4, -1, 3, 2]`  
Result: `-1` (closest to zero)

---

### **Merge Strings Alternately**
**Problem Statement:** Merge two strings by alternating characters.

**Solution Idea:**
1. **Iterate Together:** Use two pointers to iterate through both strings simultaneously.
2. **Concatenate Characters:** Add characters from both strings to the result alternatively until both are exhausted.

**Example:**  
Strings: `"abc"` and `"def"`  
Result: `"adbecf"`

---

### **Roman to Integer**
**Problem Statement:** Convert a Roman numeral to an integer.

**Solution Idea:**
1. **Mapping Values:** Use a hashmap to map Roman symbols to their integer values.
2. **Iterate and Sum:** Traverse the string, adding values; subtract if a smaller numeral precedes a larger one.

**Example:**  
Roman: `"MCMXCIV"`  
Result: `1994`

---

### **Is Subsequence**
**Problem Statement:** Check if a string is a subsequence of another string.

**Solution Idea:**
1. **Two Pointers:** Use pointers to traverse both strings.
2. **Check Subsequence:** Move the pointer in the subsequence string whenever characters match.

**Example:**  
Strings: `"abc"` and `"aebdc"`  
Result: `True` (since "abc" is a subsequence of "aebdc")

---

### **Best Time to Buy and Sell Stock**
**Problem Statement:** Find the best time to buy and sell stock to maximize profit.

**Solution Idea:**
1. **Track Minimum Price:** Keep track of the minimum price seen so far.
2. **Calculate Profit:** For each price, calculate profit if bought at the minimum price and update max profit.

**Example:**  
Prices: `[7, 1, 5, 3, 6, 4]`  
Result: `5` (buy at 1, sell at 6)

---

### **Longest Common Prefix**
**Problem Statement:** Find the longest common prefix string amongst an array of strings.

**Solution Idea:**
1. **Vertical Scanning:** Compare characters of the strings column-wise.
2. **Terminate on Mismatch:** Stop when a mismatch is found.

**Example:**  
Strings: `["flower", "flow", "flight"]`  
Result: `"fl"`

---

### **Summary Ranges**
**Problem Statement:** Find ranges of consecutive numbers in a sorted array.

**Solution Idea:**
1. **Iterate Through Array:** Track start and end of ranges.
2. **Check Consecutive:** Update the end if the next number is consecutive; otherwise, store the range and start a new one.

**Example:**  
Array: `[0, 1, 2, 4, 5, 7]`  
Result: `["0->2", "4->5", "7"]`

---

### **Remove Duplicates From Sorted Array**
**Problem Statement:** Remove duplicates from a sorted array and return the new length.

**Solution Idea:**
1. **Two Pointers:** Use one pointer for iteration and another to track unique elements.
2. **Update Array:** Shift unique elements to the beginning of the array.

**Example:**  
Array: `[1, 1, 2]`  
Result: `[1, 2]` (new length: `2`)

---

### **Remove Element**
**Problem Statement:** Remove all instances of a specific value from an array.

**Solution Idea:**
1. **Two Pointers:** Use one pointer to traverse and another to track the new array length.
2. **Skip Target Value:** Only move unique values to the front.

**Example:**  
Array: `[3, 2, 2, 3]`, Value: `3`  
Result: `[2, 2]` (new length: `2`)

---

### **Merge Sorted Array**
**Problem Statement:** Merge two sorted arrays into one sorted array.

**Solution Idea:**
1. **Two Pointers:** Use pointers to traverse both arrays from the end.
2. **Place Elements:** Place the larger element at the end of the result array.

**Example:**  
Arrays: `[1, 3, 5, 0, 0, 0]` and `[2, 4, 6]`  
Result: `[1, 2, 3, 4, 5, 6]`

---

### **Best Time to Buy and Sell Stock II**
**Problem Statement:** Maximize profit by buying and selling multiple times.

**Solution Idea:**
1. **Greedy Approach:** Buy at every local minimum and sell at every local maximum.

**Example:**  
Prices: `[1, 2, 3, 4, 5]`  
Result: `4` (buy at 1, sell at 5)

---

### **Remove Duplicates From Sorted Array II**
**Problem Statement:** Remove duplicates allowing at most two occurrences in a sorted array.

**Solution Idea:**
1. **Two Pointers:** Track the count of occurrences.
2. **Update Array:** Keep up to two occurrences in the new array.

**Example:**  
Array: `[1, 1, 1, 2, 2, 3]`  
Result: `[1, 1, 2, 2, 3]` (new length: `5`)

---

### **Sort Colors**
**Problem Statement:** Sort an array with three distinct values (0, 1, 2).

**Solution Idea:**
1. **Dutch National Flag Algorithm:** Use three pointers to partition the array into three sections.

**Example:**  
Array: `[2, 0, 2, 1, 1, 0]`  
Result: `[0, 0, 1, 1, 2, 2]`

---

### **Product of Array Except Self**
**Problem Statement:** Return an array where each element is the product of all other elements except itself.

**Solution Idea:**
1. **Two Passes:** Calculate products of elements to the left and right of each index.
2. **Multiply Results:** Multiply the left and right products for each index.

**Example:**  
Array: `[1, 2, 3, 4]`  
Result: `[24, 12, 8, 6]`

---

### **H Index**
**Problem Statement:** Compute the H-index given an array of citations.

**Solution Idea:**
1. **Sort Array:** Sort citations in descending order.
2. **Find H-Index:** The largest index where the number of citations is at least `index + 1`.

**Example:**  
Citations: `[3, 0, 6, 1, 5]`  
Result: `3`

---

### **Merge Intervals**
**Problem Statement:** Merge overlapping intervals.

**Solution Idea:**
1. **Sort Intervals:** Sort intervals by their start times.
2. **Merge Intervals:** Traverse and merge overlapping intervals.

**Example:**  
Intervals: `[[1, 3], [2, 6], [8, 10], [15, 18]]`  
Result: `[[1, 6], [8, 10], [15, 18]]`

---

### **Spiral Matrix**
**Problem Statement:** Return all elements of a matrix in spiral order.

**Solution Idea:**
1. **Define Boundaries:** Use four boundaries (top, bottom, left, right).
2. **Traverse in Spiral:** Move along the boundaries and adjust them as you traverse.

**Example:**  
Matrix: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`  
Result: `[1, 2, 3, 6, 9, 8, 7, 4, 5]`

---

### **ZigZag Conversion**
**Problem Statement:** Convert a string into a zigzag pattern.

**Solution Idea:**
1. **Initialize Rows:** Use a list of strings to represent each row.
2. **Place Characters:** Traverse the string and place characters into rows in a zigzag pattern.

**Example:**  
String: `"PAYPALISHIRING"`, Rows: `3`  
Result: `"PAHNAPLSIIGYIR"`

---

### **Rotate Image**
**Problem Statement:** Rotate a matrix by 90 degrees clockwise.

**Solution Idea:**
1. **Transpose Matrix:** Swap rows and columns.
2. **Reverse Rows:** Reverse each row to get the final rotated matrix.

**Example:**  
Matrix: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`  
Result: `[[7, 4, 1], [8, 5, 2], [9, 6, 3]]`

---

### **Jewels and Stones**
**Problem Statement:** Count how many stones are jewels.

**Solution Idea:**
1. **Use a Set:** Store jewels in a set for O(1) lookups.
2. **Count Occurrences:** Iterate through stones and count those that are jewels.

**Example:**  
Jewels: `"aA"`, Stones: `"aAAbbbb"`  
Result: `3`

---

### **Contains Duplicate**
**Problem

 Statement:** Check if there are any duplicate elements in the array.

**Solution Idea:**
1. **Use a Set:** Traverse the array and check if an element is already in the set.
2. **Return Result:** If a duplicate is found, return `True`; otherwise, `False`.

**Example:**  
Array: `[1, 2, 3, 1]`  
Result: `True`

---

### **Ransom Note**
**Problem Statement:** Determine if you can construct a ransom note from a magazine.

**Solution Idea:**
1. **Count Characters:** Use hashmaps to count characters in the magazine and note.
2. **Check Availability:** Ensure the magazine has enough characters for each character in the note.

**Example:**  
Note: `"a"`, Magazine: `"b"`  
Result: `False`

---

### **Valid Anagram**
**Problem Statement:** Check if two strings are anagrams.

**Solution Idea:**
1. **Count Characters:** Use hashmaps to count characters in both strings.
2. **Compare Counts:** Check if both hashmaps are identical.

**Example:**  
Strings: `"anagram"` and `"nagaram"`  
Result: `True`

---

### **Maximum Number of Balloons**
**Problem Statement:** Find the maximum number of times you can form the word "balloon" from a string.

**Solution Idea:**
1. **Count Required Letters:** Use a hashmap to count occurrences of each letter in the string.
2. **Compute Balloons:** Determine the minimum number of complete "balloon" words you can form.

**Example:**  
String: `"loonbalxballpoon"`  
Result: `2`

---

### **Two Sum**
**Problem Statement:** Find two indices in an array such that the numbers at those indices sum up to a given target.

**Solution Idea:**
1. **Use a Hashmap:** Store each number's index while iterating.
2. **Check for Complement:** For each number, check if its complement (target - number) is already in the hashmap.
3. **Return Indices:** If found, return the indices; otherwise, continue.

**Example:**  
Array: `[2, 7, 11, 15]`  
Target: `9`  
Result: `[0, 1]` (2 + 7 = 9)

---

### **Valid Sudoku**
**Problem Statement:** Determine if a Sudoku is valid.

**Solution Idea:**
1. **Check Rows, Columns, and Sub-Grids:** Use sets to track numbers in each row, column, and 3x3 sub-grid.
2. **Validate:** Ensure no number appears more than once in each row, column, or sub-grid.

**Example:**  
Board: `[[5, 3, '.', '.', 7, '.', '.', '.', '.'], [6, '.', '.', 1, 9, 5, '.', '.', '.'], ['.', 9, 8, '.', '.', '.', '.', 6, '.'], [8, '.', '.', '.', 6, '.', '.', '.', 3], [4, '.', '.', 8, '.', 3, '.', '.', 1], [7, '.', '.', '.', 2, '.', '.', '.', 6], ['.', 6, '.', '.', '.', '.', 2, 8, '.'], ['.', '.', '.', 4, 1, 9, '.', '.', 5], ['.', '.', '.', '.', 8, '.', '.', 7, 9]]`  
Result: `True`

---

### **Group Anagrams**
**Problem Statement:** Group anagrams from a list of strings.

**Solution Idea:**
1. **Sort Each String:** Use sorted strings as keys in a hashmap.
2. **Collect Anagrams:** Group strings with the same key together.

**Example:**  
Strings: `["eat", "tea", "tan", "ate", "nat", "bat"]`  
Result: `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`

---

### **Majority Element**
**Problem Statement:** Find the element that appears more than n/2 times in an array.

**Solution Idea:**
1. **Boyer-Moore Voting Algorithm:** Use a counter to find the majority element in one pass.

**Example:**  
Array: `[3, 2, 3]`  
Result: `3`

---

### **Longest Consecutive Sequence**
**Problem Statement:** Find the length of the longest consecutive elements sequence in an unsorted array.

**Solution Idea:**
1. **Use a Set:** Store elements in a set for O(1) lookups.
2. **Find Sequences:** For each number, find the length of the sequence starting with that number.

**Example:**  
Array: `[100, 4, 200, 1, 3, 2]`  
Result: `4` (sequence: `[1, 2, 3, 4]`)

---

### **Squares of a Sorted Array**
**Problem Statement:** Return the squares of a sorted array in non-decreasing order.

**Solution Idea:**
1. **Two Pointers:** Use two pointers to traverse from both ends.
2. **Merge Squares:** Compare squares and build the result from largest to smallest.

**Example:**  
Array: `[-4, -1, 0, 3, 10]`  
Result: `[0, 1, 9, 16, 100]`

---

### **Reverse String**
**Problem Statement:** Reverse a string in-place.

**Solution Idea:**
1. **Two Pointers:** Use two pointers to swap characters from both ends toward the center.

**Example:**  
String: `"hello"`  
Result: `"olleh"`

---

### **Two Sum II - Input Array Is Sorted**
**Problem Statement:** Find two indices in a sorted array such that the numbers at those indices sum up to a given target.

**Solution Idea:**
1. **Two Pointers:** Use one pointer at the start and one at the end of the array.
2. **Adjust Pointers:** Move pointers based on whether the sum is less than or greater than the target.

**Example:**  
Array: `[2, 7, 11, 15]`  
Target: `9`  
Result: `[1, 2]` (1-based indices)

---

### **Valid Palindrome**
**Problem Statement:** Check if a string is a palindrome considering only alphanumeric characters and ignoring case.

**Solution Idea:**
1. **Two Pointers:** Use pointers to compare characters from the start and end.
2. **Skip Non-Alphanumeric:** Move pointers while skipping non-alphanumeric characters.

**Example:**  
String: `"A man, a plan, a canal: Panama"`  
Result: `True`

---

### **3Sum**
**Problem Statement:** Find all unique triplets in an array that sum up to zero.

**Solution Idea:**
1. **Sort Array:** Start with sorting the array.
2. **Two Pointers:** Use a loop to fix one element and apply the two-pointer technique to find pairs that sum to the negation of the fixed element.

**Example:**  
Array: `[-1, 0, 1, 2, -1, -4]`  
Result: `[[-1, -1, 2], [-1, 0, 1]]`

---

### **Container With Most Water**
**Problem Statement:** Find two lines that together with the x-axis form a container that holds the most water.

**Solution Idea:**
1. **Two Pointers:** Use two pointers, one at the beginning and one at the end of the array.
2. **Calculate Area:** Move pointers inward and calculate the area, keeping track of the maximum area.

**Example:**  
Heights: `[1, 8, 6, 2, 5, 4, 8, 3, 7]`  
Result: `49`

---

### **3Sum Closest**
**Problem Statement:** Find the sum of three integers that is closest to a given target.

**Solution Idea:**
1. **Sort Array:** Start with sorting the array.
2. **Two Pointers:** Use a loop to fix one element and apply the two-pointer technique to find the closest sum to the target.

**Example:**  
Array: `[-1, 2, 1, -4]`  
Target: `1`  
Result: `2`

---

### **4Sum**
**Problem Statement:** Find all unique quadruplets in an array that sum up to a given target.

**Solution Idea:**
1. **Sort Array:** Start with sorting the array.
2. **Two Pointers:** Use two loops to fix two elements and apply the two-pointer technique to find pairs that sum to the target minus the fixed elements.

**Example:**  
Array: `[1, 0, -1, 0, -2, 2]`  
Target: `0`  
Result: `[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]`

---

### **Trapping Rain Water**
**Problem Statement:** Calculate the amount of water that can be trapped after raining.

**Solution Idea:**
1. **Two Arrays:** Compute the maximum height to the left and right of each index.
2. **Calculate Water:** Use these heights to calculate trapped water at each index.

**Example:**  
Heights: `[4, 2, 0, 3, 2, 5]`  
Result: `6`

---

### **Baseball Game**
**Problem Statement:** Calculate the total points scored in a baseball game given a series of operations.

**Solution Idea:**
1. **Use a Stack:** Process each operation using a stack to keep

 track of points.
2. **Apply Operations:** Handle points, "C" (cancel last), "D" (double last), and "+" (sum of last two).

**Example:**  
Operations: `["5", "2", "C", "D", "+"]`  
Result: `30`

---

### **Valid Parentheses**
**Problem Statement:** Determine if the input string of parentheses is valid.

**Solution Idea:**
1. **Use a Stack:** Push opening brackets onto the stack and pop when encountering a closing bracket.
2. **Validate:** Ensure the stack is empty at the end of processing.

**Example:**  
String: `"()[]{}"`  
Result: `True`

---

### **Evaluate Reverse Polish Notation (RPN)**
**Problem Statement:** Evaluate the value of an arithmetic expression in Reverse Polish Notation.

**Solution Idea:**
1. **Use a Stack:** Push numbers onto the stack and apply operations when encountering operators.

**Example:**  
Expression: `["2", "1", "+", "3", "*"]`  
Result: `9`

---

### **Daily Temperatures**
**Problem Statement:** Find the number of days until a warmer temperature for each day.

**Solution Idea:**
1. **Use a Stack:** Traverse the list and use a stack to keep track of indices for which we are looking for a warmer temperature.

**Example:**  
Temperatures: `[73, 74, 75, 71, 69, 72, 76, 73]`  
Result: `[1, 1, 4, 2, 1, 1, 0, 0]`

---

### **Min Stack**
**Problem Statement:** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

**Solution Idea:**
1. **Use Two Stacks:** One for normal stack operations and one for tracking the minimum values.

**Example:**  
Operations: `["push(-2)", "push(0)", "push(-3)", "getMin()", "pop()", "top()", "getMin()"]`  
Result: `[-3, 0, -2]`

---

### **Largest Rectangle in Histogram**
**Problem Statement:** Find the area of the largest rectangle that can be formed in a histogram.

**Solution Idea:**
1. **Use a Stack:** Maintain a stack to keep track of indices and calculate areas as you encounter lower heights.

**Example:**  
Heights: `[2, 1, 5, 6, 2, 3]`  
Result: `10`

---

### **Remove Duplicates from Sorted List**
**Problem Statement:** Remove duplicates from a sorted linked list.

**Solution Idea:**
1. **Traverse List:** Check each node against the next node and remove duplicates.

**Example:**  
List: `1 -> 1 -> 2`  
Result: `1 -> 2`

---

### **Insert Greatest Common Divisors in Linked List**
**Problem Statement:** Insert nodes with the greatest common divisor between adjacent nodes in a linked list.

**Solution Idea:**
1. **Compute GCD:** For each adjacent pair, compute the GCD and insert a new node if it's greater than 1.

**Example:**  
List: `5 -> 10 -> 15`  
Result: `5 -> 5 -> 10 -> 5 -> 15`

---

### **Reverse Linked List**
**Problem Statement:** Reverse a singly linked list.

**Solution Idea:**
1. **Iterative Method:** Use three pointers to reverse the list in-place.

**Example:**  
List: `1 -> 2 -> 3 -> 4 -> 5`  
Result: `5 -> 4 -> 3 -> 2 -> 1`

---

### **Merge Two Sorted Lists**
**Problem Statement:** Merge two sorted linked lists into one sorted linked list.

**Solution Idea:**
1. **Use Two Pointers:** Compare nodes from both lists and merge them.

**Example:**  
Lists: `1 -> 2 -> 4`, `1 -> 3 -> 4`  
Result: `1 -> 1 -> 2 -> 3 -> 4 -> 4`

---

### **Linked List Cycle**
**Problem Statement:** Determine if a linked list has a cycle.

**Solution Idea:**
1. **Use Two Pointers:** Use a slow and a fast pointer to detect cycles.

**Example:**  
List: `3 -> 2 -> 0 -> -4` with a cycle at node `2`  
Result: `True`

---

### **Middle of the Linked List**
**Problem Statement:** Find the middle node of a linked list.

**Solution Idea:**
1. **Use Two Pointers:** Use a slow and fast pointer; the slow pointer will be at the middle when the fast pointer reaches the end.

**Example:**  
List: `1 -> 2 -> 3 -> 4 -> 5`  
Result: `3`

---

### **Remove Nth Node from End of List**
**Problem Statement:** Remove the nth node from the end of a linked list.

**Solution Idea:**
1. **Use Two Pointers:** Move one pointer `n` steps ahead, then move both pointers until the first reaches the end.

**Example:**  
List: `1 -> 2 -> 3 -> 4 -> 5`, N: `2`  
Result: `1 -> 2 -> 3 -> 5`

---

### **Copy List with Random Pointer**
**Problem Statement:** Create a deep copy of a linked list where each node has a random pointer.

**Solution Idea:**
1. **Duplicate Nodes:** Insert duplicate nodes next to original nodes, and then separate the lists.

**Example:**  
List: `1 -> 2 -> 3` with random pointers `1 -> 3`, `2 -> 1`, `3 -> 2`  
Result: A deep copy of the list with the same structure.

---

### **Binary Search**
**Problem Statement:** Perform binary search on a sorted array.

**Solution Idea:**
1. **Divide and Conquer:** Repeatedly divide the search interval in half until the target is found or the interval is empty.

**Example:**  
Array: `[1, 2, 3, 4, 5]`, Target: `3`  
Result: `2` (index of 3)

---

### **Search Insert Position**
**Problem Statement:** Find the position to insert a target value in a sorted array.

**Solution Idea:**
1. **Binary Search:** Use binary search to find the correct insertion position.

**Example:**  
Array: `[1, 3, 5, 6]`, Target: `5`  
Result: `2`

---

### **First Bad Version**
**Problem Statement:** Find the first bad version given a binary search.

**Solution Idea:**
1. **Binary Search:** Use binary search to find the first bad version.

**Example:**  
Versions: `1, 2, 3, 4, 5`, First bad version: `4`  
Result: `4`

---

### **Valid Perfect Square**
**Problem Statement:** Determine if a number is a perfect square.

**Solution Idea:**
1. **Binary Search:** Use binary search to check if the number is a perfect square.

**Example:**  
Number: `16`  
Result: `True`

---

### **Search a 2D Matrix**
**Problem Statement:** Search for a target value in a 2D matrix.

**Solution Idea:**
1. **Binary Search:** Use binary search or a more efficient matrix-specific search algorithm.

**Example:**  
Matrix: `[[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]]`, Target: `5`  
Result: `True`

---

### **Find Minimum in Rotated Sorted Array**
**Problem Statement:** Find the minimum element in a rotated sorted array.

**Solution Idea:**
1. **Binary Search:** Use binary search to find the rotation point.

**Example:**  
Array: `[4, 5, 6, 7, 0, 1, 2]`  
Result: `0`

---

### **Search in Rotated Sorted Array**
**Problem Statement:** Search for a target value in a rotated sorted array.

**Solution Idea:**
1. **Binary Search:** Use binary search with rotation handling to find the target.

**Example:**  
Array: `[4, 5, 6, 7, 0, 1, 2]`, Target: `0`  
Result: `4`

---

### **Koko Eating Bananas**
**Problem Statement:** Find the minimum eating speed to finish all bananas in a given time.

**Solution Idea:**
1. **Binary Search:** Use binary search to find the minimum eating speed.

**Example:**  
Piles: `[3, 6, 7, 11]`, H: `8`  
Result: `4`

---

### **Maximum Average Subarray I**
**Problem Statement:** Find the maximum average of a subarray of size `k`.

**Solution Idea:**
1. **Sliding Window:** Use a sliding window to compute the average of subarrays.

**Example:**  
Array: `[1, 12, -5, -6, 50, 3]`, `k: 4`  
Result: `12.75`

---

### **Max Consecutive Ones III**
**Problem Statement:** Find the maximum number of consecutive 1s in a binary array with at most `k` flips.

**Solution Idea:**
1. **Sliding Window:** Use a sliding window to count the maximum consecutive 1s with at most `k` flips.

**Example:**  
Array:

 `[1,1,0,0,1,1,1,0,1,1]`, `k: 2`  
Result: `7`

---

### **Subarray Sum Equals K**
**Problem Statement:** Find the number of continuous subarrays whose sum equals `k`.

**Solution Idea:**
1. **Use a Hashmap:** Store cumulative sums and check for the existence of the required sum.

**Example:**  
Array: `[1, 1, 1]`, `k: 2`  
Result: `2`

---

### **Permutations**
**Problem Statement:** Find all permutations of a list of numbers.

**Solution Idea:**
1. **Backtracking:** Use recursion to generate all permutations.

**Example:**  
List: `[1, 2, 3]`  
Result: `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`

---

### **Permutations II**
**Problem Statement:** Find all unique permutations of a list of numbers that may contain duplicates.

**Solution Idea:**
1. **Backtracking:** Use recursion and a set to handle duplicates.

**Example:**  
List: `[1, 1, 2]`  
Result: `[[1, 1, 2], [1, 2, 1], [2, 1, 1]]`

---

### **Combinations**
**Problem Statement:** Find all combinations of `k` numbers out of `n` numbers.

**Solution Idea:**
1. **Backtracking:** Use recursion to generate combinations.

**Example:**  
`n: 4`, `k: 2`  
Result: `[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]`

---

### **Combination Sum**
**Problem Statement:** Find all combinations that sum up to a target value.

**Solution Idea:**
1. **Backtracking:** Use recursion to find all possible combinations.

**Example:**  
Candidates: `[2, 3, 6, 7]`, Target: `7`  
Result: `[[2, 2, 3], [7]]`

---

### **Combination Sum II**
**Problem Statement:** Find all unique combinations that sum up to a target value considering duplicates.

**Solution Idea:**
1. **Backtracking:** Use recursion and handle duplicates.

**Example:**  
Candidates: `[10, 1, 2, 7, 6, 5]`, Target: `8`  
Result: `[[1, 2, 5], [1, 7], [2, 6]]`

---

### **Letter Combinations of a Phone Number**
**Problem Statement:** Find all possible letter combinations given a string of digits.

**Solution Idea:**
1. **Backtracking:** Use recursion to map digits to letters and find all combinations.

**Example:**  
Digits: `"23"`  
Result: `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`

---

### **Generate Parentheses**
**Problem Statement:** Generate all combinations of valid parentheses.

**Solution Idea:**
1. **Backtracking:** Use recursion to generate all valid combinations.

**Example:**  
`n: 3`  
Result: `["((()))", "(()())", "(())()", "()(())", "()()()"]`

---

### **N-Queens**
**Problem Statement:** Solve the N-Queens problem where you need to place `n` queens on an `n x n` chessboard such that no two queens attack each other.

**Solution Idea:**
1. **Backtracking:** Use recursion to place queens and check for valid positions.

**Example:**  
`n: 4`  
Result: `[[[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]]`

---

### **Sudoku Solver**
**Problem Statement:** Solve a Sudoku puzzle by filling the empty cells.

**Solution Idea:**
1. **Backtracking:** Use recursion to fill cells and validate the Sudoku rules.

**Example:**  
Board: `[['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]`  
Result: Solved Sudoku board.

---

### **Word Ladder**
**Problem Statement:** Find the shortest transformation sequence from a start word to an end word, changing one letter at a time.

**Solution Idea:**
1. **BFS:** Use Breadth-First Search to find the shortest transformation sequence.

**Example:**  
Start: `"hit"`, End: `"cog"`, Word list: `["hot","dot","dog","lot","log","cog"]`  
Result: `["hit", "hot", "dot", "dog", "cog"]`

---

### **Word Search**
**Problem Statement:** Find if a word exists in a 2D board of letters.

**Solution Idea:**
1. **DFS:** Use Depth-First Search to explore possible word paths.

**Example:**  
Board: `[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]`, Word: `"ABCCED"`  
Result: `True`

---

### **Number of Islands**
**Problem Statement:** Count the number of islands in a 2D grid of `1`s (land) and `0`s (water).

**Solution Idea:**
1. **DFS/BFS:** Use Depth-First Search or Breadth-First Search to explore each island.

**Example:**  
Grid: `[['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]`  
Result: `3`

---

### **Flood Fill**
**Problem Statement:** Perform a flood fill operation on a 2D grid starting from a given pixel.

**Solution Idea:**
1. **DFS/BFS:** Use Depth-First Search or Breadth-First Search to fill connected pixels.

**Example:**  
Image: `[[1,1,1],[1,1,0],[1,0,1]]`, Start: `(1,1)`, New Color: `2`  
Result: `[[2,2,2],[2,2,0],[2,0,1]]`

---

### **Climbing Stairs**
**Problem Statement:** Calculate the number of ways to climb a staircase with `n` steps where you can climb 1 or 2 steps at a time.

**Solution Idea:**
1. **Dynamic Programming:** Use a DP array where each index represents the number of ways to reach that step.

**Example:**  
`n: 3`  
Result: `3` (ways: `1+1+1`, `1+2`, `2+1`)

---

### **House Robber**
**Problem Statement:** Calculate the maximum amount of money you can rob from a row of houses where you cannot rob two adjacent houses.

**Solution Idea:**
1. **Dynamic Programming:** Use a DP array to keep track of the maximum money that can be robbed up to each house.

**Example:**  
Houses: `[2, 3, 2]`  
Result: `3` (rob house 1 and 3)

---

### **House Robber II**
**Problem Statement:** Calculate the maximum amount of money you can rob from a circular row of houses where you cannot rob two adjacent houses.

**Solution Idea:**
1. **Handle Circle:** Use the solution for House Robber by considering two cases: excluding the first house or excluding the last house.

**Example:**  
Houses: `[2, 3, 2]`  
Result: `3` (rob house 2)

---

### **Maximum Product Subarray**
**Problem Statement:** Find the maximum product of a contiguous subarray.

**Solution Idea:**
1. **Dynamic Programming:** Use variables to track the maximum and minimum products up to the current position.

**Example:**  
Array: `[2, 3, -2, 4]`  
Result: `6` (subarray `[2, 3]`)

---

### **Product of Array Except Self**
**Problem Statement:** Find the product of all elements in an array except the current element.

**Solution Idea:**
1. **Use Two Arrays:** Use one array to store the product of elements to the left of each position and another for the right.

**Example:**  
Array: `[1, 2, 3, 4]`  
Result: `[24, 12, 8, 6]`

---

### **Find Minimum in Rotated Sorted Array II**
**Problem Statement:** Find the minimum element in

 a possibly rotated sorted array that may contain duplicates.

**Solution Idea:**
1. **Binary Search:** Use binary search with handling for duplicates.

**Example:**  
Array: `[1, 3, 5]`  
Result: `1`

---

### **Remove Duplicates from Sorted Array II**
**Problem Statement:** Remove duplicates from a sorted array such that each element can appear at most twice.

**Solution Idea:**
1. **Two Pointers:** Use a pointer to maintain the allowed duplicates.

**Example:**  
Array: `[1, 1, 1, 2, 2, 3]`  
Result: `[1, 1, 2, 2, 3]`

---

### **First Missing Positive**
**Problem Statement:** Find the smallest positive integer that is missing from an unsorted array.

**Solution Idea:**
1. **Index Mapping:** Use index mapping to place each number in its correct position.

**Example:**  
Array: `[3, 4, -1, 1]`  
Result: `2`

---

### **Find the Duplicate Number**
**Problem Statement:** Find the duplicate number in an array containing `n+1` integers where each integer is between `1` and `n`.

**Solution Idea:**
1. **Floyd's Tortoise and Hare:** Use cycle detection algorithm to find the duplicate.

**Example:**  
Array: `[1, 3, 4, 2, 2]`  
Result: `2`

---

### **Missing Number**
**Problem Statement:** Find the missing number in an array containing `n` distinct numbers from `0` to `n`.

**Solution Idea:**
1. **Sum Formula:** Use the sum formula for the first `n` natural numbers to find the missing number.

**Example:**  
Array: `[3, 0, 1]`  
Result: `2`

---

### **Top K Frequent Elements**
**Problem Statement:** Find the top `k` most frequent elements in an array.

**Solution Idea:**
1. **Use a Heap:** Use a min-heap to keep track of the top `k` frequent elements.

**Example:**  
Array: `[1,1,1,2,2,3]`, `k: 2`  
Result: `[1, 2]`

---

### **Group Anagrams**
**Problem Statement:** Group anagrams from a list of strings.

**Solution Idea:**
1. **Use a Hashmap:** Group strings by their sorted character sequence.

**Example:**  
Strings: `["eat", "tea", "tan", "ate", "nat", "bat"]`  
Result: `[["eat","tea","ate"],["tan","nat"],["bat"]]`

---

### **Encode and Decode Strings**
**Problem Statement:** Encode a list of strings into a single string and decode it back.

**Solution Idea:**
1. **Use a Separator:** Use a special separator to encode and decode the strings.

**Example:**  
Strings: `["lint","code","love","you"]`  
Result: Encoded: `"4#lint4#code4#love3#you"`, Decoded: `["lint","code","love","you"]`

---

### **Isomorphic Strings**
**Problem Statement:** Determine if two strings are isomorphic.

**Solution Idea:**
1. **Use Two Mappings:** Map each character in the first string to the second string and vice versa.

**Example:**  
Strings: `"egg"`, `"add"`  
Result: `True`

---

### **Palindrome Partitioning**
**Problem Statement:** Partition a string such that every substring is a palindrome.

**Solution Idea:**
1. **Backtracking:** Use recursion to find all palindromic partitions.

**Example:**  
String: `"aab"`  
Result: `[["a", "a", "b"], ["aa", "b"]]`

---

### **Count and Say**
**Problem Statement:** Generate the `n`th term of the count-and-say sequence.

**Solution Idea:**
1. **Iterative Construction:** Generate each term by counting and describing the previous term.

**Example:**  
`n: 4`  
Result: `"1211"`

---

### **Generate Parentheses**
**Problem Statement:** Generate all combinations of valid parentheses.

**Solution Idea:**
1. **Backtracking:** Use recursion to generate all valid combinations.

**Example:**  
`n: 3`  
Result: `["((()))", "(()())", "(())()", "()(())", "()()()"]`