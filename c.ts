import {aThing} from './a'
import {bThing} from './b'

export const cThing = bThing()

export const otherThing = () => aThing();