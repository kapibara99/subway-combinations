// common react lib
import { useState , useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

// page layouts
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { NotFound } from "./pages/NotFound";

//components
// import { ResultCard } from "./components/resultCard/resultCard";
import { Header } from "./common/Header/header";
import { Footer } from "./common/Footer/footer";


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
        main: '#FFC20D',
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result data={data} setData={setData}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
