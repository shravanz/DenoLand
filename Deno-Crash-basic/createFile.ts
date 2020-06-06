const encoder = new TextEncoder(); // mostly utf-8

// our message in a variable
const greetText = encoder.encode(
  "hello World\n My name is shravanZ nice to meet you",
);

// writing to a file using Deno
// use the Flag --allow-write while run the program
await Deno.writeFile("greeting.txt", greetText);
