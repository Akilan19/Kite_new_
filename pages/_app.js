import '../styles/globals.css'
import { Button, ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig" 


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  useEffect(() => {
      const handleStart = (url) => {
        url !== router.pathname ? setLoading(true) : setLoading(false);
      };
      const handleComplete = (url) => setLoading(false);
  
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }, [router]);
  
    return (
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button style={{color : 'black',position: 'absolute',marginLeft:'1100px',marginTop:'5px' ,height: '50px',width: '140px',backgroundColor: 'aliceblue',borderRadius:'30px'}} onClick={toggleTheme}>Switch Theme</button>
            {loading && <Loading loading={loading} />}  
            {!loading &&
            <ChakraProvider>
            <Component {...pageProps} />
            </ChakraProvider>}
      </ThemeProvider>
    );
  }
  
  export default MyApp;
  