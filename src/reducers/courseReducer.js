export default function courseReducer(stete = [], action){
  switch(action.type){
      case 'CREATE_COURSE':
          return [...stete,Object.assign({}, action.course)];
      default:
          return state;
  }
}
