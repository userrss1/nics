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
        <main className="main-content  mt-0">
          <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(https://img1.wsimg.com/isteam/stock/RrPRQ8J)' }}>
            <span className="mask bg-gradient-dark opacity-6"></span>
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
                        <div className="col-md-12">
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
                              <label className="form-check-label" htmlFor="myCheck">I agree the <a  className="text-dark font-weight-bolder">Terms and
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
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-body">
                      <div className="container">
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="/super-admin/img/advertisement.jpg" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                              <img src="/super-admin/img/advertisement1.jpg" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                              <img src="/super-admin/img/advertisement2.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-2 mx-auto my-auto">
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
                    style={{ width: '150px', height: '50px' }}>INCOME TAX</button>
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
                    style={{ width: '150px', height: '50px' }}>GST WEBSITE</button>
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
                    style={{ width: '150px', height: '50px' }}>CBIC WEBSITE</button>
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
                    style={{ width: '150px', height: '50px' }}>CBDT</button>
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
                    style={{ width: '150px', height: '50px' }}>ABOUT US</button>
                  <button type="button" className="btn bg-gradient-info mx-auto" data-bs-toggle="modal" data-bs-target="#myModal2"
                    style={{ width: '150px', height: '50px' }}>CONTACT US</button>
                  <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal"
                    data-bs-target="#myModal1" style={{ width: '150px', height: '50px' }}>COMPLAINTS & FEEDBACK</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Script src="/super-admin/js/core/popper.min.js"></Script>
  <Script src="/super-admin/js/core/bootstrap.min.js"></Script>
  <Script src="/super-admin/js/plugins/perfect-scrollbar.min.js"></Script>
  <Script src="/super-admin/js/plugins/smooth-scrollbar.min.js"></Script>
  <Script async defer src="https://buttons.github.io/buttons.js"></Script>

  <Script src="/super-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
  <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        {/* <Script>
   var win = navigator.platform.indexOf('Win') > -1;
   if (win && document.querySelector('#sidenav-scrollbar')) {
     var options = {
       damping: '0.5'
     }
     Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
   }
 </Script> */}

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

<Script type="text/text" src="./lander.js"></Script>

<Script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></Script>

<Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
  <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

        <div className="modal" id="myModal2" style={{ display: 'none' }} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title w3-text-pink">Contact-us</h4>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faWindowClose} style={{ fontSize: 100, color: "white", height: "15px", padding: '7px 3px' }} /></button>
              </div>
              <div className="modal-body">
                <div className="container w3-sans-serif">
                  <form className="w3-panel">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="name">Name:</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter name" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="contact">Mobile no.:</label>
                          <input type="tel" className="form-control" id="mobile" placeholder="Enter email" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="type here....."></textarea>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="myModal1" style={{ display: 'none' }} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title w3-text-pink">Complaint box</h4>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faWindowClose} style={{ fontSize: 100, color: "white", height: "15px", padding: '7px 3px' }} /></button>
              </div>
              <div className="modal-body">
                <div className="container w3-sans-serif">
                  <form className="w3-panel">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="name">Email-id:</label>
                          <input type="email" className="form-control" id="name" placeholder="Enter email" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="password">Password:</label>
                          <input type="password" className="form-control" id="email" placeholder="Enter password" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="password">Message:</label>
                          <textarea className="form-control" id="email" name="email"></textarea>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Generate ticket</button>
                      </div>
                    </div>
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