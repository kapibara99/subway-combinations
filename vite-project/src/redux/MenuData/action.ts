export const UPDATE_DATA = "UPDATE_DATA";

export const updateDataAction = (dataState:InitializeMenuData) => {
  return {
    type:"UPDATE_DATA",
    payload:{
      ...dataState,
      updateTime:new Date(),
    }
  }
}