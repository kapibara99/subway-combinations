
export const SET_FIRST_OPTIONS = "SET_FIRST_OPTIONS";
export const setFirstOptions = (array:string[]) => {
  const result = array.map((v)=>{
    const obj = {
      name:v,
      flag:false,
    }
    return obj;
  })

  return {
    type:"SET_FIRST_OPTIONS",
    payload:{
      array:result,
    }
  }
}

export const UPDATE_OPTIONS = "UPDATE_OPTIONS";

export const updateOptions = (array:InitializeSearchOption[]) => {
  return {
    type:"UPDATE_OPTIONS",
    payload:{
      array:array
    }
  }
}

export const SET_OPTIONS = "SET_OPTIONS";

export const setOption = (obj:InitializeSearchOption) => {
  return {
    type:"SET_OPTIONS",
    payload:{
      name:obj.name,
      flag:obj.flag,
    }
  }
}