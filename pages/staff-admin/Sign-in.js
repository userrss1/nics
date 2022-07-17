import React,{useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import { getCookie, setCookies, removeCookies } from 'cookies-next';
import cookieCutter from 'cookie-cutter'
import axios from 'axios'
const cookies = new Cookies();
import bodyParser from "body-parser";
import { promisify } from "util";
import Cookies from 'cookies'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import { Router } from '@material-ui/icons'


const getBody = promisify(bodyParser.urlencoded({ extended: false }));

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res)
  let error_message = ''
  let status = false

  // await getBody('http://192.168.1.101:8081/api/login/');
  await getBody(req, res);



  var formdata = new URLSearchParams();
  formdata.append("username", `${process.env.API_USERNAME}`);
  formdata.append("password", `${process.env.API_PASSWORD}`);

  const BASE_URL = `${process.env.HOST}`

  const TOKEN_URL = BASE_URL+"/sa/auth/token/"

  const { data } = await axios(TOKEN_URL,
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' },
      mode: 'cors', method: 'POST', data: formdata
    });
  console.log("YOU ARE HERE=======")
  console.log(data)


  if (data.access_token) {
    status = true
    // cookies.set('access_token', data.access_token, { path: '/' });
    // cookies.set('access_token', data.access_token, {
    //     httpOnly: true // true by default
    // })

    setCookies('access_token', data.access_token, {
      req, res,
      httpOnly: true // true by default
    });

    // cookie.set('access_token', data.access_token);
  } else {
    err = data.detail
  }



  let token1 = null

  if (token1 = cookies.get('access_token')) {
    token1 = cookies.get('access_token')
  } else {
    var formdata = new URLSearchParams();
    formdata.append("username", "calogin");
    formdata.append("password", "calogin@123");


    const { data } = await axios(TOKEN_URL,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' },
        mode: 'cors', method: 'POST', data: formdata
      });

    console.log(data)

  }

  console.log(token1)


  if(req.method == 'POST'){

        console.log("IN POST METHOD===================================")
            console.log(req.body.email)
          const email = req.body.email
          const password = req.body.password

          var raw = JSON.stringify({
            "username": `${email}`,
            "password": `${password}`
          });



            if (email != '' && password != '') {
              const data = await fetch(BASE_URL+"/user_staff/login_staff/",
                { headers: { 'Content-Type': 'application/json', 'accept': 'application/json',  "Authorization": `Bearer ${token1}` }, mode: 'cors', method: 'POST', body: raw });
            
              const value = await data.json()

              console.log("=============YES LOGIN HERE=========")
              console.log(value.access_token)

              function parseJwt(token) {
                var base64Payload = token.split('.')[1];
                var payload = Buffer.from(base64Payload, 'base64');
                return JSON.parse(payload.toString());
              }
            
              if(value.access_token){
                let payload= parseJwt(value.access_token);
                setCookies('cid3', payload,  {
                  req, res,
                  httpOnly: true // true by default
                })
                console.log("payload:- ", payload);


                return {
                        redirect: {
                          destination: "Dashboard",
                          permanent: true,
                        },
              
                      }; 
              }else{
                error_message = value.message
                    return {
                      props: {
                        error_message
                  
                      }

                    }
              }

              
              
            
          
          }

        }

  return {

    props: {
      error_message
      


    }
  };
}




