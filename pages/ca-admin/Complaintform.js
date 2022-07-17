import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Cookies from 'cookies'
import axios from 'axios'
import Swal from 'sweetalert2'
import Protect from './Protect'

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res)
  let err = ''
  let status = false

  const BASE_URL = `${process.env.HOST}`

  const token2 = cookies.get('cid')
  console.log(token2)


  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }

  // await getBody('http://192.168.1.101:8081/api/login/');




  var raw = JSON.stringify({
    "user_id": `${token2}`,
    "message": "This is message"
  });
  

  const { data } = await axios(BASE_URL+ "/user/add_complaints",
    {
      headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
      mode: 'cors', method: 'POST', data: raw
    });

  console.log(data)


 




  console.log(token1)



  return {

    props: {
      token1, data, token2, BASE_URL


    }
  };
}


export default function Complaintform({token1, token2, BASE_URL}) {

        const [data, setData] = useState({
              message: ""
        })

        const postMess = () => {

          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token1}`);
          myHeaders.append("Content-Type", "application/json");
          
          var raw = JSON.stringify({
            "user_id": `${token2}`,
            "message": data.message
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch(BASE_URL +"/user/add_complaints", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
          
          if(result.status == true){
        
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: result.message.message,
              showConfirmButton: false,
              timer: 2000
            })
              
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: result.message.message,
              footer: ''
            })
          }
          }
          )
          .catch(error => console.log('error', error));
        }
        
    
    
 
  const postMessage = (e) => {
        
       const newdata = {...data}
         newdata[e.target.id] = e.target.value
         setData(newdata)
         console.log(newdata)
         console.log("hiiii")
      
  }

  return (
   <>
   <Head>
   <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/ca-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/ca-admin/img/favicon.png"/>
  <title>
    Material Dashboard 2 by Creative Tim
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/ca-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/ca-admin/css/nucleo-svg.css" rel="stylesheet" />
  

  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  
  <link id="pagestyle" href="/ca-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>


   </Head>
   <Protect />
     <body className="bg-gray-200">
 
 <main className="main-content  mt-0">
   <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url(/ca-admin/img/login-background.jpg)'}}>
   <span className="mask bg-gradient-dark opacity-6"></span>
     <div className="container my-auto">
       <div className="row">
         <div className="col-sm-12 col-md-4 col-lg-6 mx-auto">
           <div className="card z-index-0 fadeIn3 fadeInBottom">
             <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
               <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                 <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Complaint Us</h5>
                 <div className="row mt-3">
 
               </div>
             </div>
           <div className="row">
             <div className="card-body">
               <div className="col-md-12">
               <form role="form" onSubmit={(e)=> submit(e)}>
                 <div className=" mb-3">
                   <label className="form-label">Message</label>
                   <textarea type="email" className="form-control" placeholder="Your Complaint" onChange={(e) => postMessage(e)} id="message" value={data.message}></textarea>
                 </div>
<div className="row">
                 <div className="text-center col-lg-6">
                   <Link  href="#" ><a type="button" className="btn btn-sm font-weight-bolder bg-gradient-success  mt-2 mb-0" onClick={postMess} >Generate Ticket</a></Link>
                 </div>
                 <div className="text-center col-lg-6">
                   <Link href="/ca-admin/Dashboard"><a  type="button" className="btn btn-sm font-weight-bolder bg-gradient-danger  mt-2 mb-0">Close</a></Link>
                 </div>
                 </div>
               </form>
             
             </div>
             </div>
           </div>
         </div>
       </div>

   
     </div>
  
   </div>
   </div>
   </div>
 </main>

 <Script src="/ca-admin/js/core/popper.min.js"></Script>
 <Script src="/ca-admin/js/core/bootstrap.min.js"></Script>
 <Script src="/ca-admin/js/plugins/perfect-scrollbar.min.js"></Script>
 <Script src="/ca-admin/js/plugins/smooth-scrollbar.min.js"></Script>
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

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

<Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
 
 <Script async defer src="https://buttons.github.io/buttons.js"></Script>
 
 <Script src="/ca-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
</body>

   </>
  )
}
