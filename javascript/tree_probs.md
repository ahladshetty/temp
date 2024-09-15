# Binary Tree Quick Reference

## `TreeNode` Definitions

### JavaScript `TreeNode` Definition

```javascript
/**
 * Definition for a binary tree node.
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child node.
 * @param {TreeNode|null} right - The right child node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
```

Here's the revised quick reference with Java definitions removed and JavaScript solutions added:

# Binary Tree Quick Reference

## JavaScript `TreeNode` Definition

```javascript
/**
 * Definition for a binary tree node.
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child node.
 * @param {TreeNode|null} right - The right child node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
```

## JavaScript Solutions

### Invert a Binary Tree

```javascript
function invertTree(root) {
    if (root === null) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}
```

### Maximum Depth of a Binary Tree

```javascript
function maxDepth(root) {
    if (root === null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left, right);
}
```

### Check if a Binary Tree is Balanced

```javascript
function isBalanced(root) {
    let flag = true;

    function height(node) {
        if (node === null) return 0;

        let left = height(node.left);
        let right = height(node.right);

        if (Math.abs(left - right) > 1) {
            flag = false;
            return 0;
        }
        return 1 + Math.max(left, right);
    }

    height(root);
    return flag;
}
```

### Find Minimum and Maximum in a Binary Search Tree (BST)

```javascript
function findMinAndMax(root) {
    if (root === null) return { min: null, max: null };

    let minNode = root;
    let maxNode = root;

    // Find the minimum by going left
    while (minNode.left !== null) {
        minNode = minNode.left;
    }

    // Find the maximum by going right
    while (maxNode.right !== null) {
        maxNode = maxNode.right;
    }

    return { min: minNode.val, max: maxNode.val };
}

// Example usage:

// Creating a BST
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(10);

// Find min and max in the BST
let result = findMinAndMax(root);
console.log(`Minimum value: ${result.min}`);
console.log(`Maximum value: ${result.max}`);
```

### Simple and Easy Binary Tree Problems to be Included:

* Find the Lowest Common Ancestor (LCA)
* Symmetric Tree
* Convert Sorted Array to Binary Search Tree (BST)
* Diameter of Binary Tree
* Count the Number of Nodes
* Sum of All Nodes
* Maximum Path Sum
* Check if a Tree is Subtree of Another Tree