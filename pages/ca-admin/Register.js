import React, { useState } from 'react'
// import Swal from 'sweetalert2'
import Head from 'next/head'
import Script from 'next/script'
import Cookies from 'cookies';
import Swal from 'sweetalert2'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export async function getServerSideProps({ req, response }){
  const cookies = new Cookies(req, response)

  const token2 = cookies.get('myCookieName')
    console.log(token2)

    
    const BASE_URL = `${process.env.HOST}`
 

  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }


  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token1}`);
  // work ahead continue

  
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  
    redirect: 'follow'
  };

  var requestOptions1 = {
    method: 'GET',
    headers: myHeaders,
  
    redirect: 'follow'
  };

  var requestOptions2 = {
    method: 'GET',
    headers: myHeaders,
  
    redirect: 'follow'
  };

 
  const [data1, datas1, data2] = await Promise.all([
    fetch(BASE_URL+ "/sa/user_designations", requestOptions), 
    fetch(BASE_URL+"/sa/user_organisations", requestOptions1),
    fetch(BASE_URL+"/sa/user_industries", requestOptions2)
  ]);
  const [desig, org, indus] = await Promise.all([
    data1.json(), 
    datas1.json(),
    data2.json()
  ]);

  console.log(desig)
  console.log(org)
  console.log(indus)
  
  return { props: { desig, org, indus, BASE_URL } };

  
}


export default function Register({ desig, org, indus, token1, BASE_URL }) {

//     Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool'
// })
  

  const [first_names, SetFirst_name] = useState("")
  const [last_names, SetLast_name] = useState("");
  const [mobile_nos, SetMobile_no] = useState("");
  const [email_ids, SetEmail_id] = useState("");
  const [designation_ids, SetDesignation_id] = useState("");
  const [organisation_ids, SetOrganisation_id] = useState("");
  const [industry_ids, SetIndustry_id] = useState("");
  const [GSTINs, SetGSTIN] = useState("")
  const [Constitutions, SetConstitution] = useState("")
  const [addresss, SetAddress] = useState("")
  const [countrys, SetCountry] = useState("")
  const [states, SetState] = useState("")
  const [pincodes, SetPincodes] = useState("")
  const [districts, SetDistrict] = useState("")
  const [passwords, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(first_names, last_names, mobile_nos, email_ids, designation_ids, organisation_ids, industry_ids, GSTINs, Constitutions, addresss, countrys, states, districts, passwords)
    console.log(token1)


  }

  async function addedpack() {

   
       
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token1}`);

    const first_names1 = document.getElementById("exampleInputFirstName").value;
    const last_names1 = document.getElementById("exampleInputLastname").value;
    const mobile_nos1 = document.getElementById("exampleInputMobile").value;
    const email_ids1 = document.getElementById("exampleInputEmail").value;
    const designation_ids1 = document.getElementById("exampleInputDesignation").value;
    const organisation_ids1 = document.getElementById("exampleInputOrganisation").value;
    const industry_ids1 = document.getElementById("exampleInputIndus").value;
    const GSTINs1 = document.getElementById("exampleInputConst").value;
    const Constitutions = document.getElementById("exampleInputGST").value;
    const addresss1 = document.getElementById("exampleInputAddress").value;
    const countrys1 = document.getElementById("exampleInputCount").value;
    const states1 = document.getElementById("exampleInputState").value;
    const pincodes1 = document.getElementById("exampleInputPin").value;
    const districts1 = document.getElementById("exampleInputDis").value;
    const passwords1 = document.getElementById("exampleInputPassword").value;
    
    var raw = JSON.stringify({
      "first_name": `${first_names1}`,
      "last_name": `${last_names1}`,
      "mobile_no": `${mobile_nos1}`,
      "email_id": `${email_ids1}`,
      "designation_id": `${designation_ids1}`,
      "organisation_id": `${organisation_ids1}`,
      "industry_id": `${industry_ids1}`,
      "Constitution": `${Constitutions}`,
      "GSTIN": `${GSTINs1}`,
      "address": `${addresss1}`,
      "country": `${countrys1}`,
      "state": `${states1}`,
      "pincode": `${pincodes1}`,
      "district": `${districts1}`,
      "password": `${passwords1}`
    });
    
    try {
      if (first_names1 != '' && last_names1 != '' && mobile_nos1 != '' && email_ids1 != '' && designation_ids1 != '' && organisation_ids1 != '' && industry_ids1 != '' && Constitutions != '' && GSTINs1 != '' && addresss1 != '' && districts1 != '' && passwords1 != '' && countrys1 != '' && states1 != '') {
        const data = await fetch(BASE_URL +"/user/add/",
          { headers: { 'Content-Type': 'application/json', 'accept': 'application/json',  "Authorization": `Bearer ${token1}` }, mode: 'cors', method: 'POST', body: raw }).then(data=>data.clone().json());
        // console.log(await data.json());
        console.log("Input Field")
       console.log(data)
        if(data.status == true)
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2000
          })
        SetFirst_name('')
        SetLast_name('')
        SetMobile_no('')
        SetEmail_id('')
        SetDesignation_id('')
        SetOrganisation_id('')
        SetIndustry_id('')
        SetConstitution('')
        SetGSTIN('')
        SetAddress('')
        SetCountry('')
        SetState('')
        SetPincodes('')
        SetDistrict('')
        setPassword('')
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message,
          footer: ''
        })
      }

    
        // localStorage.setItem('user-info',JSON.stringify(data))
        



      } else {
        alert("All fields required")
      }
    } catch (error) {

      console.log(error.message)

      // if (err.response) {
      //    console.log(err.response.status)
      //    console.log(err.response.data)
      // }

    }
    }



  



  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="76x76" href="/ca-admin/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/ca-admin/img/favicon.png" />
        <title>
          Material Dashboard 2 by Creative Tim
        </title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

        <link href="/ca-admin/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/ca-admin/css/nucleo-svg.css" rel="stylesheet" />



        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

        <link id="pagestyle" href="/ca-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />


        <style jsx>{`
   .tab{
    display: none;
  }
`}</style>

      </Head>




      <body className="bg-gray-200">
        <main className="main-content mt-0">
          <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(/ca-admin/img/banner.jpeg)' }}>
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container my-auto">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-6 mx-auto ex1">
                  <div className="card z-index-0 fadeIn3 fadeInBottom py-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">New user registration organization details</h4>
                        <div className="row mt-3">
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-body">
                        <form role="form"  onSubmit={handleSubmit}>

                         
                        <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputFirstName" placeholder='FirstName' className="form-control" onChange={(e) => SetFirst_name(e.target.value)} value={`${first_names}`} required />
                      </div>
                            <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputLastname" placeholder='LastName' className="form-control" onChange={(e) => SetLast_name(e.target.value)} value={`${last_names}`} required />
                      </div>
                            <div className="input-group input-group-outline mb-3">
                      
                        <input type="number" id="exampleInputMobile" placeholder='Mobile-No' className="form-control" onChange={(e) => SetMobile_no(e.target.value)} value={`${mobile_nos}`} required />
                      </div>
                            <div className="input-group input-group-outline mb-3">
                        
                        <input type="email" id="exampleInputEmail" placeholder='Email-id' className="form-control" onChange={(e) => SetEmail_id(e.target.value)} value={`${email_ids}`} required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                      
                        {/* <input type="text" id="exampleInputDesignation" className="form-control" onChange={(e) => SetDesignation_id(e.target.value)} value={`${designation_ids}`} required /> */}
                       
                       <select id="exampleInputDesignation"  className="form-control" required>
                         {/* put option tag into map function */}
                        <option value="">Designation</option>
                         {desig.map((d,index)=> { 
                           return (
                         <option value={d.id} key={index}>{d.name}</option>
                           )
                        })}
                       </select>
                     
                      </div>
                      <div className="input-group input-group-outline mb-3">
                      
                        {/* <input type="text" id="exampleInputOrganisation" className="form-control" onChange={(e) => SetOrganisation_id(e.target.value)} value={`${organisation_ids}`} required /> */}
                        <select id="exampleInputOrganisation" className="form-control" required>
                         {/* put option tag into map function */}
                         <option value="">Organisation</option>
                         {org.map((o, index) => { 
                           return(
                         <option value={o.id} key={index}>{o.name}</option>
                           )
                        })}
                       </select>
                     
                      </div>
                      <div className="input-group input-group-outline mb-3">
                      
                        {/* <input type="text" id="exampleInputIndus" className="form-control" onChange={(e) => SetIndustry_id(e.target.value)} value={`${industry_ids}`} required /> */}
                        <select id="exampleInputIndus" className="form-control" required>
                         {/* put option tag into map function */}
                         <option value="">Industry</option>
                         {indus.map((i, index) => { 
                           return (
                         <option value={i.id} key={index}>{i.name}</option>
                           )
                        })}
                       </select>
                     
                      </div>
                          <div className="tab">
                           
                          <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputConst" placeholder='Constitution' className="form-control" onChange={(e) => SetConstitution(e.target.value)} value={`${Constitutions}`} required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                   
                        <input type="number" id="exampleInputGST" placeholder='GSTIN' className="form-control" onChange={(e) => SetGSTIN(e.target.value)} value={`${GSTINs}`} required />
                      </div>

                      <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputAddress" placeholder='ADDRESS' className="form-control" onChange={(e) => SetAddress(e.target.value)} value={`${addresss}`} required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputCount" placeholder='Country' className="form-control" onChange={(e) => SetCountry(e.target.value)} value={`${countrys}`} required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                     
                        <input type="text" id="exampleInputState" placeholder='State' className="form-control" onChange={(e) => SetState(e.target.value)} value={`${states}`} required />
                      </div>

                      <div className="input-group input-group-outline mb-3">
                      
                        <input type="number" id="exampleInputPin" placeholder='Pincode' className="form-control" onChange={(e) => SetPincodes(e.target.value)} value={`${pincodes}`} required />
                      </div>
                            
                      <div className="input-group input-group-outline mb-3">
                        
                        <input type="text" id="exampleInputDis" placeholder='District' className="form-control" onChange={(e) => SetDistrict(e.target.value)} value={`${districts}`} required />
                      </div>
                          </div>
                          <div className="tab">
                            <div className="row">
                              <div className="col-lg-8">
                  
                  </div> 
                               <div className="col-lg-4">
                    
                    </div>
                            </div>
                            <div className="row">
                   <div className="col-lg-8">
                   
                   </div>
                    <div className="col-lg-4">
                    
                    </div>
                  </div>

                        
                  <div className="input-group input-group-outline mb-3">
                       
                        <input type="password" id="exampleInputPassword" placeholder='Password' className="form-control" onChange={(e) => setPassword(e.target.value)} value={`${passwords}`} required />
                      </div>
                        
                            <div className="form-check form-check-info text-start ps-0">
                              <input className="form-input" type="checkbox" value="" id="flexCheckDefault" checked />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree the <a  className="text-dark font-weight-bolder">Terms and Conditions</a>
                              </label>
                            </div>
                            <center><p className="mb-2 text-sm mx-auto py-2">
                              Already have an account?
                              <a href="/ca-admin/Sign-in" className="text-info text-gradient font-weight-bold">Sign in</a>
                            </p></center>
                          </div>
                          <div style={{ overflow: 'auto' }}>
                            <div style={{ float: 'right' }}>

                             
                              <button type="submit" id="nextBtn" onClick={addedpack} className="btn btn-primary">Submit</button>
                            </div>
                          </div>

                          <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <span className="step"></span>
                            <span className="step"></span>
                            <span className="step"></span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="col-sm-12 col-md-8 col-lg-6 mx-auto my-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-body">
                      <div className="container">

                        <Carousel>
                          <div>
                            <img src="/ca-admin/img/advertisement.jpg" alt="image1" />


                          </div>
                          <div>
                            <img src="/ca-admin/img/advertisement1.jpg" alt="image2" />


                          </div>
                          <div>
                            <img src="/ca-admin/img/advertisement2.jpg" alt="image3" />


                          </div>
                        </Carousel>

                        <div id="demo" className="carousel slide" data-bs-ride="carousel">

                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                          </div>





                          {/* <div className="carousel-inner">
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
   */}


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

<Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>

        <Script async defer src="https://buttons.github.io/buttons.js"></Script>

        <Script src="/super-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
      </body>

      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="container w3-sans-serif">
              <h3 className="w3-text-red">Complaint box</h3>
              <form className="w3-panel w3-border">
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
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Generate ticket</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal2">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container w3-sans-serif">
              <h3 className="w3-text-red">Contact-us</h3>
              <form className="w3-panel w3-border">
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
                      <textarea placeholder="type here....."></textarea>
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
    </>
  )
}
