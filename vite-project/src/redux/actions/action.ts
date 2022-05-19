//返り値でtypeを返すようにします

export function changeCheckedFunction(currentState:boolean,name:string) {
  return {
    type: "setCheckBox",
    currentState:{
      stateName : name,
      state:currentState
    }
  };
}