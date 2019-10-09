const createMultiplyTable = require('../index');

describe('Case 1', () => {

    const firstNumber = 4; 
    const lastNumber = 2;
  
    it('Should return null if firstNumber is greater than lastNumber', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(null);
    });
});

describe('Case 2', () => {

    const firstNumber = 2; 
    const lastNumber = 4;
    const answer= '2x2=4  \n2x3=6  3x3=9  \n2x4=8  3x4=12 4x4=16 \n';
  
    it('Should return String of multiply table', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(answer);
    });
});

describe('Case 3', () => {

    const firstNumber = 2; 
    const lastNumber = 1001;
    const answer= null;
  
    it('Should return null if lastNumber is out of range', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(answer);
    });
});

describe('Case 4', () => {

    const firstNumber = -2; 
    const lastNumber = 2;
    const answer= null;
  
    it('Should return null when firstNumber is out of range', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(answer);
    });
});

describe('Case 5', () => {

    const firstNumber = 4; 
    const lastNumber = 4;
    const answer= '4x4=16 \n';
  
    it('Should return String of multiply table when firstNumber and lastNumber is equal', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(answer);
    });
});

describe('Case 6', () => {

    const firstNumber = 0; 
    const lastNumber = 4;
    const answer= null;
  
    it('Should return null when one value is 0', () => {
  
      const result = createMultiplyTable(firstNumber, lastNumber);
  
      expect(result).toBe(answer);
    });
});