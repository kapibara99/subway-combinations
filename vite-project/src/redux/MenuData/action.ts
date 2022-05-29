export const UPDATE_DATA = "UPDATE_DATA";

export const updateDataAction = (dataState:Data[]) => {
  return {
    type:"UPDATE_DATA",
    payload:{
      updateData:dataState,
      time:new Date(),
    }
  }
}