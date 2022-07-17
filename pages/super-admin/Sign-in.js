/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWindowClose
}
from "@fortawesome/free-solid-svg-icons";
import FormData from 'form-data';
import React, { useState, useEffect } from 'react'
import { getCookie, setCookies, removeCookies } from 'cookies-next';
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
// import Cookies from 'universal-cookie';
const cookies = new Cookies();
import bodyParser from "body-parser";
import { promisify } from "util";
import Cookies from 'cookies'





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
              const data = await fetch(BASE_URL+"/sa/super_admin_login/",
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
                setCookies('cid2', payload,  {
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










export default function Signin({error_message}) {

  

  
    console.log("Output on Console")
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const router = useRouter();
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     console.log(email, password)
//   }
//   async function logins() {

//     console.log(getCookie('access_token'))

//     const token1 =  getCookie('access_token');
   
//     const email1 = document.getElementById("exampleInputEmail").value;
//     const password1 = document.getElementById("exampleInputPassword").value;
//    var raw = JSON.stringify({
//   "username": `${email1}`,
//   "password": `${password1}`
// });
//     try {
//       if (email1 != '' && password1 != '') {
//         const data = await fetch('http://192.168.1.101:8000/sa/super_admin_login/',
//           { headers: { 'Content-Type': 'application/json', 'accept': 'application/json',  "Authorization": `Bearer ${token1}` }, mode: 'cors', method: 'POST', body: raw });
//         console.log(await data.json());
//         console.log("Input Field")
//         const value = await data.json()
//         // localStorage.setItem('user-info',JSON.stringify(data))

//         console.log("Hi" + value)
//         router.push("/super-admin/Dashboard")
        
//       } else {
//         alert("All fields required")
//       }
//     } catch (error) {
//       console.log(error.message)
//       // if (err.response) {
//       //    console.log(err.response.status)
//       //    console.log(err.response.data)
//       // }
//     }
//   }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="76x76" href="/super-admin/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/super-admin/img/favicon.png" />
        <title>
          Sign in        </title>
      
      </Head>
     

    
      <body className="bg-gray-200">

  <main className="main-content mt-0">
    <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(/ca-admin/img/login.jpg)' }}>
      <span className="mask bg-gradient-dark opacity-8"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 mx-auto my-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                  <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h5>
                </div>
              </div>
              <div className="row">
                <div className="card-body w3-margin">
                  <div className="col-LG-12">
                  <form role="form" className="needs-validation" method='POST' >
                            
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Email-id</label>
                              <input type="email" name="email"  id="exampleInputEmail" className="form-control" onChange={(e) => setEmail(e.target.value)} value={`${email}`} required />
                            </div>
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Password</label>
                              <input type="password" name="password"  id="exampleInputPassword" className="form-control" onChange={(e) => setPassword(e.target.value)} value={`${password}`} required />
                            </div>
                            <div className="form-check form-check-info text-start ps-0">
                              <input className="forminput" type="checkbox" id="myCheck" name="remember" required />
                              <label className="form-check-label" htmlhtmlFor="myCheck">I agree the <a  className="text-dark font-weight-bolder">Terms and
                                Conditions</a></label>
                              <div className="valid-feedback">Valid.</div>
                              <div className="invalid-feedback">Check this checkbox to continue.</div>
                            </div>
                            <div className=" mt-4">
                              <button type="submit" className="btn btn-primary">Login</button>
                              <a href="#" className="mx-4"><b>Forgot Password?</b></a>
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
        </div>
 </div>
 </div>
  </main>

  <script src="/super-admin/js/core/popper.min.js"></script>
  <script src="/super-admin/js/core/bootstrap.min.js"></script>
  <script src="/super-admin/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="/super-admin/js/plugins/smooth-scrollbar.min.js"></script>
  {/* <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script> */}

  <script async defer src="https://buttons.github.io/buttons.js"></script>

  <script src="/ca-admin/js/material-dashboard.min.js?v=3.0.0"></script>

 
  <div className="modal" id="myModal1">
    <div className="modal-dialog">
      <div className="modal-content">

       
        <div className="modal-header">
          <h4 className="modal-title w3-text-pink">Complaint box</h4>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><i className="fa fa-window-close"
                aria-hidden="true"></i>
            </button>
        </div>
        
        <div className="modal-body">
          <div className="container w3-sans-serif">
            <form action="/action_page.php" className="needs-validation">
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Email-id:</label>
                <input type="email" className="form-control" id="pwd" placeholder="Enter email-id" name="email" required/>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password." name="password" required/>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Message:</label>
                <textarea className="form-control" id="pwd" placeholder="Write something here..." name="message" required></textarea>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
             
              <button type="submit" className="btn btn-primary">Generate Ticket</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="modal" id="myModal2">
    <div className="modal-dialog">
      <div className="modal-content">

       
        <div className="modal-header">
          <h4 className="modal-title w3-text-pink">Contact-us</h4>
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><i className="fa fa-window-close" aria-hidden="true"></i></button>
        </div>
     
        <div className="modal-body">
          <div className="container w3-sans-serif">
          <form role="form" className="needs-validation" method='POST' >
                            
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Email-id</label>
                              <input type="email" name="email"  id="exampleInputEmail" className="form-control" onChange={(e) => setEmail(e.target.value)} value={`${email}`} required />
                            </div>
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Password</label>
                              <input type="password" name="password"  id="exampleInputPassword" className="form-control" onChange={(e) => setPassword(e.target.value)} value={`${password}`} required />
                            </div>
                            <div className="form-check form-check-info text-start ps-0">
                              <input className="forminput" type="checkbox" id="myCheck" name="remember" required />
                              <label className="form-check-label" htmlhtmlFor="myCheck">I agree the <a  className="text-dark font-weight-bolder">Terms and
                                Conditions</a></label>
                              <div className="valid-feedback">Valid.</div>
                              <div className="invalid-feedback">Check this checkbox to continue.</div>
                            </div>
                            <div className=" mt-4">
                              <button type="submit" className="btn btn-primary">Login</button>
                              <a href="#" className="mx-4"><b>Forgot Password?</b></a>
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
 
</body>




    </>
  )
}