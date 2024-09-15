## TreeNode Class Definition

```javascript
// TreeNode class definition
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    toString() {
        return String(this.val);
    }
}
```

## Binary Tree Example

```javascript
// Binary Tree Example
//        1
//     2    3
//   4  5  10

const A = new TreeNode(1);
const B = new TreeNode(2);
const C = new TreeNode(3);
const D = new TreeNode(4);
const E = new TreeNode(5);
const F = new TreeNode(10);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;

console.log(A);
```

## Recursive Pre Order Traversal (DFS)

```javascript
// Recursive Pre Order Traversal (DFS) Time: O(n), Space: O(n)
function preOrder(node) {
    if (!node) return;

    console.log(node.toString());
    preOrder(node.left);
    preOrder(node.right);
}

preOrder(A);
```

## Recursive In Order Traversal (DFS)

```javascript
// Recursive In Order Traversal (DFS) Time: O(n), Space: O(n)
function inOrder(node) {
    if (!node) return;

    inOrder(node.left);
    console.log(node.toString());
    inOrder(node.right);
}

inOrder(A);
```

## Iterative Pre Order Traversal (DFS)

```javascript
// Iterative Pre Order Traversal (DFS) Time: O(n), Space: O(n)
function preOrderIterative(node) {
    if (!node) return;

    const stk = [node];

    while (stk.length) {
        const current = stk.pop();
        console.log(current.toString());
        if (current.right) stk.push(current.right);
        if (current.left) stk.push(current.left);
    }
}

preOrderIterative(A);
```

## Level Order Traversal (BFS)

```javascript
// Level Order Traversal (BFS) Time: O(n), Space: O(n)
function levelOrder(node) {
    if (!node) return;

    const q = [node];

    while (q.length) {
        const current = q.shift();
        console.log(current.toString());
        if (current.left) q.push(current.left);
        if (current.right) q.push(current.right);
    }
}

levelOrder(A);
```

## Check if Value Exists (DFS)

```javascript
// Check if Value Exists (DFS) Time: O(n), Space: O(n)
function search(node, target) {
    if (!node) return false;

    if (node.val === target) return true;

    return search(node.left, target) || search(node.right, target);
}

console.log(search(A, 11));
```

## Binary Search Trees (BST) Example

```javascript
// Binary Search Trees (BSTs)
//       5
//    1    8
//  -1 3  7 9

const A2 = new TreeNode(5);
const B2 = new TreeNode(1);
const C2 = new TreeNode(8);
const D2 = new TreeNode(-1);
const E2 = new TreeNode(3);
const F2 = new TreeNode(7);
const G2 = new TreeNode(9);

A2.left = B2;
A2.right = C2;
B2.left = D2;
B2.right = E2;
C2.left = F2;
C2.right = G2;

console.log(A2);

inOrder(A2);
```

## Search in Binary Search Tree (BST)

```javascript
// Search in Binary Search Tree (BST)
function searchBST(node, target) {
    if (!node) return false;

    if (node.val === target) return true;

    return target < node.val ? searchBST(node.left, target) : searchBST(node.right, target);
}

console.log(searchBST(A2, -1));
```