export default function Signin({token2, error_message}) {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  //  useEffect(() => {
  //       if(token2)
  //       {
  //          router.push('/staff-admin/Dashboard')
  //       }
  //  }, [])

  return (
    <>
    <Head>
    <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/staff-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/staff-admin/img/favicon.png"/>
  <title>
    Material Dashboard 2 by Creative Tim
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/staff-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/staff-admin/css/nucleo-svg.css" rel="stylesheet" />
  

  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
  
  <link id="pagestyle" href="/staff-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
    </Head>
      <body className="bg-gray-200">
 
 <main className="main-content  mt-0">
   <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'}}>
     <span className="mask bg-gradient-dark opacity-6"></span>
     <div className="container my-auto">
       <div className="row">
         <div className="col-lg-4 col-md-8 col-12 mx-auto">
           <div className="card z-index-0 fadeIn3 fadeInBottom">
             <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
               <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                 <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                 <div className="row mt-3">
                   <div className="col-2 text-center ms-auto">
                     <a className="btn btn-link px-3" >
                       <i className="fa fa-facebook text-white text-lg"></i>
                     </a>
                   </div>
                   <div className="col-2 text-center px-1">
                     <a className="btn btn-link px-3" >
                       <i className="fa fa-github text-white text-lg"></i>
                     </a>
                   </div>
                   <div className="col-2 text-center me-auto">
                     <a className="btn btn-link px-3" >
                       <i className="fa fa-google text-white text-lg"></i>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
             <div className="card-body">
               <form role="form" method="POST">
             
               <div className="input-group input-group-outline mb-3">
                       
                       <input type="email" name="email" id="exampleInputEmail" placeholder='Email-id' className="form-control" onChange={(e) => setEmail(e.target.value)} value={`${email}`} required />
                     </div>
                     <div className="input-group input-group-outline mb-3">
                      
                       <input type="password" name="password" id="exampleInputPassword" placeholder='Password' className="form-control" onChange={(e) => setPassword(e.target.value)} value={`${password}`} required />
                     </div>
                 <div className="text-center">
                   <button type="submit" className="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Login</button>
                 </div>
                 {error_message?(
                    <div style={{color:'#a94442',backgroundColor:'#f2dede',borderColor:'#ebccd1'}}>
                        <b style={{align:"center"}}>{error_message}</b>
                    </div>
                    ):''
                  }
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
     <footer className="footer position-absolute bottom-2 py-2 w-100">
       <div className="container">
         <div className="row align-items-center justify-content-lg-between">
           <div className="col-12 col-md-6 my-auto">
             <div className="copyright text-center text-sm text-white text-lg-start">
               © <script>
                  document.write(new Date().getFullYear())
                </script>,
               made with <i className="fa fa-heart" aria-hidden="true"></i> by
               <a href="https://www.placiddigital.com/#" className="font-weight-bold text-white" target="_blank" rel="noreferrer">Placid digital</a>
               for a better web.
             </div>
           </div>
           <div className="col-12 col-md-6">
             <ul className="nav nav-footer justify-content-center justify-content-lg-end">
               <li className="nav-item">
                 <a href="https://www.placiddigital.com/#m" className="nav-link text-white" target="_blank" rel="noreferrer">Placid digital</a>
               </li>
               <li className="nav-item">
                 <a href="https://www.placiddigital.com/#" className="nav-link text-white" target="_blank" rel="noreferrer">About Us</a>
               </li>
               <li className="nav-item">
                 <a href="https://www.placiddigital.com/#" className="nav-link text-white" target="_blank" rel="noreferrer">Blog</a>
               </li>
               <li className="nav-item">
                 <a href="https://www.placiddigital.com/#" className="nav-link pe-0 text-white" target="_blank" rel="noreferrer">License</a>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </footer>
   </div>
 </main>
 
 <Script type="jsx" src="/staff-admin/js/core/popper.min.js"></Script>
 <Script type="jsx" src="/staff-admin/js/core/bootstrap.min.js"></Script>
 <Script src="/staff-admin/js/plugins/perfect-scrollbar.min.js"></Script>
 <Script type="jsx" src="/staff-admin/js/plugins/smooth-scrollbar.min.js"></Script>
 <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.7/js/min/perfect-scrollbar.jquery.min.js"></Script>
 {/* <Script>
   var win = navigator.platform.indexOf('Win') > -1;
   if (win && document.querySelector('#sidenav-scrollbar')) {
     var options = {
       damping: '0.5'
     }
     Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
   }
 </Script> */}

<Script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></Script>

 <Script async defer src="https://buttons.github.io/buttons.js"></Script>
 
 <Script src="/staff-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
</body>
    </>
  )
}
