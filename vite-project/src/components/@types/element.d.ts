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

declare namespace JSX {
  // JSX.Elementを定義
  interface IntrinsicElements {
      checkBoxOrigin:checkBoxType,
      marginSet:marginSetType
  }
}
