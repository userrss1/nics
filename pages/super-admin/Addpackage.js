import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Cookies from 'cookies'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { StylesContext } from '@material-ui/styles';
import styles from '../../styles/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEye,
  faTimesCircle,
  faCheckSquare,
  faBell,
  faCog,
  faHeart,
  faClock,
  faSignOut,
  faUsers,
  faExclamation,
  faFrown,
  faInr,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import Protect from './Protect'
let access_token = ''

export const getServerSideProps = async (context) => {
  const BASE_URL = `${process.env.HOST}`
  const cookies = new Cookies(context.req,context.res)
   access_token = cookies.get('access_token')
  var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append( "Authorization", `Bearer ${access_token}`);
  const res = await fetch(BASE_URL+"/sa/admin_all_package", { headers:  myHeaders });
  const data = await res.json();
 

  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }
  
 

  return {
      props: {
        token1, data, BASE_URL
      },
  };
};
  




export default function Addpackage({token1, data, BASE_URL}) {

  console.log(data[0].clients_count)

  const [packagename, SetPackageName] = useState("")
  const [no_of_Clients, SetNo_of_Clients] = useState("");
  const [staff, SetStaff] = useState("");
  const [plan, SetPlan] = useState("");
  const [basicamount, SetBasicAmount] = useState("");
  const [discount, SetDiscount] = useState("");
  const [storage, SetStorage] = useState("");
  const [deScription, SetDeScription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(packagename,no_of_Clients,staff,plan,basicamount,discount,storage,deScription)
    console.log(token1)


  }



     
      // const addedpack = ({token1}) => {
           
            
      //        console.log(packagename,no_of_Clients,staff,plan,basicamount,discount,storage,deScription)
      //        const data = {packagename,no_of_Clients,staff,plan,basicamount,discount,storage,deScription};

      //        fetch(BASE_URL+"/sa/add_package", {
      //          method: 'POST', // or 'PUT'
      //          headers: {
      //            "Content-Type": "application/json",
      //            "Accept": "application/json",
      //            "Authorization": `Bearer ${token1}`
      //          },
      //          body: JSON.stringify(data),
      //        })
      //        .then(response => response.json())
      //        .then(data => {
      //          console.log('Success:', data);
      //        })
      //        .catch((error) => {
      //          console.error('Error:', error);
      //        });
      //          }


      async function addedpack() {
       
   
      //  const packagename1 = document.getElementById("packagename").value;
        const no_of_Clients1 = document.getElementById("no_of_Clients").value;
        const staff1 = document.getElementById("staff").value;
        const plan1 = document.getElementById("plan").value;
        const basicamount1 = document.getElementById("basicamount").value;
        const discount1 = document.getElementById("discount").value;
        const storage1 = document.getElementById("storage").value;
        //const deScription1 = document.getElementById("deScription").value;
    
    
       var raw = JSON.stringify({
        "clients_count": `${no_of_Clients1}`,
        "staff_count": `${staff1}`,
        "plan": `${plan1}`,
        "base_price": `${basicamount1}`,
        "discount": `${discount1}`,
        "storage": `${storage1}`
    });
    
        try {
          if (no_of_Clients1 != '' && staff1 != '' && plan1 != '' && basicamount1 != '' && discount1 != '' && storage1 != '') {
            const data = await fetch(BASE_URL +'/sa/add_package/',
              { headers: { 'Content-Type': 'application/json', 'accept': 'application/json',  "Authorization": `Bearer ${token1}` }, mode: 'cors', method: 'POST', body: raw });
            console.log(await data.json());
            console.log("Input Field")
            SetPackageName('')
            SetNo_of_Clients('')
            SetStaff('')
            SetPlan('')
            SetBasicAmount('')
            SetDiscount('')
            SetStorage('')
            SetDeScription('')
    
    
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
    <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/super-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/super-admin/img/favicon.png"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  <title>
   Admin pannel created by placid
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/super-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/super-admin/css/nucleo-svg.css" rel="stylesheet" />
  


  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>

  <link id="pagestyle" href="/super-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

    </Head>
    <Protect />
      <body className="g-sidenav-show  bg-gray-200">
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
          <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <a className="navbar-brand m-0" href="#">
              <img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1" />
              <span className="ms-1 font-weight-bold text-white">Super Admin</span>
            </a>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main" style={{ overflow: 'hidden' }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/super-admin/Dashboard"><a className="nav-link text-white active bg-gradient-info" >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a></Link>
              </li>

              <li style={{ display: 'flex', justifyContent: 'center' }}>
                <Accordion style={{ backgroundColor: '#303030', width: 'auto' }}>

                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8 accordion" style={{ color: 'white', fontSize: '12px', width: '180px', textAlign: 'left' }}>REGISTERED USER ADMINS</h6>
                  </AccordionSummary>
                  <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                    <li style={{ display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Registeredca"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faUsers} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Registered users</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/New_reg"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faExclamation} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Pending Approvals</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                  </ul>

                </Accordion>
              </li>

              <li style={{ display: 'flex', justifyContent: 'center' }}>
                <Accordion style={{ backgroundColor: '#303030', width: 'auto', overflow: 'hidden' }}>

                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8 accordion" style={{ color: 'white', fontSize: '12px', width: '180px', textAlign: 'left' }}>PACKAGE</h6>
                  </AccordionSummary>
                  <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                    <li style={{ display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Addpackage"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faPlus} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Add Packages</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Packages"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faEye} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />View</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                  </ul>

                </Accordion>

              </li>

              <li style={{ display: 'flex', justifyContent: 'center' }}>
                <Accordion style={{ backgroundColor: '#303030', width: 'auto' }}>

                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8 accordion" style={{ color: 'white', fontSize: '12px', width: '180px', textAlign: 'left' }}>PAYMENT STATUS</h6>
                  </AccordionSummary>
                  <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                    <li style={{ display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Planexpiring"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faFrown} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Plan Expriring</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Payment"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faInr} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Payment Recieved</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                  </ul>

                </Accordion>

              </li>


              {/* <div style={{ display:'flex',justifyContent:'center'}}> */}

              {/* <Accordion style={{ backgroundColor: '#303030', color: 'white',width:'180px', border:'1px solid red'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          
           <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8 accordion" style={{color: 'white', fontSize: '12px',width:'180px',textAlign:'left',padding:'0px',margin:'0px'}}>PACKAGE</h6>
        </AccordionSummary>
        
        <AccordionDetails>
        <a className="nav-link text-white " href="addpackage.html" style={{display:'inline-block',height:'1px'}}>
              <span className = {styles.pack}><FontAwesomeIcon icon={faPlus}  style={{ fontSize: 100, color: "white", height: "15px" }} />Add Packages</span>
              
            </a>
        </AccordionDetails>
        <AccordionDetails>
        <a className="nav-link text-white " href="packages.html">
              <span className = {styles.pack}><FontAwesomeIcon icon={faEye}  style={{ fontSize: 100, color: "white", height: "15px" }} />View</span>
            </a>
        </AccordionDetails>
      </Accordion> */}
              {/* </div> */}
             

            </ul>
          </div>
          <li className="nav-item mt-3">
                <Link href="/super-admin/Adminstaff"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">SUPER ADMIN STAFF</h6></a></Link>
              </li>
              <li className="nav-item mt-3">
                <Link href="/super-admin/Contactmsg"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">CONTACT MESSAGES</h6></a></Link>
              </li>
              <li className="nav-item mt-3">
                <Link href="/super-admin/Complaints"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">COMPLAINTS</h6></a></Link>
              </li>
              <li className="nav-item mt-3">
                <Link href="/super-admin/Addorganisation"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">ADD ORGANISATION</h6></a></Link>
              </li>

        </aside>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
      <nav aria-label="breadcrumb">
          <h4 className="font-weight-bolder mb-0">Packages</h4>
        </nav>
        <div className="container">
                  <button type="button" className="btn bg-gradient-warning" data-toggle="modal" data-target="#myModal5">Add Package</button>
                </div>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label"> Type </label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <FontAwesomeIcon icon={faSignOut}  style={{ fontSize: 100, color: "black",height: "15px",padding:'0px 3px'}} />
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link href="/super-admin/Sign-in"><a  className="nav-link text-body font-weight-bold px-0">
             
                <span className="d-sm-inline d-none">Logout</span>
              </a></Link>
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
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[0].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[0].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[0].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[0].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[0].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[1].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[1].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[1].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[1].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[1].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[2].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[2].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[2].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[2].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[2].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[3].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[3].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[3].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[3].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[3].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[4].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[4].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[4].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[4].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[4].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">PACKAGE-1</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">CLIENTS</p>
                      </td>
                      <td>
                      {/* {data.map((o) => {
                         return(
                         <> */}
                        <p className="text-xs font-weight-bold mb-0">{data[5].clients_count}</p>
                        {/* </>
                         )
                     })} */}
                      </td>
                        </tr>
                        <tr>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">STAFF</p>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{data[5].staff_count}</p>
                              </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">PLAN</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{data[5].plan}</p>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p className="text-xs font-weight-bold mb-0">BASIC AMOUNT</p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{data[5].base_price}</p>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-xs font-weight-bold mb-0">Discount</p>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">{data[5].discount}</p>
                                          </td>
                                          </tr>
                                          <tr>
                                            <td>
                                           <button className=" btn btn-success shadow-success">CALCULATED PROCE</button>
                                                    
                                              </td>
                                              </tr>
                                             
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
                <FontAwesomeIcon icon={faHeart}  style={{ fontSize: 100, color: "grey", height: "15px",padding:'7px 3px'}} />
                <a href="https://www.placiddigital.com/#" className="font-weight-bold" target="_blank" rel="noreferrer" style={{color:'dodgerblue'}}>Placid digital</a>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.placiddigital.com/#" className="nav-link text-muted" target="_blank" rel="noreferrer">Placid digital</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
 
  <Script type="text/jsx" src="/super-admin/js/core/popper.min.js"></Script>
        
        <Script type="text/jsx" src="/super-admin/js/core/bootstrap.min.js"></Script>
              <Script type="text/jsx" src="/super-admin/js/plugins/perfect-scrollbar.min.js"></Script>
              <Script type="text/jsx" src="/super-admin/js/plugins/smooth-scrollbar.min.js"></Script>
              <Script type="text/jsx" src="/super-admin/js/plugins/chartjs.min.js"></Script>
  {/* <Script>
    var ctx = document.getElementById("chart-bars").getContext("2d");
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          label: "Sales",
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "rgba(255, 255, 255, .8)",
          data: [50, 20, 10, 22, 50, 10, 40],
          maxBarThickness: 6
        }, ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
              color: "#fff"
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
    var ctx2 = document.getElementById("chart-line").getContext("2d");
    new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Mobile apps",
          tension: 0,
          borderWidth: 0,
          pointRadius: 5,
          pointBackgroundColor: "rgba(255, 255, 255, .8)",
          pointBorderColor: "transparent",
          borderColor: "rgba(255, 255, 255, .8)",
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
          maxBarThickness: 6
  
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
  
    var ctx3 = document.getElementById("chart-line-tasks").getContext("2d");
  
    new Chart(ctx3, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Mobile apps",
          tension: 0,
          borderWidth: 0,
          pointRadius: 5,
          pointBackgroundColor: "rgba(255, 255, 255, .8)",
          pointBorderColor: "transparent",
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6
  
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#f8f9fa',
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
  </Script> */}
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
  

  {/* <Script>
    function myFunction(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else { 
        x.className = x.className.replace(" w3-show", "");
      }
    }
    </Script> */}
    <div className="modal" id="myModal5" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

      
    <div className="modal-header bg-gradient-info">
        <h4 className="modal-title text-white">Add Packages</h4>
        <button type="button" className="btn btn-danger" data-dismiss="modal"><FontAwesomeIcon icon={faWindowClose}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} /></button>
       
      </div>
      
      <div className="modal-body">
        <div className="container w3-sans-serif">
          <form className="w3-panel needs-validation" onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="name">Package name:</label>
                <input type="text" className="form-control" id="packagename" placeholder=""  onChange={(e) => SetPackageName(e.target.value)} value={`${packagename}`} required/>
              </div>
              </div>
            <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="name">No. of Clients:</label>
              <input type="tel" className="form-control" id="no_of_Clients" placeholder=""  onChange={(e) => SetNo_of_Clients(e.target.value)} value={`${no_of_Clients}`}  required/>
            </div>
            
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="name">Staff:</label>
                <input type="tel" className="form-control" id="staff" placeholder="" onChange={(e) => SetStaff(e.target.value)} value={`${staff}`} required/>
              </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Plan:</label>
                  <input type="tel" className="form-control" id="plan" placeholder=""  onChange={(e) => SetPlan(e.target.value)} value={`${plan}`} required/>
                </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Basic Amount:</label>
                    <input type="tel" className="form-control" id="basicamount" placeholder=""  onChange={(e) => SetBasicAmount(e.target.value)} value={`${basicamount}`} required/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Discount:</label>
                    <input type="tel" className="form-control" id="discount" placeholder="" onChange={(e) => SetDiscount(e.target.value)} value={`${discount}`} required/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Storage:</label>
                    <input type="tel" className="form-control" id="storage" placeholder=""  onChange={(e) => SetStorage(e.target.value)} value={`${storage}`} required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">DeScription:</label>
                    <textarea placeholder="" id="deScription"  className="form-control" onChange={(e) => SetDeScription(e.target.value)} value={`${deScription}`} required></textarea>
                  </div>
                </div>
                <button type="button" className="btn bg-gradient-info btn-sm p-3">Calculate Discount <span className="font-weight-bold">12</span> </button>
                
            <div className="modal-footer">
            <button type="submit" onClick={addedpack} className="btn btn-success">Save</button>
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

