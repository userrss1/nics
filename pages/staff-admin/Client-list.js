import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
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
  faSignOut
} from "@fortawesome/free-solid-svg-icons";

export default function Clientlist() {
  return (
   <>
   <Head>
   <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/staff-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/staff-admin/img/favicon.png"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  <title>
   Admin pannel created by placid
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/staff-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/staff-admin/css/nucleo-svg.css" rel="stylesheet" />
  

  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>

  <link id="pagestyle" href="/staff-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

   </Head>
     <body className="g-sidenav-show  bg-gray-200">
  <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href="#">
        <img src="/staff-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/>
        <span className="ms-1 font-weight-bold text-white">Staff Panel</span>
      </a>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white active bg-gradient-info" href="/staff-admin/dashboard">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">dashboard</i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>  
        <li className="nav-item mt-3">
          <a href="#"><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">ASSIGNED CLIENTS</h6></a>
        </li>
        <li className="nav-item mt-3">
          <a href="/staff-admin/assigned_work"><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">ASSIGNED WORK</h6></a>
        </li>
     
      </ul>
    </div>
  </aside>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0">Assigned Clients</h6>
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
              <a href="/staff-admin/sign-in" className="nav-link text-body font-weight-bold px-0">
              <FontAwesomeIcon icon={faSignOut}  style={{ fontSize: 100, color: "black",height: "15px",padding:'9px 3px'}} />&nbsp;
                <span className="d-sm-inline d-none">Logout</span>
              </a>
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
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">LIST OF ASSIGNED CLIENTS</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr className="text-center">
                      <th className="text-uppercase text-secondary text-xl font-weight-bolder">USER ID</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">NAME/EMAIL ID</th>

                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Button</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>
                        <p className="text-xs font-weight-bold mb-0">shivi28</p>
                      </td>
                        <td>
                          <div className="d-flex px-2 py-1">
                           
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-bold">John Michael</h6>
                              <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <button type="button" className="btn bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#myModal2" style={{width:'150px'}}>My space</button>&nbsp;
                            <button type="button" className="btn bg-gradient-info" data-bs-toggle="modal" data-bs-target="#myModal">
                             user space
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
      </div>
    </div>
    <footer className="footer py-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                 <i className="fa fa-heart"></i>
                <a href="https://www.placiddigital.com/#" className="font-weight-bold" target="_blank" rel="noreferrer">Placid digital</a>
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


  <Script src="/staff-admin/js/core/popper.min.js"></Script>
  <Script src="/staff-admin/js/core/bootstrap.min.js"></Script>
  <Script src="/staff-admin/js/plugins/perfect-scrollbar.min.js"></Script>
  <Script src="/staff-admin/js/plugins/smooth-scrollbar.min.js"></Script>
  <Script src="/staff-admin/js/plugins/chartjs.min.js"></Script>
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
  
  <Script src="/staff-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
  </body>
  <div className="modal" id="myModal2">
    <div className="modal-dialog">
        
       
        
        <div className="container-fluid py-4" style={{width: '800px', margin: 'auto'}}>
            <div className="row">
              <div className="col-12" >
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-warning shadow-warning border-radius-lg pt-4 pb-3">
                      <center><h6 className="text-white text-capitalize ps-3">My Space</h6></center>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr className="text-center">
                            <th className="text-uppercase text-secondary text-xl font-weight-bolder">Folder</th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Files</th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Access to Clients</th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                        <td>
                              <p className="text-xs font-weight-bold mb-0">CLIENTS UPLOAD PERMANENT FOLDER
                                <br/>FILES UPLOADED BY user
                              </p>
                        </td>
                           <td></td>
                           <td></td>
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                  </a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                  <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#">
                                   Move
                               </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <p className="text-xs font-weight-bold mb-0">GST </p>
                           </td>
                           <td></td>
                           <td>check box</td>
                         
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                  </a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                   <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>GSTR 3B</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>GSTR 1</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <p className="text-xs font-weight-bold mb-0">INCOME TAX  </p>
                           </td>
                           <td></td>
                           <td>check box</td>
                         
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                  </a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                   <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>ITR</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>COMPUTATION</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <p className="text-xs font-weight-bold mb-0">COMPANY LAW </p>
                           </td>
                           <td></td>
                           <td>check box</td>
                         
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>E FILLING</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
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
            </div>
    </div>
      </div>
    </div>
    <div className="modal" id="myModal">
    <div className="modal-dialog">
    
       
    
        <div className="container-fluid py-4" style={{width: '800px', margin: 'auto'}}>
            <div className="row">
              <div className="col-12" >
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                      <center><h6 className="text-white text-capitalize ps-3">user SPACE</h6></center>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr className="text-center">
                            <th className="text-uppercase text-secondary text-xl font-weight-bolder">Folder</th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Files</th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder"></th>
                            <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">UPLOADS</p>
                               </td>
                               <td></td>
                               <td>check box</td>
                             
                                  <td className="align-middle text-center text-sm">
                                    <div className="container mt-3">
                                      <a href="#">
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                           </button>
                                             </a>
                                           <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                              <i className="fa fa-trash" aria-hidden="true"></i>
                                           </button>
                                    </div>
                                </td>
                              </tr>
                              <tr className="text-center">
                                <td>
                                </td>
                               <td>FILES TO BE UPLOADED FOR CA ADMIN</td>
                               <td>check box</td>
                               
                                  <td className="align-middle text-center text-sm">
                                    <div className="container mt-3">
                                      <a href="#">
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                           </button>
                                             </a>
                                           <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                              <i className="fa fa-trash" aria-hidden="true"></i>
                                           </button>
                                    </div>
                                </td>
                              </tr>
                          <tr className="text-center">
                            <td>
                              <p className="text-xs font-weight-bold mb-0">GST </p>
                           </td>
                           <td></td>
                           <td>check box</td>
                         
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                  </a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                   <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>GSTR 3B</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>GSTR 1</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                              <p className="text-xs font-weight-bold mb-0">INCOME TAX  </p>
                           </td>
                           <td></td>
                           <td>check box</td>
                         
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                  </a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                   <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>ITR</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
                                       </button>
                                </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>
                            </td>
                           <td>COMPUTATION</td>
                           <td>check box</td>
                           
                              <td className="align-middle text-center text-sm">
                                <div className="container mt-3">
                                  <a href="#">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                       </button>
                                         </a>
                                       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                          <i className="fa fa-trash" aria-hidden="true"></i>
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
            </div>
        </div>
      </div>
    </div>
   </>
  )
}
