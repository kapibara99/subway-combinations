import { useState , useEffect } from 'react'

//components
import { ResultCard } from "./components/resultCard/main";
import { Header } from "./components/Header/header";

//axios
import axios , { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
const dataSRC = "../data/output.json"
const options: AxiosRequestConfig = {
  url: dataSRC,
  method: "GET",
};

// style
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#9ccc65',
      },
      secondary: {
        main: '#9fa8da',
      },
    },
});

function App() {
  const [data , setData] = useState<Data[]>([]);
  useEffect(() => {
    axios(options)
    .then((res: AxiosResponse<Data[]>) => {
      const { data, status } = res;
      //やりたいことをやる
      if(status === 200) setData(data);
      console.log("get data",data);
    })
    .catch((e: AxiosError<{ error: string }>) => {
      // エラー処理
      console.log(e.message);
    });
  },[]);



  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className='main'>
        {data.map((item:Data , index:number)=>(
          <p key={index}>{item.url}</p>
        ))}
      </div>
      <ResultCard />
    </ThemeProvider>
  )
}

export default App
