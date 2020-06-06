// use the Flag --allow-net while run the program
import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 3000 });
console.log("Server running on " + "http://localhost:3000/");
for await (const req of server) {
  req.respond({ body: "Hello world From Deno" });
}
