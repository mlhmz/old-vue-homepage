import PocketBase from "pocketbase";
import { InjectionKey } from "vue";

console.log("PocketBase Instance: " + import.meta.env.VITE_POCKETBASE_URL)

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

export const $pb = Symbol() as InjectionKey<PocketBase>;

export default pb;
