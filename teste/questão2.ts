let array: Array<number> = [];

array[0] = 0;
array[1] = 1;
array[2] = 0;
array[3] = 0;

function Fibonacci(num: number) {
  array[3] = num;

  for (let i = 0; i < array[3]; i++) {
    array[2] = array[0] + array[1];

    if (array[2] === array[3]) {
      console.log(`${array[3]} pertence a sequência.`);
    }
    array[0] = array[1];
    array[1] = array[2];
  }

  console.log("Não percente a sequência");
}

Fibonacci(55);
