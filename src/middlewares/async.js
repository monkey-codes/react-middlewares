export default function({dispatch}) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      //no payload or not a promise
      return next(action);
    }
    action.payload.then(response => dispatch( {...action, payload: response} ) );
  }
}
