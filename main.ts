import { Application, Router} from "oak";
import { handleUserRequest } from "./contact.ts";

const router = new Router();
const app = new Application();

router.get("/", (context) => {
    context.response.body = Deno.readTextFileSync("./static/views/index.html");
});
router.get("/:view.html", (context) => {
    const view = context.params.view;
    if (view) {
        try {
            context.response.body = Deno.readTextFileSync(`./static/views/${view}.html`);
            context.response.headers.set("Content-Type", "text/html");
        } catch (error) {
            console.error(`Error reading view file: ${error}`);
            context.response.status = 404;
            context.response.body = "View not found";
        }
    } else {
        context.response.status = 404;
        context.response.body = "View not provided";
    }
});
router.get("/papers/:paper.pdf", (context) => {
    const paper = context.params.paper;
    if (paper) {
        try {
            context.response.body = Deno.readFileSync(`./static/papers/${paper}.pdf`);
            context.response.headers.set("Content-Type", "application/pdf");
        } catch (error) {
            console.error(`Error reading paper file: ${error}`);
            context.response.status = 404;
            context.response.body = "Paper not found";
        }
    } else {
        context.response.status = 404;
        context.response.body = "Paper not provided";
    }
})
router.post('/contact', async (context) => {
  try {
    const form = await context.request.body.form();
    await handleUserRequest(form);
    context.response.redirect('/');
  } catch (error) {
    console.error('Error processing request:', error);
    context.response.status = 500;
    context.response.body = 'Internal Server Error';
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context, next) => {
    const root = "./static";
    try { await context.send({ root }); } catch { await next(); }
});

app.listen({ port: 8000 });
console.log("Server is running on http://localhost:8000");