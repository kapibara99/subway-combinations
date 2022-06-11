declare interface checkBoxType {
  key:string,
  id : string,
  label : string,
  checked : boolean,
  onChange ? : any,
}
declare interface marginSetType {
  value : "large" | "middle" | "small" | Number;
}
export type menuStringType = "Sandwich" | "SetMenu" | "SideMenu" | "Require" | "SandwichOption";
declare namespace JSX {
  // JSX.Elementを定義
  interface IntrinsicElements {
      checkBoxOrigin:checkBoxType,
      marginSet:marginSetType
  }
}
const minDistance = 100;
const maxValue = 1000;
const minValue = 100;

declare interface SlideBar {
  minDistance : number,
  maxValue : number,
  minValue : number,
  unitName ? : string
}

