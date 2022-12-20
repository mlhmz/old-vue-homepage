import PocketBase from "pocketbase";

console.log("PocketBase Instance: " + import.meta.env.VITE_POCKETBASE_URL)

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

export default pb;
