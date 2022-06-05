


export const UPDATE_SEARCH_OPTIONS = "UPDATE_SEARCH_OPTIONS";
export const UPDATE_PRICE_OPTIONS = "UPDATE_PRICE_OPTIONS";


export const updateOptions = (array:SearchOption[]) => {
  return {
    type:"UPDATE_SEARCH_OPTIONS",
    payload:{
      SearchOption:array,
    }
  }
}

export const updatePriceOptions = (min:number,max:number) => {
  return {
    type:"UPDATE_PRICE_OPTIONS",
    payload:{
      PriceOption:{
        min:min,
        max:max
      },
    }
  }
}
