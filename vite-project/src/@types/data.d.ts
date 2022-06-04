declare type Data = {

};
declare type Result = {
  id: string,
  name: string,
  status: string,
  output: Output[]
};
declare type Output = {
  name: string,
  link: string,
  size?: SizeElement[]
};
declare type SizeElement = {
  name?: string;
  price?:number,
  carbohydrate?:number,
  kcal?:number,
};

// export const initializeData:Data = {
//   url:"",
//   getQuery:"",
//   resultName
// }
