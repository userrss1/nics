import React, { useState } from 'react'
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

export async function getServerSideProps({ req, response }) {
  const cookies = new Cookies(req, response)


  const BASE_URL = `${process.env.HOST}`


  let token1 = null

  if (cookies.get('access_token')) {
    token1 = cookies.get('access_token')
  } else {
    token1 = null
  }
     console.log("Organisation token")
     console.log(token1)

  return {
    props: {
      token1, BASE_URL
    },
  };
};


export default function Addorganisation({ token1, BASE_URL }) {

  const [data, setData] = useState({
    name1: "",
    name2: "",
    name3: ""
  })

  function submit(e) {
    e.preventDefault();
  }

  const postOrg = () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token1}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": data.name1
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(BASE_URL +"/sa/organisations", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  const postOrganisation = (e) => {

    const newdata = { data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    console.log("hiiii")

  }

  const postInd = () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token1}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": data.name2
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(BASE_URL +"/sa/industries", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  const postIndustry = (e) => {

    const newdata = { data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    console.log("hiiii")

  }


  const postDes = () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token1}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": data.name3
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(BASE_URL +"/sa/designations", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  const postDesignation = (e) => {

    const newdata = { data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    console.log("hiiii")

  }
     console.log("3 data")
     console.log(data)

  return (
    <>
      <Head>
        <meta charset="utf-8" />
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
                        <Link href="/super-admin/Registeredca"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faUsers} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Registered users</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/New_reg"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
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
                        <Link href="/super-admin/Packages"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
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
                        <Link href="/super-admin/Planexpiring"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faFrown} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Plan Expriring</span>
                        </a></Link>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <Link href="/super-admin/Payment"><a className="nav-link text-white " style={{ display: 'inline-block' }}>
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
                    <Link href="/super-admin/sign-in"><a className="nav-link text-body font-weight-bold px-0">
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
        </main>
        {/* .container.my-auto {
    width: 80%;
    margin-left: 20%;
} */}
        <section style={{ width: "80%", marginLeft: "20%" }}>
          <main className="main-content mt-6">
            <div className="container my-auto">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 mx-auto my-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                        <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Add Organisation</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-body w3-margin">
                        <div className="col-lg-12">
                          <form role="form" className="needs-validation" onSubmit={(e) => submit(e)}>
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Name of the Organisation</label>
                              <input type="name" className="form-control" onChange={(e) => postOrganisation(e)} id="name1" value={data.name1} required />
                            </div>

                            <div className=" mt-4">
                              <button type="submit" className="btn btn-success" onClick={postOrg}>Submit</button>
                            </div>
                          </form>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mx-auto my-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                        <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Add Industry</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-body w3-margin">
                        <div className="col-lg-12">
                          <form role="form" className="needs-validation" onSubmit={(e) => submit(e)}>
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Name of the Industry</label>
                              <input type="name" className="form-control" onChange={(e) => postIndustry(e)} id="name2" value={data.name2} required />
                            </div>

                            <div className=" mt-4">
                              <button type="submit" className="btn btn-success" onClick={postInd}>Submit</button>
                            </div>
                          </form>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mx-auto my-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                        <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Add Designation</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-body w3-margin">
                        <div className="col-lg-12">
                          <form role="form" className="needs-validation" onSubmit={(e) => submit(e)}>

                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Your Designation</label>
                              <input type="name" className="form-control" onChange={(e) => postDesignation(e)} id="name3" value={data.name3} required />
                            </div>


                            <div className=" mt-4">
                              <button type="submit" className="btn btn-success" onClick={postDes}>Submit</button>
                            </div>
                          </form>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </section>
        <footer className="footer py-4">
          <main>
            <div>
              <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="copyright text-center text-sm text-muted text-lg-start">
                    © <script>
                  document.write(new Date().getFullYear())
                </script>2022
                      <i className="fa fa-heart"></i>
                      <Link href="https://www.placiddigital.com/#"><a  className="font-weight-bold" target="_blank" rel="noreferrer">Placid digital</a></Link>
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
            </div>
          </main>
        </footer>

        <Script src="../assets/js/core/popper.min.js"></Script>
        <Script src="../assets/js/core/bootstrap.min.js"></Script>
        <Script src="../assets/js/plugins/perfect-scrollbar.min.js"></Script>
        <Script src="../assets/js/plugins/smooth-scrollbar.min.js"></Script>
        <Script src="../assets/js/plugins/chartjs.min.js"></Script>
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

        <Script async defer src="https://button
s.github.io/buttons.js"></Script>

        <Script src="../assets/js/material-dashboard.min.js?v=3.0.0"></Script>


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

      </body>
    </>
  )
}
