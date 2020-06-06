// Reading to a file using Deno
// use the Flag --allow-read while run the program
let file = await Deno.open("greeting.txt");
await Deno.copy(file, Deno.stdout);
file.close();
