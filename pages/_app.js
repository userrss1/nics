
import '../styles/globals.css'
import '../public/Acco.css'
import '../public/super-admin/css/nucleo-icons.css'
import '../public/super-admin/css/nucleo-svg.css'
import { useState } from 'react'
import Head from 'next/head'
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Router from 'next/router';
// import '../public/super-admin/css/material-dashboard.css'


function MyApp({ Component, pageProps }) {

  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });
  
  Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

  
  return(
  <>
     <Head>

     <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
       
          <title>   
              Material Dashboard 2 by Creative Tim
            </title>
     </Head>
     <Component {...pageProps} />
  
  </>
  
  )
  
}


export default MyApp
