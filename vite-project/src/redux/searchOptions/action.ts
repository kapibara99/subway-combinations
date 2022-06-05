


export const UPDATE_OPTIONS = "UPDATE_OPTIONS";

export const updateOptions = (array:SearchOption[]) => {
  return {
    type:"UPDATE_OPTIONS",
    payload:{
      SearchOption:array,
    }
  }
}
