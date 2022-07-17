import React, {useState} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Script from 'next/script'
import Link from 'next/link'
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
  faSignOut
} from "@fortawesome/free-solid-svg-icons";
import UserNavbar from './Navbar'
import * as ReactBootStrap from 'react-bootstrap'

// import Protect from './Protect'


export async function getServerSideProps({ req, response }){
  const cookies = new Cookies(req, response)

  let token2 = null
 
  if (cookies.get('cid')){
       token2 = cookies.get('cid')
  }else{
       token2 = null
  }

    
    const BASE_URL = `${process.env.HOST}`
 

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

      var raws = JSON.stringify({
            "user_id": `${token2}`,
          });

          var rawp = JSON.stringify({
            "user_id": `${token2}`
          });
          

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var requestOptions1 = {
    method: 'POST',
    headers: myHeaders,
    body: raws,
    redirect: 'follow'
  };

  var requestOptions2 = {
    method: 'POST',
    headers: myHeaders,
    body: rawp,
    redirect: 'follow'
  };

  const [data1, datas1, datas2] = await Promise.all([
    fetch(BASE_URL+ "/user/user_dashboard", requestOptions), 
    fetch(BASE_URL+"/user/todo", requestOptions1),
    fetch(BASE_URL+"/user/staff", requestOptions2)
  ]);
  const [data, datas, datap] = await Promise.all([
    data1.json(), 
    datas1.json(),
    datas2.json()
  ]);
  console.log(data)
  console.log(datas)
  console.log(datap)
  return { props: { data, datas, BASE_URL, datap, token1, token2 } };

  
}


// export async function getServerSideProps({ req, res }) {
//   const cookies = new Cookies(req, res)
//   let err = ''
//   let status = false


//   let token1 = null
 
//   if (cookies.get('access_token')){
//        token1 = cookies.get('access_token')
//   }else{
//        token1 = null
//   }

//   // await getBody('http://192.168.1.101:8081/api/login/');




//   var raw = JSON.stringify({
//     "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//   });
  

//   const { data } = await axios('http://192.168.1.101:8000/user/user_dashboard',
//     {
//       headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
//       mode: 'cors', method: 'POST', data: raw
//     });

//   console.log(data)
  

//   var raws = JSON.stringify({
//     "user_id": "ff1e43b0-c7ab-42ff-8805-43533cf5b989",
//     "task": "to do"
//   });
  

//   const { datas } = await axios('http://192.168.1.101:8000/user/todo_list',
//     {
//       headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
//       mode: 'cors', method: 'POST', data: raws
//     });

//   console.log(datas)


 




//   console.log(token1)



//   return {

//     props: {
//       token1, data, datas


//     }
//   };
// }


export default function Dashboard({data, datas, BASE_URL, datap, token1, token2}) {

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  let timer1 = setTimeout(() => setIsRefreshing(true), 1000)
  // const refreshData = () => {
  //   router.replace(router.asPath);
  //   setIsRefreshing(true);
  // };
  React.useEffect(() => {
    () => {
      return () => {
        clearTimeout(timer1)
      }
    }
  }, [data, isRefreshing, datas, datap]);


    const [loading, setLoading] = useState(false);

   

     const router = useRouter()

  console.log(token2)
  console.log("hiii")
  const [data1, setData] = useState({
    mess: ""
})

const Clicked = () => {

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token1}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user_id": `${token2}`,
  "task": `${data1.mess}`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(BASE_URL +"/user/todo_list", requestOptions)
.then(response => response.json())
.then(result => {
  console.log(result)

  router.push('./Dashboard')

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


const Cli = (e) => {
        
  const newdata = {...data1}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    console.log("hiiii")
 
}

  
        
 console.log(data.message)
 console.log(datas.message)
 
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
   {/* <Protect /> */}
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
              <a  className="nav-link text-body font-weight-bold px-0">
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
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <b className="text-sm mb-0 text-capitalize  py-6">No. of Staff</b>
                {/* {data.message.map((o) => {
                         return(
                         <>
              
                <h4 className="mb-0">{o.approved_staff}</h4>
                </>
                         )
                     })}

                     {<ReactBootStrap.Spinner animation='border' />}
                  
              </div>
            </div>
          </div>
        </div>

   
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <b className="text-sm mb-0 text-capitalize py-6">No. of Clients</b>
                <h4 className="mb-0">0</h4>
              </div>
            </div>
            
          </div>
        </div>
      <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-danger shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">party_mode</i>
              </div>
              <div className="text-end pt-1">
                <b className="text-sm mb-0 text-capitalize py-6">Storage Usage</b>
                <h4 className="mb-0">0</h4>
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
                <h6 className="text-white text-capitalize ps-3">user List</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr className="text-center">
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Mobile No.</th>
                      {/* <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className="text-center">
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <Link href="#"><a><img src="/ca-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/></a></Link>
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
                          <FontAwesomeIcon icon={faCheckSquare}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faTimesCircle}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                        </div>
                      </td>
                    </tr> */}
                 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Staff List</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr className="text-center">
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Mobile No.</th>
                      {/* <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                  {isRefreshing ? datap.message.map((o) => {
                         return(
                         <>
                    <tr className="text-center">
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                           <a><img src="/ca-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/></a>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{o.first_name+" "+o.last_name}</h6>
                            <p className="text-xs text-secondary mb-0">{o.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">{o.mobile}</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        {/* <div className="container mt-3">
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faCheckSquare}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faTimesCircle}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                        </div> */}
                      </td>
                    </tr>
                    </>
                         )
                     }) :  <ReactBootStrap.Spinner animation='border' />}
                    {/* <tr className="text-center">
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                          <Link href="#"><a><img src="/ca-admin//img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/></a></Link>
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
                          <FontAwesomeIcon icon={faCheckSquare}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faTimesCircle}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                          <Link href="#"><a><img src="/ca-admin//img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/></a></Link>
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
                          <FontAwesomeIcon icon={faCheckSquare}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faTimesCircle}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          </div>
                        </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                          <Link href="#"><a><img src="/ca-admin//img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/></a></Link>
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
                          <FontAwesomeIcon icon={faCheckSquare}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                          <FontAwesomeIcon icon={faTimesCircle}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
                          </button>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">To Do List</h6>
              </div>
            </div>
            <div id="myDIV" className="header">
             
              <input type="text" placeholder="write something here and add" className="my-4 mx-4" onChange={(e) => Cli(e)} id="mess" value={data1.mess}/>
              <span  className="addBtn">  <button type="button" className="btn btn-success my-4" data-bs-toggle="modal" data-bs-target="#" onClick={Clicked}>
              <FontAwesomeIcon icon={faPlus}  style={{ fontSize: 100, color: "white",height: "17px",padding:'0px 3px'}} />
              </button></span>

            </div>
            
            <ul id="myUL">
           
            {isRefreshing ? datas.message.map((o) => {
                         return(
                         <>
              
              <li>{o.task}</li>
                </>
                         )
                     }) :  <ReactBootStrap.Spinner animation='border' />}
              
             
            </ul>
             
            
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
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
               
              </li>
              
            </ul>
          </div>
        </div>
      
    </footer>
  
</main>


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

<Script async defer src="https://buttons.github.io/buttons.js"></Script>

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
