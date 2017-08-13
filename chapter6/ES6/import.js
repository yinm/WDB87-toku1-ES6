import { foo, bar, Baz } from "./module";
console.log(foo);
bar();
const baz = new Baz();
console.log(baz);

import { foo as poo } from "./module";
console.log(poo);

import * as module from "./module";
console.log(module.foo);
