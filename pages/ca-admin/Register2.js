import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

export default function Register2() {
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
  <link href="/ca-admin/css/nucleo-svg.css" rel="stylesheet" />
  

  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  
  <link id="pagestyle" href="/ca-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

 <style jsx>{`

 .tab{
      display: none;
    }
  `}</style>
</Head>
<body className="bg-gray-200">
  <main className="main-content mt-0">
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url(/ca-admin/img/registration.jpg)'}}>
    <span className="mask bg-gradient-dark opacity-8"></span>
      <div className="container my-auto">
        <div className="row" >
          <div className="col-sm-12 col-md-4 col-lg-6 mx-auto my-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4 w3-margin">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">New user registration organization details</h4>
                  <div className="row mt-3">
                  </div>
                </div>
            </div>
            <div className="row w3-margin">
              <div className="card-body">
                <form role="form" className="needs-validation">
                 
                  <div className="tab">
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">First Name:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Last Name:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Mobile No.:</label>
                      <input type="tel" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Email-id:</label> 
                      <input type="email" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <label className="form-label">Designation</label>
                    <div className="input-group input-group-outline mb-3">
                      <select id="heard" className="form-control" required>
                        <option value="">A</option>
                        <option value="press">B</option>
                        <option value="net">C</option>
                        <option value="mouth">D</option>
                      </select>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Organisation Name:</label> 
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <label className="form-label">Industry</label>
                    <div className="input-group input-group-outline mb-3">
                       <select id="heard" className="form-control" required>
                        <option value="">A</option>
                        <option value="press">B</option>
                        <option value="net">C</option>
                        <option value="mouth">D</option>
                      </select>
                    </div>
                  </div>
                  <div className="tab">
                    <label className="form-label">Constitution</label>
                    <div className="input-group input-group-outline mb-3">
                       <select id="heard" className="form-control"required>
                        <option value="">A</option>
                        <option value="press">B</option>
                        <option value="net">C</option>
                        <option value="mouth">D</option>
                      </select>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">GSTIN:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                 
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">ADDRESS*.:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <label className="form-label">Country</label>
                    <div className="input-group input-group-outline mb-3">
                       <select id="heard" className="form-control" required >
                        <option value="">A</option>
                        <option value="press">B</option>
                        <option value="net">C</option>
                        <option value="mouth">D</option>
                      </select>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">State:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">District:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                  </div>
                  <div className="tab">
                  <div className="row">
                    <div className="col-lg-8">
                    <div className="input-group input-group-outline mb-3 ">
                        <label className="form-label">Email-id:</label>
                        <input type="email" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please verify email-id.</div>
                   </div>
                   </div>
                     <div className="col-lg-4">
                      <div className="input-group input-group-outline mb-3">
                        <button type="button" className="btn btn-sm bg-gradient-info">Resend</button>
                        <button type="button" className="btn btn-sm bg-gradient-success">Verify</button>
                      </div>
                     </div>
                   </div>
                   <div className="row">
                    <div className="col-lg-8">
                      <div className="input-group input-group-outline mb-3">
                        <label className="form-label">Mobile:</label>
                        <input type="tel" className="form-control" id="uname" name="uname" required/>
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please verify mobile no..</div>
                      </div>
                    </div>
                     <div className="col-lg-4">
                      <div className="input-group input-group-outline mb-3">
                        <button type="button" className="btn btn-sm bg-gradient-info">Resend</button>
                        <button type="button" className="btn btn-sm bg-gradient-success">Verify</button>
                      </div>
                     </div>
                   </div>
  
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">User-id*:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password:</label>
                      <input type="password" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Confirm Password:</label>
                      <input type="password" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please confirm password.</div>
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Super admin staff user-id:</label>
                      <input type="text" className="form-control" id="uname" name="uname" required/>
                      <div className="valid-feedback">Valid.</div>
                   <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-check form-check-info text-start ps-0">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree the <a  className="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </div>
                    <center><p className="mb-2 text-sm mx-auto py-2">
                      Already have an account?
                      <a href="/ca-admin/sign-in" className="text-info text-gradient font-weight-bold">Sign in</a>
                    </p></center>
                  </div>
                  <div style={{overflow:'auto'}}>
                    <div style={{float:'right'}}>
  
                      <button type="submit" id="prevBtn" onClick="nextPrev(-1)" className="btn btn-primary">Previous</button>
                      <button type="submit" id="nextBtn" onClick="nextPrev(1)" className="btn btn-primary">Next</button>
                    </div>
                  </div>
                  
                  <div style={{textAlign:'center',marginTop:'40px'}}>
                    <span className="step"></span>
                    <span className="step"></span>
                    <span className="step"></span>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto my-auto ">
          <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4 w3-margin">
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
            <input type="email" className="form-control" id="name" placeholder="Enter email" name="email"/>
          </div>
          </div>
          <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="email" placeholder="Enter password" name="email"/>
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
            <input type="text" className="form-control" id="name" placeholder="Enter name" name="email"/>
          </div>
          </div>
          <div className="col-lg-12"> 
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className=" form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          </div>
          <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="contact">Mobile no.:</label>
            <input type="tel" className="form-control" id="mobile" placeholder="Enter email" name="email"/>
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
     
  <Script src="/ca-admin/js/core/popper.min.js"></Script>
  <Script src="/ca-admin/js/core/bootstrap.min.js"></Script>
  <Script src="/ca-admin/js/plugins/perfect-scrollbar.min.js"></Script>
  <Script src="/ca-admin/js/plugins/smooth-scrollbar.min.js"></Script>
  <Script src="/scrip.js"></Script>
  <Script src="/scrip2.js"></Script>
  <Script src="/scoop.js"></Script>
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
  {/* <Script>
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab
    
    function showTab(n) {
      // This function will display the specified tab of the form...
      var x = document.getElementsByClassName("tab");
      x[n].style.display = "block";
      //... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      //... and run a function that will display the correct step indicator:
      fixStepIndicator(n)
    }
    
    function nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // Hide the current tab:
      x[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // if you have reached the end of the form...
      if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
    }
    
    function validateForm() {
      // This function deals with validation of the form fields
      var x, y, i, valid = true;
      x = document.getElementsByClassName("tab");
      y = x[currentTab].getElementsByTagName("input");
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
      }
      return valid; // return the valid status
    }
    
    function fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
    }
    </Script> */}
    
  
    </body>
   </>
  )
}
