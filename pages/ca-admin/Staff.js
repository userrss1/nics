import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import cookieCutter from 'cookie-cutter'
import UserNavbar from './Navbar'
import Swal from 'sweetalert2'
import axios from 'axios'
import Cookies from 'cookies'
import styles from '../../styles/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEye,
  faTimesCircle,
  faCheckSquare,
  faBell,
  faCog,
  faClock,
  faSearch,
  faSignOut,
  faHeart,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";




 
export async function getServerSideProps({ req, response }){
  const cookies = new Cookies(req, response)

  const token2 = cookies.get('cid')
    console.log(token2)

    const BASE_URL = `${process.env.HOST}`

 

  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }

  
    var raw = JSON.stringify({
      "user_id": `${token2}`
    });
  
    const { data } = await axios(BASE_URL+"/user/staff",
      {
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
        mode: 'cors', method: 'POST', data: raw
      });
  
    console.log(data)
   
  

  return {
      props: {
          token1,data,token2, BASE_URL
      },
  };
};

  

export default function Staff({token1, req, response, data, token2, BASE_URL }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  console.log(data)
  console.log(token2)
 
  




// let name = null
// if(token2 !== null ){
//     console.log("HERE============")
    //let toke = parseJwt(token2)
//      name = toke.name
// }else{
//      name = null
// }

//console.log(toke)

  
  

    
  const [first_name, SetFirst_Name] = useState("")
  const [last_name, SetLast_Name] = useState("");
  const [mobile, SetMobile] = useState("");
  const [email, SetEmail] = useState("");
  const [designation , SetDesignation] = useState("");
  const [password, SetPassword] = useState("")
  const [profile_image , SetProfileImage] = useState("");

 
    const router = useRouter()


  const handleSubmit = (e) => {

   
    e.preventDefault();
  
    console.log(first_name,last_name,mobile,email,designation,password,profile_image)
  
 


  }


  async function addStaff() {




   


    let fileInput = document.getElementById('profile_image')
       if(token2 != '' && first_name != '' && last_name != '' && mobile != '' && email != '' && designation != '' && password != '')
       {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token1}`);var formdata = new FormData();
    formdata.append("profile_image", fileInput.files[0], `${profile_image}`);var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };fetch(BASE_URL+ "/user/add_staff/?&user_id="+`${token2}`+"&first_name="+`${first_name}`+"&last_name="+`${last_name}`+"&mobile="+`${mobile}`+"&email="+`${email}`+"&designation="+`${designation}`+"&password="+`${password}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if(result.status == true)
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 2000
          })

          
          SetFirst_Name('')
          SetLast_Name('')
          SetEmail('')
          SetMobile('')
          SetDesignation('')
          SetPassword('')
          SetProfileImage('')
          document.getElementById('closeModel').click();
          router.push('./Staff')
        
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.message,
            footer: ''
          })
        }
      }
      
      
      )
      .catch(error => console.log('error', error));
     
      
  }
  else{
    Swal.fire('All fields are required')
  }
      
  
  
    }



    
  return (
   <>
   <Head>
   <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/ca-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/ca-admin/img/favicon.png"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  <title>
   Admin pannel created by placid
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/ca-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/ca-admin/css/nucleo-svg.css" rel="stylesheet" />
  


  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>

  <link id="pagestyle" href="/ca-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

   </Head>

   
   
     <body className="g-sidenav-show  bg-gray-200">
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <UserNavbar />
  <main className="main-content position-relative max-height-vh-50 h-50 border-radius-sm">
    
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-lg" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
      <nav aria-label="breadcrumb">
          <h4 className="font-weight-bolder mb-0">Staff</h4>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label"> Type here...</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link href="/ca-admin/Logout"><a  className="nav-link text-body font-weight-bold px-0">
              <FontAwesomeIcon icon={faSignOut}  style={{ fontSize: 100, color: "black",height: "15px",padding:'9px 3px'}} />&nbsp;
                <span className="d-sm-inline d-none">Logout</span>
              </a>
              </Link>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a  className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a  className="nav-link text-body p-0">
              <FontAwesomeIcon icon={faCog}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
              </a>
            </li>
            <li className = {styles.design}>
            <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspo>
             
              <FontAwesomeIcon icon={faBell}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
            </a>
            <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5" style={{width:"300px",padding:'20px 12px 2px 10px',textAlign:'center'}}>
            <div className="my-auto">
                      
                      </div>
                      <div className={styles.first}>
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                        <FontAwesomeIcon icon={faClock}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
                          13 minutes ago
                        </p>
                      </div>
                      <div className="my-auto">
                      
                      </div>
                      <div className={styles.second}>
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                        <FontAwesomeIcon icon={faClock}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
                          1 day
                        </p>
                      </div>
                      <div className={styles.third}>
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                        <FontAwesomeIcon icon={faClock}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
                          2 days
                        </p>
                      </div>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container-fluid py-4">
    <button type="button" className="btn bg-gradient-success" data-toggle="modal" data-target="#myModal2"><FontAwesomeIcon icon={faPlus}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} /></button>
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                
                  
                    <h6 className="text-white text-center text-capitalize ps-3 px-6">CA Admin Staff</h6>
                    <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                      <input className="form-control text-center form-control-sm ml-3 w-25" type="text" placeholder="Search"
                        aria-label="Search"/>
                        <h4 className="px-4 text-white"><FontAwesomeIcon icon={faSearch}  style={{ fontSize: 100, color: "white",height: "17px",padding:'7px 3px'}} /></h4>
                    </form> 
                  </div>
                  </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr className="text-center">
                      <th className=" text-center text-uppercase text-secondary text-xl font-weight-bolder">SUPER ADMIN STAFF ID</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">NAME/EMAIL ID</th>
                      <th className=" text-center text-uppercase text-secondary text-xl font-weight-bolder ps-2">MOBILE NO.</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">LAST LOGIN DATE & TIME DEPARTMENT</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">LOGIN TIME ALLOWED</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.message.map((o) => {
                         return(
                         <>
                    <tr className="text-center">
                      <td>
                      
                        <p className="text-xs font-weight-bold mb-0">{o.username}</p>
                       
                      </td>
                        <td>
                          <div className="d-flex px-2 py-1">
                           
                            <div className="d-flex flex-column justify-content-center">
                           
                              <h6 className="mb-0 text-bold">{o.first_name+" "+o.last_name}</h6>
                              <p className="text-xs text-secondary mb-0">{o.email}</p>
                              
                            </div>
                          </div>
                        </td>
                        <td>
                      
                          <p className="text-xs font-weight-bold mb-0">{o.mobile}</p>
                        
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">{o.created_at}</p>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">{o.updated_at}</p>
                              </td>   
                                 <td className="align-middle text-center text-sm">
                                    <div className="container mt-3">
                                      <button type="button" className="btn bg-gradient-warning" data-toggle="modal" data-target="#myModal">assign work</button>
                                    </div>
                                 </td>
                            </tr>
                            </>
                         )
                     })}
          
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <footer className="footer py-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
                    © <script>
                  document.write(new Date().getFullYear())
                </script>2022
                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: 100, color: "grey", height: "15px", padding: '0px 3px' }} />
                    <a href="https://www.placiddigital.com/#" className="font-weight-bold" target="_blank" rel="noreferrer" style={{ color: 'dodgerblue' }}>Placid digital</a>
                  </div>
            </div>
            
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <Link href="https://www.placiddigital.com/#"><a  className="nav-link text-muted" target="_blank" rel="noreferrer">Placid digital</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  </main>

  
  <Script src="/ca-admin/js/core/popper.min.js"></Script>
  <Script src="/ca-admin/js/core/bootstrap.min.js"></Script>
  <Script src="/ca-admin/js/plugins/perfect-scrollbar.min.js"></Script>
  <Script src="/ca-admin/js/plugins/smooth-scrollbar.min.js"></Script>
  <Script src="/ca-admin/js/plugins/chartjs.min.js"></Script>
  

