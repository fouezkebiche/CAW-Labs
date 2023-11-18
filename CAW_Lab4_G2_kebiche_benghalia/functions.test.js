const functions = require('./functions');


// Test the 'first' function
describe("Array Functions tests", () => {
  test('return an empty array if input array is null or n is less than or equal to 0', () => {
    // arrange and act
    const result1 = functions.first(null, 2);
    const result2 = functions.first([1, 2, 3], 0);

    // assert
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  test('return the first element of the array if n is null', () => {
    // arrange and act
    const result = functions.first([5, 6, 7]);

    // assert
    expect(result).toBe(5);
  });

  test('return the first n elements of the array', () => {
    // arrange and act
    const result = functions.first([10, 20, 30, 40, 50], 3);

    // assert
    expect(result).toEqual([10, 20, 30]); 
  });
});

// Test the 'last' function
describe("Array Functions tests", () => {
  test('return an empty array if input array is null', () => {
    // arrange and act
    const result = functions.last(null, 2);

    // assert
    expect(result).toEqual([]);
  });

  test('return the last element of the array if n is null', () => {
    // arrange and act
    const result = functions.last([1, 2, 3, 4]);

    // assert
    expect(result).toBe(4); 
  });

  test('return the last n elements of the array', () => {
    // arrange and act
    const result = functions.last([10, 20, 30, 40, 50], 3);

    // assert
    expect(result).toEqual([30, 40, 50]); 
  });
});

// Test the 'concatenate' function
describe('concatenate', () => {
  
  test('concatenates all the elements of an array of strings using joinEmpty', () => {
    const array = ["Red", "Green", "White", "Black"];
    const result = functions.concatenate(array);
    expect(result.joinEmpty()).toBe("Red,Green,White,Black");
  });

  test('concatenates all the elements of an array of strings using join', () => {
    const array = ["Red", "Green", "White", "Black"];
    const result = functions.concatenate(array);
    expect(result.join()).toBe("RedGreenWhiteBlack");
  });
});

// Test the 'chunk' function
describe("Array Functions tests", () => {
  test('should chunk the array into subarrays of the specified size', () => {
    // arrange
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkSize = 3;

    // act
    const result = functions.chunk(inputArray, chunkSize); 

    // assert
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]); 
  });

  test('should handle an empty array', () => {
    // arrange
    const inputArray = [];
    const chunkSize = 2;

    // act
    const result = functions.chunk(inputArray, chunkSize); 

    // assert
    expect(result).toEqual([]); 
  });

  test('should handle a chunk size larger than the array length', () => {
    // arrange
    const inputArray = [1, 2, 3, 4, 5];
    const chunkSize = 10;

    // act
    const result = functions.chunk(inputArray, chunkSize); 

    // assert
    expect(result).toEqual([[1, 2, 3, 4, 5]]); 
  });
});