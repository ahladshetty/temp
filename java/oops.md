## OOPS
- Encapsulation hides the internal state of an object and provides access through public methods.

- Inheritance allows a subclass to inherit attributes and methods from a superclass.

- Polymorphism lets methods in different classes be invoked through the same interface.

- Abstraction hides complex implementation details and shows only the necessary features.

### The four main pillars of OOP are:

1. **Encapsulation**:
   - **Definition**: Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of an object's components, which can prevent the accidental modification of data.

   - **Benefit**: Increases modularity and protects the integrity of the object's state by exposing only necessary parts of the object through public methods.

2. **Inheritance**:
   - **Definition**: Inheritance is the mechanism by which one class (child/subclass) can inherit properties and methods from another class (parent/superclass). This allows for code reuse and the creation of hierarchical relationships between classes.

   - **Benefit**: Promotes code reuse and establishes a natural hierarchy, reducing redundancy.

3. **Polymorphism**:
   - **Definition**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It typically refers to the ability of different objects to respond to the same method call in a way that is appropriate to their type.
   
   - **Benefit**: Increases flexibility and maintainability by allowing the same interface to be used for different underlying forms (data types).

4. **Abstraction**:
   - **Definition**: Abstraction is the concept of hiding the complex implementation details of an object and exposing only the necessary and relevant aspects. It allows the creation of simpler, high-level interfaces.
   
   - **Benefit**: Simplifies complexity by allowing the user to interact with the object at a high level, without needing to understand the intricate details of its implementation.

### examples for each pillar of OOP

### 1. **Encapsulation**

```java
// Define a class with encapsulated fields
class Person {
    private String name;  // Private field (encapsulation)
    private int age;       // Private field (encapsulation)

    // Public method to set name
    public void setName(String name) {
        this.name = name;
    }

    // Public method to get name
    public String getName() {
        return name;
    }

    // Public method to set age
    public void setAge(int age) {
        this.age = age;
    }

    // Public method to get age
    public int getAge() {
        return age;
    }
}

public class Test {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John");
        person.setAge(30);
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}
```

### 2. **Inheritance**

```java
// Base class
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

// Subclass inheriting from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks");
    }
}

public class Test {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // Inherited method
        myDog.bark(); // Subclass method
    }
}
```

### 3. **Polymorphism**

```java
// Base class
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass overriding the sound method
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal myAnimal = new Dog(); // Runtime polymorphism
        myAnimal.sound();  // Calls overridden method in Dog class
    }
}
```

### 4. **Abstraction**

```java
// Abstract class
abstract class Shape {
    abstract void draw(); // Abstract method

    // Non-abstract method
    void display() {
        System.out.println("Displaying shape");
    }
}

// Concrete class extending abstract class
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Test {
    public static void main(String[] args) {
        Shape shape = new Circle(); // Abstract class reference to concrete class
        shape.draw();   // Calls the concrete implementation of draw()
        shape.display(); // Calls the non-abstract method
    }
}
```

