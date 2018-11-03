import {init} from 'anujs/dist/Rematch'
import {count} from "./pagemodel/count"
import {switchcase} from './pagemodel/switch'
// import { createLogger } from 'redux-logger'
// const logger = createLogger({
//     // ...options
// });
const initObj = {
    redux: {
        middlewares: []
    },
    models: {
        count: count,
        switchcase:switchcase
    }
}
export default function store() {
   return init(initObj)
}