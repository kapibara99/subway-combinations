export const UPDATE_SEARCH_OPTIONS = "UPDATE_SEARCH_OPTIONS";
export const updateOptions = (array:SearchOption[]) => {
  return {
    type:"UPDATE_SEARCH_OPTIONS",
    payload:{
      SearchOption:array,
    }
  }
}

export const UPDATE_PRICE_OPTIONS = "UPDATE_PRICE_OPTIONS";
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

export const UPDATE_KCAL_OPTIONS = "UPDATE_KCAL_OPTIONS";
export const updateKcalOptions = (min:number,max:number) => {
  return {
    type:"UPDATE_KCAL_OPTIONS",
    payload:{
      KcalOption:{
        min:min,
        max:max
      },
    }
  }
}

export const UPDATE_CARBOHY_OPTIONS = "UPDATE_CARBOHY_OPTIONS";
export const updateCarbohyOptions = (min:number,max:number) => {
  return {
    type:"UPDATE_CARBOHY_OPTIONS",
    payload:{
      CarbohyOption:{
        min:min,
        max:max
      },
    }
  }
}
