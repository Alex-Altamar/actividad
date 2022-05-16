import { App } from "./config";

async function main() {
    const app = new App(9000);
    await app.listen();
}

main();