// JACKSON: DO NOT TOUCH

import { Application, Router} from "oak";
const router = new Router();
const app = new Application();
router.get("/", (context) => {
    context.response.body = Deno.readTextFileSync("./static/views/index.html");
});
router.get("/:view.html", (context) => {
    const view = context.params.view;
    if (view) {
        context.response.body = Deno.readTextFileSync(`./static/views/${view}.html`);
    } else {
        context.response.status = 404;
        context.response.body = "View not found";
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