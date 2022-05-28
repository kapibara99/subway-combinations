
export const SET_OPTIONS = "SET_OPTIONS";

export const setOptions = (dataState:Data[]) => {
  return {
    type:"SET_OPTIONS",
    payload:{
      updateData:dataState,
      time:new Date(),
    }
  }
}