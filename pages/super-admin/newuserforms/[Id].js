
import React, { useEffect, useState } from 'react'
import Cookies from 'cookies'
import axios from 'axios'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { StylesContext } from '@material-ui/styles';
import styles from '../../../styles/Dashboard.module.css'
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

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res)
  let err = ''
  let status = false

  const token2 = cookies.get('cid')
  console.log(token2)

  const BASE_URL = `${process.env.HOST}`


  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }

  // await getBody('http://192.168.1.101:8081/api/login/');




  var raw = JSON.stringify({
    "user_id": `${token2}`
  });


  const { data } = await axios(BASE_URL +"/user/",
    {
      headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
      mode: 'cors', method: 'POST', data: raw
    });

  console.log(data)


 console.log("hwdfhw")




  console.log(token1)



  return {

    props: {
      token1, data


    }
  };
}


export default function Id({data, token1, BASE_URL}) {

  console.log(data)
  console.log("data fdata")

  const [id, SetId] = useState("")
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
  const [pincodes, SetPincode] = useState("")
  const [districts, SetDistrict] = useState("")
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(id, first_names, last_names, mobile_nos, email_ids, designation_ids, organisation_ids, industry_ids, GSTINs, Constitutions, addresss, countrys, states, pincodes, districts)
    console.log(token1)


  }

  async function addedpack({token1}) {

   
       
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token1}`);

    const first_names1 = document.getElementById("exampleInputFirstName").value;
    const last_names1 = document.getElementById("exampleInputLastName").value;
    const mobile_nos1 = document.getElementById("exampleInputMobile").value;
    const email_ids1 = document.getElementById("exampleInputEmail").value;
    const designation_ids1 = document.getElementById("exampleInputDesignation").value;
    const organisation_ids1 = document.getElementById("exampleInputOrganisation").value;
    const industry_ids1 = document.getElementById("exampleInputIndus").value;
    const GSTINs1 = document.getElementById("exampleInputConst").value;
    const Constitutions1 = document.getElementById("exampleInputGST").value;
    const addresss1 = document.getElementById("exampleInputAddress").value;
    const countrys1 = document.getElementById("exampleInputCount").value;
    const states1 = document.getElementById("exampleInputState").value;
    const pincodes1 = document.getElementById("exampleInputPin").value;
    const districts1 = document.getElementById("exampleInputDis").value;
  
    
    var raw = JSON.stringify({
      "id": `${data.id}`,
      "first_name": `${first_names1}`,
      "last_name": `${last_names1}`,
      "mobile_no":`${mobile_nos1}`,
      "email_id": `${email_ids1}`,
      "designation_id":`${designation_ids1}`,
      "organisation_id": `${organisation_ids1}`,
      "industry_id": `${industry_ids1}`,
      "Constitution": `${Constitutions1}`,
      "GSTIN":`${GSTINs1}`,
      "address": `${addresss1}`,
      "country": `${countrys1}`,
      "state": `${states1}`,
      "pincode":`${pincodes1}`,
      "district": `${districts1}`
    }
    );
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
    fetch(BASE_URL+ "/sa/user", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
    }





  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="76x76" href="/super-admin/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
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
      {/* <><Button variant="contained" color="primary" onClick={() => router.push("/super-admin/AddUser")}>Add User</Button><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.contact}</TableCell>
              <TableCell align="center">{user.address}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button style={{ marginRight: "5px" }} color="warning" onClick={() => handleDelete(user.id)}>delete</Button>
                  <Link href={`/EditUser/${user.id}`}>
                  <Button color="primary">Edit</Button>
                  </Link>

                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></> */}

    
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
                <a className="nav-link text-white active bg-gradient-info" href="/super-admin/Dashboard">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
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
                        <a className="nav-link text-white " href="/super-admin/Registeredca" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faUsers} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Registered users</span>
                        </a>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <a className="nav-link text-white " href="/super-admin/New_reg" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faExclamation} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Pending Approvals</span>
                        </a>
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
                        <a className="nav-link text-white " href="/super-admin/Addpackage" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faPlus} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Add Packages</span>
                        </a>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <a className="nav-link text-white " href="/super-admin/Packages" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faEye} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />View</span>
                        </a>
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
                        <a className="nav-link text-white " href="/super-admin/Planexpiring" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faFrown} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Plan Expriring</span>
                        </a>
                      </AccordionDetails>
                    </li>
                    <li style={{ width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <AccordionDetails style={{ padding: '0px' }}>
                        <a className="nav-link text-white " href="/super-admin/Payment" style={{ display: 'inline-block' }}>
                          <span className={styles.pack} style={{ display: 'inline-block' }}><FontAwesomeIcon icon={faInr} style={{ fontSize: 100, color: "white", height: "15px", padding: '0px 3px' }} />Payment Recieved</span>
                        </a>
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
                <h6 className="font-weight-bolder mb-0"></h6>
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
                    <Link href="/super-admin/Sign-in"><a  className="nav-link text-body font-weight-bold px-0">
                      <FontAwesomeIcon icon={faSignOut} style={{ fontSize: 100, color: "black", height: "15px", padding: '7px 3px' }} />
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
                      <FontAwesomeIcon icon={faCog} style={{ fontSize: 100, color: "black", height: "15px", padding: '7px 3px' }} />
                    </a>
                  </li>

                  <li className={styles.design}>
                    <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspo>

                      <FontAwesomeIcon icon={faBell} style={{ fontSize: 100, color: "black", height: "15px", padding: '7px 3px' }} />
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



          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-12 mx-auto my-auto py-4">
              <div className="card z-index-0 fadeIn3 fadeInBottom w3-panel w3-card-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                    <h6 className="text-white font-weight-bolder text-center mb-0">NEW USER REGISTRATION-CONTACT DETAILS</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="card-body">
                    <div className="col-lg-12">
                      <form role="form" className="needs-validation" onSubmit={handleSubmit}>
                        <div className="row">
                        {data.map((o, i) => {
                         return(
                         <>
                          <div className="col-lg-6">
                        
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{o.first_name}</label>
                              <input type="text" className="form-control" id="exampleInputFirstName" onChange={(e) => SetFirst_name(e.target.value)} value={`${first_names}`}  />
                              <div className="valid-feedback">Valid.</div>
                              <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                        
                    
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{o.last_name}</label>
                              <input type="text" className="form-control" id="exampleInputLastName" onChange={(e) => SetLast_name(e.target.value)} value={`${last_names}`}   />
                              <div className="invalid-feedback">Please fill out this field.</div>

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{o.mobile_no}</label>
                              <input type="tel" className="form-control" id="exampleInputMobile" onChange={(e) => SetMobile_no(e.target.value)} value={`${mobile_nos}`}  />
                              <div className="invalid-feedback">Please fill out this field.</div>

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{o.email_id}</label>
                              <input type="email" className="form-control" id="exampleInputEmail"  onChange={(e) => SetEmail_id(e.target.value)} value={`${email_ids}`}  />
                              <div className="invalid-feedback">Please fill out this field.</div>

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <input type="file" id="myFile" name="filename" />
                          </div>
                          </>
                         )
                     })}
                          <div className="card-header p-0 position-relative z-index-2 mt-2">
                            <div className="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                              <h6 className="text-white font-weight-bolder text-center mb-0">NEW USER REGISTRATION-ORGANISATION DETAILS</h6>
                            </div>
                          </div>

                          {data.map((u, i) => {
                         return(
                         <>

                          <div className="col-lg-4 mt-2">
                            <div className="input-group input-group-outline mb-3">
                            <select id="exampleInputOrganisation" className="form-control" onChange={(e) => SetOrganisation_id(e.target.value)} value={`${organisation_ids}`} >
                                <option value="">{u.organisation_id}</option>
                                <option value="">A</option>
                                <option value="press">B</option>
                                <option value="net">C</option>
                                <option value="mouth">D</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 mt-2">
                            <div className="input-group input-group-outline mb-3">
                            <select id="exampleInputIndus" className="form-control" onChange={(e) => SetIndustry_id(e.target.value)} value={`${industry_ids}`} >
                                <option value="">{u.industry_id}</option>
                                <option value="">A</option>
                                <option value="press">B</option>
                                <option value="net">C</option>
                                <option value="mouth">D</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 mt-2">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.GSTIN}</label>
                              <input type="text" className="form-control" id="exampleInputConst"  onChange={(e) => SetGSTIN(e.target.value)} value={`${GSTINs}`}  />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.address}</label>
                              <input type="text" className="form-control" id="exampleInputAddress"  onChange={(e) => SetAddress(e.target.value)} value={`${addresss}`}  />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.Constitution}</label>
                              <input type="text" id="exampleInputGST" className="form-control" onChange={(e) => SetConstitution(e.target.value)} value={`${Constitutions}`}  required />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <select id="exampleInputCount" className="form-control" onChange={(e) => SetCountry(e.target.value)} value={`${countrys}`}  required>
                                <option value="">{u.country}</option>
                                <option value="">A</option>
                                <option value="press">B</option>
                                <option value="net">C</option>
                                <option value="mouth">D</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.state}</label>
                              <input type="text" className="form-control" id="exampleInputState"  onChange={(e) => SetState(e.target.value)} value={`${states}`}  />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.district}</label>
                              <input type="text" className="form-control" id="exampleInputDis"  onChange={(e) => SetDistrict(e.target.value)} value={`${districts}`}  />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">{u.pincode}</label>
                             <input type="text" className="form-control" id="exampleInputPin"  onChange={(e) => SetPincode(e.target.value)} value={`${pincodes}`}  />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="text-left mt-2">
                              <button type="submit" onClick={addedpack} className="btn btn-success">Submit</button>
                              <Link href="/super-admin/registeredca"><a><button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button></a></Link>
                            </div>
                          </div>
                          </>
                         )
                     })}
                        </div>

                      </form>
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
