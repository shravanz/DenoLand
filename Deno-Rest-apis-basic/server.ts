// * use the Flag --allow-net while run the program *//
// Importing Oak frame-work
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts"; // no curly braces becuase router is exported by default
// initiate intance of Application
const app = new Application();

// Router middleware
app.use(router.routes());
app.use(router.allowedMethods()); // GET,POST,PUT etc are allowed

console.log(`Server Running on port 5000`);
await app.listen({ port: 5000 });
//
