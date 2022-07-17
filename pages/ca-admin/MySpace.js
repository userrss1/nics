import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import cookieCutter from 'cookie-cutter'
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
  faHeart,
  faClock,
  faSignOut,
  faPencilSquare,
  faTrash,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import UserNavbar from './Navbar'


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

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token1}`);
  // work ahead continue
  var raw = JSON.stringify({
        "user_id": `${token2}`
      });

    

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

  const [data] = await Promise.all([
    fetch(BASE_URL +"/user/get_user_folder", requestOptions)
  ]);
  const [data1] = await Promise.all([
    data.json(), 
  
  ]);
  console.log(data1)
  

  




  return {

    props: {
      token1, token2, data1, BASE_URL 


    }
  };
}


export default function MySpace({token1, token2, data1, BASE_URL }) {

 

  const [profile_image , SetProfileImage] = useState("");
  const [loading,setloading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const router = useRouter()

  console.log("hiiiii")
  console.log(data1)
  
 

  const [data, setData] = useState({
    folder: ""
})

const postFol = () => {

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token1}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user_id": `${token2}`,
  "folder_name": `${data.folder}`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(BASE_URL +"/user/space_folder/", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  
  if(result.status == true){

     router.push('/ca-admin/MySpace')
      
  }else{
    alert(result.message)
  }
  }
  )
  .catch(error => console.log('error', error));
}


const postFolder = (e) => {

const newdata = {data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)
console.log("hiiii")

}

const handleSubmit = (e) => {

   
  e.preventDefault();

 




}

async function addedpack() {
console.log("192")
 console.log(data1)
 console.log(data1.folders[0].id)
 console.log(token1)
 console.log(token2)

  let fileInput = document.getElementById('profile_image')
  const file = fileInput.files[0];
     
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", undefined);
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token1}`);var formdata = new FormData();
  formdata.append('profile_image', file, `${profile_image}`);
  console.log('formData', formdata)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };fetch(BASE_URL +"/upload_user_file/?user_id="+`${token2}`+"&folder_id="+`${data1.folders[0].id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    SetProfileImage('')
    


  }
  return (
    <>
      <Head>
  <meta charset="utf-8" />
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
  <UserNavbar />
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
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h4 className="text-white text-center ps-3 px-4">My Space</h4>
                <button type="button" className="btn bg-gradient-success btn-sm mx-4">Request to another user</button>
                <input type="file" className="btn bg-gradient-warning btn-sm mx-4" style={{width:'210px'}}/>
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal3">
                 Create Folder
                </button>
                
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr >
                      <th className="text-uppercase text-secondary text-xl font-weight-bolder">Folder</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Files</th>
                      <th></th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Access to Clients</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                   
                    
                    <tr className="text-center collapse" id="coll">
                      <td>
                      </td>
                      <td>
                      </td>
                     <td>GSTR 3B</td>
                     <td><input type="checkbox" name="vehicle1" value="Bike"/></td>
                     
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-primary">
                                  <FontAwesomeIcon icon={faDownload}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                          </div>
                      </td>
                    </tr>
                  
                    {data1.folders.filter((a) => 
                     a.folder_name.toLowerCase().includes(searchTitle)
                    ).map((a, key) => {
                        return (
                            <div key={key}>
                    <tr >
                   
                      <td>
                        <a href="#coll1" className="btn btn-primary" data-toggle="collapse">{a.folder_name}</a>
                        </td>
                       
                       
                        <td>
                          <button type="button" className="btn bg-gradient-success" data-toggle="modal" data-target="#upload">
                            Upload File
                          </button>
                          </td>
                          
                        
                   
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                        <td className="align-middle text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-primary">
                                  <FontAwesomeIcon icon={faDownload}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                          </div>
                      </td>
                    </tr>
                    </div>
                        )
                    })}
                    <tr className="text-center collapse" id="coll1">
                      <td>
                      </td>
                      <td>
                      </td>
                     <td>ITR</td>
                     <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
                     
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-primary">
                                  <FontAwesomeIcon icon={faDownload}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                          </div>
                      </td>
                    </tr>
                    <tr className="text-center collapse" id="coll1">
                      <td>
                      </td>
                      <td>
                      </td>
                     <td>COMPUTATION</td>
                     <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
                     
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-primary">
                                  <FontAwesomeIcon icon={faDownload}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 3px'}} />
                                  </button>
                                </a>
                          </div>
                      </td>
                    </tr>
                   
                    <tr className="text-center collapse" id="coll2">
                      <td>
                      </td>
                      <td>
                      </td>
                     <td>E FILLING</td>
                     <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
                     
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'7px 3px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'7px 3px'}} />
                                  </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-primary">
                                  <FontAwesomeIcon icon={faDownload}  style={{ fontSize: 100, color: "white",height: "15px",padding:'7px 3px'}} />
                                  </button>
                                </a>
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
      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
           
            <div className="modal-header">
              <h4 className="modal-title">You want to delete?</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
           
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Yes</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal3">
        <div className="modal-dialog">
          <div className="modal-content">
          
            <div className="modal-header">
             <input type="text" placeholder="folder_name" onChange={(e) => postFolder(e)} id="folder" value={data.folder}/>
            </div>
           
            <div className="modal-footer">
              <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={postFol}>Save</button>
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
    </div>
  </main>


  <Script src="/ca-admin/js/core/popper.min.js"></Script>
  <Script src="/ca-admin/js/core/bootstrap.min.js"></Script>
  <Script src="/ca-admin/js/plugins/perfect-scrollbar.min.js"></Script>
  <Script src="/ca-admin/js/plugins/smooth-scrollbar.min.js"></Script>
  <Script src="/ca-admin/js/plugins/chartjs.min.js"></Script>
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
 
  <Script src="/ca-admin/js/material-dashboard.min.js?v=3.0.0"></Script>
    
 
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
       
        
       
        <div className="modal-body">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-center text-capitalize ps-3 px-4">GST</h6>
               
                <input type="file" className="btn bg-gradient-warning btn-sm mx-4"/>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr className="text-center">
                      <th className="text-uppercase text-secondary text-xl font-weight-bolder">Files</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">LAST 
                        DOWNLOAD 
                        <p id="demo">
                          <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">LAST 
                            UPLOAD </th></p>
                            <p id="demo"></p></th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                     <td>GSTR 3B</td>
                     <td></td>
                     <td></td>
                     
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                               <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                  </button>
                                </a>
                              
                          </div>
                      </td>
                    </tr>
                    <tr className="text-center">
                     
                     <td>GSTR 1</td>
                     <td></td>
                     <td></td>
                        <td className="align-middle text-center text-sm">
                          <div className="container mt-3">
                            <a href="#">
                              <button type="button" className="btn btn-success">
                              <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 0px'}} />
                              </button>
                                </a>
                                <a href="#"> 
                                  <button type="button" className="btn btn-danger">
                                  <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white",height: "15px",padding:'0px 0px'}} />
                                  </button>
                                </a>
                             
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
        
       
        <div className="modal-footer">
          <button type="button" className="btn btn-success">Download</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
    {/* {posts.filter((o) => 
                     o.folder_name.toLowerCase().includes(searchTitle)
                    ).map((o, key) => {
                        return (
                            <div key={key}> */}
    <div className="modal" id="upload">
        <div className="modal-dialog">
          <div className="modal-content">
           
            <div className="modal-header">
              <form onSubmit={handleSubmit}>
              <input type="file" className="form-control" name="file" id="profile_image"  onChange={(e) => SetProfileImage(e.target.value)} value={`${profile_image}`} />
              </form>
            </div>
  
            <div className="modal-footer">
                 
              <button type="submit" className="btn bg-gradient-success" data-dismiss="modal" onClick={addedpack}>Save</button>
              
             
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
           
          </div>
        </div>
      </div>
      {/* </div>
                        )})} */}
    {/* <Script>
      let text = document.lastModified;
      document.getElementById("demo").innerHTML = text;
      </Script> */}

<Script src="../JavaScript/ex153.js"></Script>
    
</body>
    </>
  )
}

