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
              const data = await fetch(BASE_URL+"/user/login/",
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
                setCookies('cid', payload.sub.id,  {
                  req, res, maxAge: 60 * 1 * 24,
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

        
  let token2 = null
 
  if (cookies.get('cid')){
       token2 = cookies.get('cid')
  }else{
       token2 = null
  }

  return {

    props: {
      error_message, token2
      


    }
  };
}





export default function Signin({error_message, token2}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

   useEffect(() => {
        if(token2)
        {
           router.push('/ca-admin/Dashboard')
        }
   }, [])




  return (
    <>
    <Head>
    <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/ca-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/ca-admin/img/favicon.png"/>
  <title>
    Material Dashboard 2 by Creative Tim
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/ca-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/ca-admin/assets/css/nucleo-svg.css" rel="stylesheet" />
  
  
  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

  <link id="pagestyle" href="/ca-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

    </Head>
      <body className="bg-gray-200">
 
 <main className="main-content  mt-0">
   <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url(/ca-admin/img/login.jpg)'}}>
   <span className="mask bg-gradient-dark opacity-6"></span>
     <div className="container my-auto">
       <div className="row">
       <div className="col-sm-12 col-md-4 col-lg-4 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                  <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h5>

                </div>
              </div>
              <div className="row">
                <div className="card-body w3-margin">
                  <div className="col-md-12">
                    <form role="form" method='POST' className="needs-validation" >
                    <div className="input-group input-group-outline mb-3">
                       
                        <input type="email" name="email" id="exampleInputEmail" placeholder='Email-id' className="form-control" onChange={(e) => setEmail(e.target.value)} value={`${email}`} required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                       
                        <input type="password" name="password" id="exampleInputPassword" placeholder='Password' className="form-control" onChange={(e) => setPassword(e.target.value)} value={`${password}`} required />
                      </div>

                      <div className="form-check form-check-info text-start ps-0">
                      <input className="forminput" type="checkbox" id="myCheck" name="remember" required />
                        <label className="form-check-label" htmlhtmlFor="flexCheckDefault">
                          I agree the <a className="text-dark font-weight-bolder" style={{textDecoration: 'underline'}}>Terms and
                            Conditions</a>
                        </label>
                      </div>
                      <div className=" mt-4">
                      <button type="submit" className="btn btn-primary">Login</button>
                        <a href="#" className="mx-4" style={{color:'dodgerblue', textDecoration: 'underline' }}><b>Forgot Password?</b></a>
                        </div>
                    </form>
                  
                    
                    <div className="text-center pt-0 px-lg-2 px-1">
                      <p className="mt-4 text-sm mx-auto">
                        If you do not have an account?
                        <a href="/ca-admin/Register" className="text-info text-gradient font-weight-bold">Sign up</a>
                      </p>
                    </div>
                    {error_message?(
                    <div style={{color:'#a94442',backgroundColor:'#f2dede',borderColor:'#ebccd1'}}>
                        <b style={{align:"center"}}>{error_message}</b>
                    </div>
                    ):''
                  }
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
     <img src="/ca-admin/img/advertisement.jpg" alt="Los Angeles" className="d-block" style={{width:'100%'}}/>
   </div>
   <div className="carousel-item">
     <img src="/ca-admin/img/advertisement1.jpg" alt="Chicago" className="d-block" style={{width:'100%'}}/>
   </div>
   <div className="carousel-item">
     <img src="/ca-admin/img/advertisement2.jpg" alt="New York" className="d-block" style={{width:'100%'}}/>
   </div>
 </div>
 

 <button className="carousel-control-prev" type="button" data-target="#demo" data-slide="prev">
   <span className="carousel-control-prev-icon"></span>
 </button>
 <button className="carousel-control-next" type="button" data-target="#demo" data-slide="next">
   <span className="carousel-control-next-icon"></span>
 </button>
</div>
</div>
           </div>
       </div>
     </div>
     <div className="col-sm-12 col-md-12 col-lg-2 mx-auto my-auto">
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
              style={{width:'150px', height:'50px'}}>INCOME TAX</button>
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
              style={{width:'150px', height:'50px'}}>GST WEBSITE</button>
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
              style={{width:'150px', height:'50px'}}>CBIC WEBSITE</button>
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
              style={{width:'150px', height:'50px'}}>CBDT</button>
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal" data-bs-target="#"
              style={{width:'150px', height:'50px'}}>ABOUT US</button>
            <button type="button" className="btn bg-gradient-info mx-auto" data-bs-toggle="modal" data-bs-target="#myModal2"
              style={{width:'150px', height:'50px'}}>CONTACT US</button>
            <button type="button" className="btn bg-gradient-info  mx-auto" data-bs-toggle="modal"
              data-bs-target="#myModal1" style={{width:'150px', height:'50px'}}>COMPLAINTS & FEEDBACK</button>
          </div>
     </div>
  
   </div>
   </div>
 </main>
 
 <Script src="/ca-admin/js/core/popper.min.js"></Script>
 <Script src="/ca-admin/js/core/bootstrap.min.js"></Script>
 <Script src="/ca-admin/js/plugins/perfect-scrollbar.min.js"></Script>
 <Script src="/ca-admin/js/plugins/smooth-scrollbar.min.js"></Script>
 <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
  <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
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

 <div className="modal" id="myModal2" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">

        
        <div className="modal-header">
          <h4 className="modal-title w3-text-pink">Contact-us</h4>

            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faWindowClose}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} /></button>

        </div>
    
        <div className="modal-body">
          <div className="container w3-sans-serif">
           <form action="/action_page.php" className="needs-validation">
  <div className="mb-3 mt-3">
    <label htmlFor="uname" className="form-label">Name:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter name" name="name" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Email-id:</label>
    <input type="email" className="form-control" id="pwd" placeholder="Enter email-id" name="email" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Mobile No:</label>
    <input type="tel" className="form-control" id="pwd" placeholder="Enter mobile no." name="email" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Message:</label>
    <textarea className="form-control" id="pwd" placeholder="Write something here..." name="email" required></textarea>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
      </div>
    </div>
  </div>

  <div className="modal" id="myModal1" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">

        
        <div className="modal-header">
          <h4 className="modal-title w3-text-pink">Complaint box</h4>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faWindowClose}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} /></button>
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
</body>
    </>
  )
}

