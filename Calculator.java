public class Calculator {
    // Method for addition
    public static double add(double a, double b) {
        return a + b;
    }

    // Method for subtraction
    public static double subtract(double a, double b) {
        return a - b;
    }

    // Method for multiplication
    public static double multiply(double a, double b) {
        return a * b;
    }

    // Method for division
    public static double divide(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
    }

    // Method for power
    public static double power(double a, double b) {
        return Math.pow(a, b);
    }

    // Method for square root
    public static double squareRoot(double a) {
        if (a < 0) {
            throw new IllegalArgumentException("Cannot calculate square root of negative number.");
        }
        return Math.sqrt(a);
    }

    // Main method for testing
    public static void main(String[] args) {
        System.out.println("Addition: " + add(3, 5));
        System.out.println("Subtraction: " + subtract(10, 4));
        System.out.println("Multiplication: " + multiply(2, 8));
        System.out.println("Division: " + divide(20, 4));
        System.out.println("Power: " + power(2, 3));
        System.out.println("Square Root: " + squareRoot(16));
    }
}