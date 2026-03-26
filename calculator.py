import math


def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Cannot divide by zero!"
    return x / y


def sin(x):
    return math.sin(math.radians(x))

def cos(x):
    return math.cos(math.radians(x))

def tan(x):
    return math.tan(math.radians(x))


def log(x, base):
    return math.log(x, base)


def mean(data):
    return sum(data) / len(data)


def calculator():
    print("Welcome to the Advanced Calculator\n")
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Sine")
    print("6. Cosine")
    print("7. Tangent")
    print("8. Logarithm")
    print("9. Mean")

    while True:
        choice = input("Enter choice (1-9): ")

        if choice in ['1', '2', '3', '4']:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
            if choice == '1':
                print(f'The result is: {add(num1, num2)}')
            elif choice == '2':
                print(f'The result is: {subtract(num1, num2)}')
            elif choice == '3':
                print(f'The result is: {multiply(num1, num2)}')
            elif choice == '4':
                print(f'The result is: {divide(num1, num2)}')

        elif choice in ['5', '6', '7']:
            angle = float(input("Enter angle in degrees: "))
            if choice == '5':
                print(f'The sine of {angle} degrees is: {sin(angle)}')
            elif choice == '6':
                print(f'The cosine of {angle} degrees is: {cos(angle)}')
            elif choice == '7':
                print(f'The tangent of {angle} degrees is: {tan(angle)}')

        elif choice == '8':
            num = float(input("Enter number: "))
            base = float(input("Enter base: "))
            print(f'The logarithm of {num} base {base} is: {log(num, base)}')

        elif choice == '9':
            data = list(map(float, input("Enter numbers separated by space: ").split()))
            print(f'The mean is: {mean(data)}')
        else:
            print("Invalid input")

        next_calculation = input("Do you want to perform another calculation? (yes/no): ")
        if next_calculation.lower() != 'yes':
            break


if __name__ == '__main__':
    calculator()