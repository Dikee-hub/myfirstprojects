class Calculator {
    // Basic Arithmetic Operations
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    // Trigonometric Operations (in degrees)
    sin(angleDegrees) {
        return Math.sin(this.toRadians(angleDegrees));
    }

    cos(angleDegrees) {
        return Math.cos(this.toRadians(angleDegrees));
    }

    tan(angleDegrees) {
        return Math.tan(this.toRadians(angleDegrees));
    }

    arcsin(value) {
        if (value < -1 || value > 1) {
            throw new Error("arcsin input must be between -1 and 1");
        }
        return this.toDegrees(Math.asin(value));
    }

    arccos(value) {
        if (value < -1 || value > 1) {
            throw new Error("arccos input must be between -1 and 1");
        }
        return this.toDegrees(Math.acos(value));
    }

    arctan(value) {
        return this.toDegrees(Math.atan(value));
    }

    // Logarithmic Operations
    log(value, base = 10) {
        if (value <= 0) {
            throw new Error("Logarithm input must be positive");
        }
        if (base <= 0 || base === 1) {
            throw new Error("Logarithm base must be positive and not equal to 1");
        }
        return Math.log(value) / Math.log(base);
    }

    ln(value) {
        if (value <= 0) {
            throw new Error("Logarithm input must be positive");
        }
        return Math.log(value);
    }

    // Power and Root Operations
    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    squareRoot(value) {
        if (value < 0) {
            throw new Error("Cannot take square root of negative number");
        }
        return Math.sqrt(value);
    }

    nthRoot(value, n) {
        if (n === 0) {
            throw new Error("Root degree cannot be zero");
        }
        if (value < 0 && n % 2 === 0) {
            throw new Error("Cannot take even root of negative number");
        }
        return Math.pow(value, 1 / n);
    }

    // Statistical Operations
    mean(numbers) {
        if (numbers.length === 0) {
            throw new Error("Cannot calculate mean of empty array");
        }
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    median(numbers) {
        if (numbers.length === 0) {
            throw new Error("Cannot calculate median of empty array");
        }
        const sorted = [...numbers].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    standardDeviation(numbers) {
        if (numbers.length < 2) {
            throw new Error("Need at least 2 numbers for standard deviation");
        }
        const avg = this.mean(numbers);
        const squareDiffs = numbers.map(x => Math.pow(x - avg, 2));
        const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / (numbers.length - 1);
        return Math.sqrt(avgSquareDiff);
    }

    variance(numbers) {
        if (numbers.length < 2) {
            throw new Error("Need at least 2 numbers for variance");
        }
        const avg = this.mean(numbers);
        const squareDiffs = numbers.map(x => Math.pow(x - avg, 2));
        return squareDiffs.reduce((a, b) => a + b, 0) / (numbers.length - 1);
    }

    // Utility Operations
    factorial(n) {
        if (n < 0) {
            throw new Error("Factorial not defined for negative numbers");
        }
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    absoluteValue(value) {
        return Math.abs(value);
    }

    percentage(value, percent) {
        return (value * percent) / 100;
    }

    // Helper functions
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
}

// Node.js export
if (typeof module !== "undefined" && module.exports) {
    module.exports = Calculator;
}