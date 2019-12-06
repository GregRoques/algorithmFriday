const initialInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,19,5,23,2,13,23,27,1,10,27,31,2,6,31,35,1,9,35,39,2,10,39,43,1,43,9,47,1,47,9,51,2,10,51,55,1,55,9,59,1,59,5,63,1,63,6,67,2,6,67,71,2,10,71,75,1,75,5,79,1,9,79,83,2,83,10,87,1,87,6,91,1,13,91,95,2,10,95,99,1,99,6,103,2,13,103,107,1,107,2,111,1,111,9,0,99,2,14,0,0];

function part1(replacement1, replacement2) {
    const input = initialInput.slice();
    input[1] = replacement1;
    input[2] = replacement2;
  
    let position = 0;
  
    while (input[position] !== 99) {
      const firstPosition1 = input[position + 1];
      const firstPosition2 = input[position + 2];
      const secondPosition1 = input[firstPosition1];
      const secondPosition2 = input[firstPosition2];
  
      const outputIndex = input[position + 3];
      const output = input[position] === 1 ? secondPosition1 + secondPosition2 : secondPosition1 * secondPosition2;
  
      input[outputIndex] = output;
      position += 4;
    }
  
    return input[0];
  }
  
  console.log(part1(12, 2))

  function part2(expected) {
    for (let noun = 0; noun < 100; noun++) {
      for (let verb = 0; verb < 100; verb++) {
        const result = part1(noun, verb);
  
        if (result === expected) {
          return 100 * noun + verb;
        }
      }
    }
  }
  
  console.log(part2(19690720))