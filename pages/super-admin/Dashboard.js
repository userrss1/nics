import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Cookies from 'cookies'
import { useRouter } from 'next/router'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary"
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
  faInr
} from "@fortawesome/free-solid-svg-icons";
import Protect from './Protect'


let access_token = ''

export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req,context.res)
   access_token = cookies.get('access_token')
  var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append( "Authorization", `Bearer ${access_token}`);
  const res = await fetch(`${process.env.HOST}/sa/super_admin_dashboard/`, { headers:  myHeaders });
  const data = await res.json();
 

  // let token1 = null
 
  // if (cookies.get('access_token')){
  //      token1 = cookies.get('access_token')
  // }else{
  //      token1 = null
  // }
  
 

  return {
      props: {
        access_token, data
      },
  };
};
  



export default function Dashboard({ data,  token1 }) {

    

  const router = useRouter();
    

 
 console.log(data)
 console.log(access_token)


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="76x76" href="/super-admin/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/super-admin/img/favicon.png" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <title>
          Admin pannel created by placid
        </title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

        <link href="/super-admin/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/super-admin/css/nucleo-svg.css" rel="stylesheet" />



        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />

        <link id="pagestyle" href="/super-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />


        <style jsx>{`
    .accordion {
      cursor: pointer;
      transition: 0.4s;
    }
    .panel {
      display: none;
      overflow: hidden;
    }
  `}</style>

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

            <ul className="navbar-nav" id="sidenav-collapse-main" style={{ overflow: 'hidden' }}>
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

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-black font-weight-bolder opacity-8 accordion" style={{ color: 'black', fontSize: '12px', width: '180px', textAlign: 'left' }}>REGISTERED USER ADMINS</h6>
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

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-black font-weight-bolder opacity-8 accordion" style={{ color: 'white', fontSize: '12px', width: '180px', textAlign: 'left' }}>PACKAGE</h6>
                  </AccordionSummary>
                  <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                    <li style={{ display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Addpackage"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
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

                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-black font-weight-bolder opacity-8 accordion" style={{ color: 'white', fontSize: '12px', width: '180px', textAlign: 'left' }}>PAYMENT STATUS</h6>
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
                <h6 className="font-weight-bolder mb-0">Dashboard</h6>
              </nav>
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label"> Type here...</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <Link href="/super-admin/Logout"><a  className="nav-link text-body font-weight-bold px-0">
                      <FontAwesomeIcon icon={faSignOut} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
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
                      <FontAwesomeIcon icon={faCog} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
                    </a>
                  </li>

                  <li className={styles.design}>
                    <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspo>

                      <FontAwesomeIcon icon={faBell} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5" style={{ width: "300px", padding: '20px 12px 2px 10px', textAlign: 'center' }}>
                      <div className="my-auto">

                      </div>
                      <div className={styles.first}>
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <FontAwesomeIcon icon={faClock} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
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
                          <FontAwesomeIcon icon={faClock} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
                          1 day
                        </p>
                      </div>
                      <div className={styles.third}>
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <FontAwesomeIcon icon={faClock} style={{ fontSize: 100, color: "black", height: "15px", padding: '0px 3px' }} />
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
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">assignment</i>
                    </div>
                    <div className="text-end pt-1">
                   
                      <b className="text-sm mb-0 py-6">Approved Users</b>
                     
                     {data.map((o) => {
                         return(
                         <>
                      <h4 className="mb-0">{o.approved_users}</h4>
                      </>
                         )
                     })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">assignment</i>
                    </div>
                    <div className="text-end pt-1">
                      <b className="text-sm mb-0 py-6">Total Clients</b>
                      <h4 className="mb-0">2,300</h4>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">assignment</i>
                    </div>
                    <div className="text-end pt-1">
                      <b className="text-sm mb-0 py-6">Total Staff</b>
                      {data.map((c) => {
                         return(
                         <>
                      <h4 className="mb-0">{c.admin_staff}</h4>
                      </>
                      )
                  })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-danger shadow-danger text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">attach_money
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <b className="text-sm mb-0 py-4">Packages</b>
                      {data.map((i) => {
                         return(
                         <>
                      <h4 className="mb-0">{i.package}</h4>
                      </>
                      )
                  })}
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">announcement
                      </i>
                    </div>
                    <div className="text-end pt-1">
                      <b className="text-sm mb-0 py-4">Pending Approval</b>
                      {data.map((t) => {
                         return(
                         <>
                      <h4 className="mb-0">{t.pending_users}</h4>
                      </>
                      )
                  })}
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">contact_phone</i>
                    </div>
                    <div className="text-end pt-1">
                      <b className="text-sm mb-0 py-4">Complaints Recieved</b>
                      <h4 className="mb-0">3,462</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-center text-capitalize ps-3">MONTHLY SALES CHART</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr className="text-center">
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Mobile No.</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <a href="#"><img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1" /></a>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">0123456789</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div className="container mt-3">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <a href="#"><img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1" /></a>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">0123456789</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div className="container mt-3">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <a href="#"><img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1" /></a>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">0123456789</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div className="container mt-3">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <a href="#"><img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1" /></a>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">0123456789</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div className="container mt-3">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                  <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />
                                </button>
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">


                    <div className="modal-header">
                      <h4 className="modal-title">Approve</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-success" data-bs-dismiss="modal">Yes</button>
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="modal" id="myModal1">
                <div className="modal-dialog">
                  <div className="modal-content">

                    <div className="modal-header">
                      <h4 className="modal-title">Decline</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-success" data-bs-dismiss="modal">Yes</button>
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card my-4">
                  <div className="card-header pb-0">
                    <h6>Orders overview</h6>
                    <p className="text-sm">
                      <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                      <span className="font-weight-bold">24%</span> this month
                    </p>
                  </div>
                  <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-success text-gradient">notifications</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-danger text-gradient">code</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-info text-gradient">shopping_cart</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-warning text-gradient">credit_card</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-info text-gradient">key</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                        </div>
                      </div>
                      <div className="timeline-block">
                        <span className="timeline-step">
                          <i className="material-icons text-dark text-gradient">payments</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card my-4">
                  <div className="card-header pb-0">
                    <h6>PACKAGE WISE
                      SALES OF CURRENT
                      MONTH</h6>
                    <p className="text-sm">
                      <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                      <span className="font-weight-bold">24%</span> this month
                    </p>
                  </div>
                  <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-success text-gradient">notifications</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-danger text-gradient">code</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-info text-gradient">shopping_cart</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-warning text-gradient">credit_card</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                        </div>
                      </div>
                      <div className="timeline-block mb-3">
                        <span className="timeline-step">
                          <i className="material-icons text-info text-gradient">key</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                        </div>
                      </div>
                      <div className="timeline-block">
                        <span className="timeline-step">
                          <i className="material-icons text-dark text-gradient">payments</i>
                        </span>
                        <div className="timeline-content">
                          <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                        </div>
                      </div>
                    </div>
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
                      <a href="https://www.placiddigital.com/#" className="nav-link text-muted" target="_blank" rel="noreferrer">Placid digital</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </footer>

        </main>


        <Script src="../assets/js/core/popper.min.js"></Script>
        <Script src="../assets/js/core/bootstrap.min.js"></Script>
        <Script src="../assets/js/plugins/perfect-scrollbar.min.js"></Script>
        <Script src="../assets/js/plugins/smooth-scrollbar.min.js"></Script>
        <Script src="../assets/js/plugins/chartjs.min.js"></Script>


        <Script async defer src="https://buttons.github.io/buttons.js"></Script>

        <Script src="../assets/js/material-dashboard.min.js?v=3.0.0"></Script>

        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></Script>
        <Script src="/super-admin/accordi.js"></Script>


      </body>
    </>
  )
}
