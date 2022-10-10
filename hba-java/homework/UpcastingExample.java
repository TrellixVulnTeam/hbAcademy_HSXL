class Parent {
    void PrintData() {
        System.out.println("method of parent class");
    }
}

class Child extends Parent {
    void PrintData() {
        System.out.println("method of child class");
    }
}

// Testing our classes

class UpcastingExample {
    public static void main(String args[]) {

        // Here we are Upcasting!
        Parent obj1 = (Parent) new Child();
        Parent obj2 = (Parent) new Child();
        obj1.PrintData();
        obj2.PrintData();
    }
}