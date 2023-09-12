const generateBug = (numerator, denominator) => {
    const a = numerator; 
    const b = denominator;

    a = b;
    b = 1;
    return a / b;
};

module.exports = generateBug;