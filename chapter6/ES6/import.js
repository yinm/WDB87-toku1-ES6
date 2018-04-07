import {foo, bar, Baz} from './module'
console.log(foo)
bar()
const baz = new Baz()
baz.baz()

import {foo as poo} from './module'
console.log(poo)

import * as module from './module'
console.log(module.foo)
module.bar()
const baz2 = new module.Baz()
baz2.baz()