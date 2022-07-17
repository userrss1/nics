import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Protect from './Protect'

export default function Newuserform1() {
  return (
    <>
      <Head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/super-admin/img/apple-icon.png"/>
  <link rel="icon" type="image/png" href="/super-admin/img/favicon.png"/>
  <title>
    Material Dashboard 2 by Creative Tim
  </title>
  
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  
  <link href="/super-admin/css/nucleo-icons.css" rel="stylesheet" />
  <link href="/super-admin/css/nucleo-svg.css" rel="stylesheet" />
  


  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

  <link id="pagestyle" href="/super-admin/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
</Head>

 <Protect />


<body className="bg-gray-200">
  <main className="main-content mt-0">
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url(/super-admin/img/banner.jpeg)'}}>
    <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-6 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
           
            <div className="row">
              <div className="card-body">
              
                  <div className="row">
                    <h5 className="text-black font-weight-bolder text-center mt-2 mb-0 py-2">NEW USER REGISTRATION</h5>
                    <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">First Name:</label>
                    <input type="text" className="form-control"/>
                  </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Mobile:</label>
                    <input type="tel" className="form-control"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">E-mail-id:</label>
                    <input type="email" className="form-control"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group input-group-outline mb-3">
                    
                      <input type="file" id="myFile" name="filename"/>
                   
                  </div>
                </div>
                    <h5 className="text-black font-weight-bolder text-center mt-2 mb-0 py-4 my-2">NEW USER REGISTRATION-ORGANISATION DETAILS</h5>
                  <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Organisation:</label>
                    <input type="text" className="form-control"/>
                  </div>
                 </div>
                 <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <select id="heard" className="form-control" required>
                      <option value=""><b>Industry</b></option>
                      <option value="">A</option>
                      <option value="press">B</option>
                      <option value="net">C</option>
                      <option value="mouth">D</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">GSTIN:</label>
                    <input type="text" className="form-control"/>
                  </div>
                 </div>
                 <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Address:</label>
                    <input type="text" className="form-control"/>
                  </div>
                 </div>
                 <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <select id="heard" className="form-control" required>
                      <option value=""><b>Constitution</b></option>
                      <option value="">A</option>
                      <option value="press">B</option>
                      <option value="net">C</option>
                      <option value="mouth">D</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <select id="heard" className="form-control" required>
                      <option value=""><b>Country</b></option>
                      <option value="">A</option>
                      <option value="press">B</option>
                      <option value="net">C</option>
                      <option value="mouth">D</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">State:</label>
                    <input type="text" className="form-control"/>
                  </div>
                </div>
                 <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">District:</label>
                    <input type="text" className="form-control"/>
                  </div>
                 </div>
                 <div className="col-lg-4">
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Pincode:</label>
                    <input type="text" className="form-control"/>
                  </div>
                 </div>
                
                 <div className="col-lg-12">
                 <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Remark* (if declined)</label>
                    <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center">
                      <a href="#" type="button" className="btn btn-sm font-weight-bolder bg-gradient-info mt-2 mb-0">Approve</a>
                      <a href="#" type="button" className="btn btn-sm font-weight-bolder bg-gradient-danger mt-2 mb-0">Deny</a>
                    </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <a href="/super-admin/New_reg" type="button" className="btn btn-sm font-weight-bolder bg-gradient-info mt-2 mb-0">Go-back</a>
                       
                      </div>
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

  <Script src="../assets/js/material-dashboard.min.js?v=3.0.0"></Script>
</body>

    </>
  )
}