<Script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></Script>

<Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>

  <Script async defer src="https://buttons.github.io/buttons.js"></Script>
  
  <Script src="/ca-admin/js/material-dashboard.min.js?v=3.0.0"></Script>

  

  <div className="modal" id="myModal2" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

      
    <div className="modal-header bg-gradient-info">
        <h4 className="modal-title text-white">Add Staff</h4>
        <button type="button" id="closeModel" className="btn btn-danger" data-dismiss="modal"><FontAwesomeIcon icon={faWindowClose} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} /></button>
       
      </div>
      
      <div className="modal-body">
      <div className="container w3-sans-serif">
        <form onSubmit={handleSubmit}>
          <div className="row">
           <div className="col-lg-12">
           <div className="form-group">
             <label htmlFor="name"> First Name:</label>
             <input type="text" className="form-control" id="first_name" placeholder="Enter first name" onChange={(e) => SetFirst_Name(e.target.value)} value={`${first_name}`} required/>
           </div>
           <div className="form-group">
             <label htmlFor="name"> Last Name:</label>
             <input type="text" className="form-control" id="last_name" placeholder="Enter last name" onChange={(e) => SetLast_Name(e.target.value)} value={`${last_name}`} required/>
           </div>
           </div>
           <div className="col-lg-12">
           <div className="form-group">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => SetEmail(e.target.value)} value={`${email}`} required/>
           </div>
           </div>
           <div className="col-lg-12">
           <div className="form-group">
             <label htmlFor="contact">Mobile no.:</label>
             <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile no." onChange={(e) => SetMobile(e.target.value)} value={`${mobile}`} required/>
           </div>
           <div className="form-group">
             <label htmlFor="contact">Designation:</label>
             <input type="text" className="form-control" id="designation" placeholder="Enter your designation" onChange={(e) => SetDesignation(e.target.value)} value={`${designation}`} required/>
           </div>
           <div className="form-group">
             <label htmlFor="contact">Password:</label>
             <input type="text" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => SetPassword(e.target.value)} value={`${password}`} required/>
           </div>
           <div className="form-group">
             <label htmlFor="contact">Upload Profile picture:</label>
             <input type="file" className="form-control" id="profile_image"  onChange={(e) => SetProfileImage(e.target.value)} value={`${profile_image}`} />
           </div>
         </div>
        
         <div className="modal-footer">
         <button type="button" onClick={addStaff} className="btn btn-success">Submit</button>
         {Swal?(
                    <div style={{color:'#a94442',backgroundColor:'#f2dede',borderColor:'#ebccd1'}}>
                        <b style={{align:"center"}}>{Swal}</b>
                    </div>
                    ):''
                  }
          
 
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
