import {Action} from '@ngrx/store'
interface CustomAction {
  type:string,
  payload:any
}
let initialeState ={
  n:0
}

export function counterReducer (state=initialeState,action:Action ) {

  switch (action.type) {
    case 'increment' : return {
      n:state.n+1
    }
    case 'decrement' : return {
      n:state.n-1
    }
    default : return       state


  }

}
