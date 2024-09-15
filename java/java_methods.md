### Java Cheat Sheet

### ArrayList Methods

```java
// Create ArrayList
ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));

// Add to end
list.add("D");

// Add at index
list.add(1, "X");

// Get element
String item = list.get(2);

// Set element
list.set(2, "Y");

// Remove by index
list.remove(3);

// Remove by value
list.remove("X");

// Contains element
boolean contains = list.contains("D");

// List size
int size = list.size();

// Clear list
list.clear();

// Convert to array
Object[] array = list.toArray();

// Check if empty
boolean isEmpty = list.isEmpty();

// Sort list
Collections.sort(list);

// Reverse list
Collections.reverse(list);

// Iterate
for (String element : list) {
    System.out.println(element);
}
```

### ArrayDeque Methods

```java
// Create ArrayDeque
ArrayDeque<String> deque = new ArrayDeque<>(Arrays.asList("A", "B", "C"));

// Add to end
deque.add("D");

// Add to front
deque.addFirst("Z");

// Get first element
String first = deque.getFirst();

// Get last element
String last = deque.getLast();

// Remove first element
deque.removeFirst();

// Remove last element
deque.removeLast();

// Peek first (no removal)
String peekFirst = deque.peekFirst();

// Peek last (no removal)
String peekLast = deque.peekLast();

// Check if contains
boolean contains = deque.contains("B");

// Size of deque
int size = deque.size();

// Clear deque
deque.clear();

// Iterate
for (String element : deque) {
    System.out.println(element);
}
```

### HashSet Methods

```java
// Create HashSet
HashSet<String> set = new HashSet<>(Arrays.asList("A", "B", "C"));

// Add element
set.add("D");

// Remove element
set.remove("B");

// Contains element
boolean contains = set.contains("C");

// Set size
int size = set.size();

// Clear set
set.clear();

// Convert to array
Object[] array = set.toArray();

// Check if empty
boolean isEmpty = set.isEmpty();

// Iterate
for (String element : set) {
    System.out.println(element);
}
```

### HashMap Methods

```java
// Create HashMap
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

// Add/update entry
map.put("C", 3);

// Get value
int value = map.get("A");

// Remove entry
map.remove("B");

// Contains key
boolean containsKey = map.containsKey("A");

// Contains value
boolean containsValue = map.containsValue(3);

// Map size
int size = map.size();

// Clear map
map.clear();

// Get keys
Set<String> keys = map.keySet();

// Get values
Collection<Integer> values = map.values();

// Check if empty
boolean isEmpty = map.isEmpty();

// Iterate entries
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Iterate keys
for (String key : map.keySet()) {
    System.out.println("Key: " + key);
}

// Iterate values
for (Integer value : map.values()) {
    System.out.println("Value: " + value);
}
```

### StringBuilder Methods

```java
// Create StringBuilder
StringBuilder sb = new StringBuilder("Hello");

// Append text
sb.append(" World");

// Insert text
sb.insert(6, "Beautiful ");

// Reverse
sb.reverse();

// Delete range
sb.delete(0, 6);

// Replace range
sb.replace(0, 9, "Hi");

// Get char at index
char ch = sb.charAt(1);

// Set char at index
sb.setCharAt(0, 'h');

// Length
int length = sb.length();

// Capacity
int capacity = sb.capacity();

// Ensure capacity
sb.ensureCapacity(50);

// Trim capacity
sb.trimToSize();

// Convert to String
String result = sb.toString();
```

### Other Methods

```java
// Convert int to char
char asciiChar = (char) 65; // 'A'

// Convert char to int
int asciiCode = (int) 'A'; // 65
```