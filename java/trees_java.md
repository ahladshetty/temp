## TreeNode Class Definition 

```java
import java.util.*;

// TreeNode class definition
class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    @Override
    public String toString() {
        return String.valueOf(val);
    }
}
```

## Binary Tree Example

```java
public class BinaryTree {
    public static void main(String[] args) {
        // Binary Trees
        //        1
        //     2    3
        //   4  5  10

        TreeNode A = new TreeNode(1);
        TreeNode B = new TreeNode(2);
        TreeNode C = new TreeNode(3);
        TreeNode D = new TreeNode(4);
        TreeNode E = new TreeNode(5);
        TreeNode F = new TreeNode(10);

        A.left = B;
        A.right = C;
        B.left = D;
        B.right = E;
        C.left = F;

        System.out.println(A);

        // Recursive Pre Order Traversal (DFS) Time: O(n), Space: O(n)
        System.out.println("Pre Order Traversal:");
        preOrder(A);

        // Recursive In Order Traversal (DFS) Time: O(n), Space: O(n)
        System.out.println("In Order Traversal:");
        inOrder(A);

        // Iterative Pre Order Traversal (DFS) Time: O(n), Space: O(n)
        System.out.println("Pre Order Iterative Traversal:");
        preOrderIterative(A);

        // Level Order Traversal (BFS) Time: O(n), Space: O(n)
        System.out.println("Level Order Traversal:");
        levelOrder(A);

        // Check if Value Exists (DFS) Time: O(n), Space: O(n)
        System.out.println("Search for value 11:");
        System.out.println(search(A, 11) ? "Value found!" : "Value not found.");
    }
}
```

## Tree Traversal Methods

```java
// Recursive Pre Order Traversal (DFS)
static void preOrder(TreeNode node) {
    if (node == null) return;

    System.out.println(node);
    preOrder(node.left);
    preOrder(node.right);
}

// Recursive In Order Traversal (DFS)
static void inOrder(TreeNode node) {
    if (node == null) return;

    inOrder(node.left);
    System.out.println(node);
    inOrder(node.right);
}

// Iterative Pre Order Traversal (DFS)
static void preOrderIterative(TreeNode node) {
    if (node == null) return;

    Stack<TreeNode> stk = new Stack<>();
    stk.push(node);

    while (!stk.isEmpty()) {
        node = stk.pop();
        System.out.println(node);
        if (node.right != null) stk.push(node.right);
        if (node.left != null) stk.push(node.left);
    }
}

// Level Order Traversal (BFS)
static void levelOrder(TreeNode node) {
    if (node == null) return;

    Queue<TreeNode> q = new LinkedList<>();
    q.add(node);

    while (!q.isEmpty()) {
        node = q.poll();
        System.out.println(node);
        if (node.left != null) q.add(node.left);
        if (node.right != null) q.add(node.right);
    }
}

// Check if Value Exists (DFS)
static boolean search(TreeNode node, int target) {
    if (node == null) return false;

    if (node.val == target) return true;

    return search(node.left, target) || search(node.right, target);
}
```

## Binary Search Trees (BST) Example

```java
public class BinaryTree {
    public static void main(String[] args) {
        // Binary Search Trees (BSTs)
        //       5
        //    1    8
        //  -1 3  7 9

        TreeNode A2 = new TreeNode(5);
        TreeNode B2 = new TreeNode(1);
        TreeNode C2 = new TreeNode(8);
        TreeNode D2 = new TreeNode(-1);
        TreeNode E2 = new TreeNode(3);
        TreeNode F2 = new TreeNode(7);
        TreeNode G2 = new TreeNode(9);

        A2.left = B2;
        A2.right = C2;
        B2.left = D2;
        B2.right = E2;
        C2.left = F2;
        C2.right = G2;

        System.out.println(A2);

        System.out.println("In Order Traversal of BST:");
        inOrder(A2);

        // Time: O(log n), Space: O(log n)
        System.out.println("Search for value -1 in BST:");
        System.out.println(searchBST(A2, -1) ? "Value found!" : "Value not found.");
    }
}
```

## Binary Search Tree Search Method

```java
// Search in Binary Search Tree (BST)
static boolean searchBST(TreeNode node, int target) {
    if (node == null) return false;

    if (node.val == target) return true;

    if (target < node.val) return searchBST(node.left, target);
    else return searchBST(node.right, target);
}
```
