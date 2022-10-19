

//swapping this below the other import breaks because of the circuler dep
// try it out with `tsc a.ts && node a.js`
import './c'
import {cThing} from './b' 

export const aThing = () => 'blah'

console.log(cThing)
