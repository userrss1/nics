import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Cookies from 'cookies'
import axios from 'axios'
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
  faSearch,
  faPencilSquare,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import Protect from './Protect'







export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res)
  let err = ''
  let status = false

  const BASE_URL = `${process.env.HOST}`


  let token1 = null
 
  if (cookies.get('access_token')){
       token1 = cookies.get('access_token')
  }else{
       token1 = null
  }

  // await getBody('http://192.168.1.101:8081/api/login/');




  var raw = JSON.stringify({
    "status": "approved"
  });


  const { data } = await axios(BASE_URL +`/sa/all_user`,
    {
      headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
      mode: 'cors', method: 'POST', data: raw
    });

  console.log(data)


 




  console.log(token1)



  return {

    props: {
      token1, data, BASE_URL


    }
  };
}




export default function Registeredca({data, token1, BASE_URL}) {
  

  const [loading,setloading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  console.log("hiiiii"+searchTitle)
  // console.log(posts.filter(val=>val.username.includes("ad")))
  
  useEffect(() => {

     const loadPosts = async () => {
       setloading(true);
       const response = await axios.get(BASE_URL+"/sa/search_user?q=", 
       {
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
      });
       setPosts(response.data.message);
       console.log(response.data.message[0].username)
       setloading(false)
     }

     loadPosts();
     
  }, [])




  const router = useRouter()
 

    
  const [first_name, SetFirst_Name] = useState('');
  const [last_name, SetLast_Name] = useState('');
  const [mobile_no, SetMobile_no] = useState('');
  const [email_id, SetEmail] = useState('');
  const [organisation_id, SetOrganisation_id] = useState('');
  const [organisation_name, SetOrganisation_name] = useState('');
  const [industry_id, SetIndustry_id] = useState("");
  const [industry_name, SetIndustry_name] = useState("");
  const [designation_id, SetDesignation_id] = useState("");
  const [designation_name, SetDesignation_name] = useState("");
  const [GSTINs, SetGSTIN] = useState("")
  const [Constitutions, SetConstitution] = useState("")
  const [addresss, SetAddress] = useState("")
  const [countrys, SetCountry] = useState("")
  const [states, SetState] = useState("")
  const [districts, SetDistrict] = useState("")
  const [passwords, SetPassword] = useState("")

  

  
    const stockData = [

    {
  
      "first_name": "abhijit",
      "last_name": "set",
      "mobile_no": "9165487962",
      "email_id": "abhijit@gmail.com",
      "designation_id": "bce92392-2acc-4919-be4c-f8588cc9dbb5",
      "organisation_id": "1cfdc1ca-e287-4e44-b7ff-bb16cbfcea53",
      "industry_id": "4ec33d71-4c2e-48ad-81e0-6ee55acfc93a",
      "Constitution": "dsfgd",
      "GSTIN": "dsfgd",
      "address": "dsfgd",
      "country": "dsfgd",
      "state": "dsfgd",
      "district": "dsfgd",
      "password": "dsfgd"
  
    },
  
  ];


  const datas = "Hello Everyone";
  //   return(
  //       <div>
          
  //       </div>
  //   );


  
    //  function addedjson()
    //  {
    //  ({
    //   "first_name": "abhijit",
    //   "last_name": "set",
    //   "mobile_no": "9165487962",
    //   "email_id": "abhijit@gmail.com",
    //   "designation_id": "bce92392-2acc-4919-be4c-f8588cc9dbb5",
    //   "organisation_id": "1cfdc1ca-e287-4e44-b7ff-bb16cbfcea53",
    //   "industry_id": "4ec33d71-4c2e-48ad-81e0-6ee55acfc93a",
    //   "Constitution": "dsfgd",
    //   "GSTIN": "dsfgd",
    //   "address": "dsfgd",
    //   "country": "dsfgd",
    //   "state": "dsfgd",
    //   "district": "dsfgd",
    //   "password": "dsfgd"
    //  })
    //  router.push("/super-admin/newuserforms")
    //  }

    function addedjson(param) {
     
      data = JSON.parse(param)
    
    router.push({
      pathname: '/super-admin/newuserforms/'+data.id,
     
     
  })
}
console.log("hi")
console.log(posts)


    const postDelete = (id) => {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token1}`);
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "user_id": `${id}`
      });
      
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(BASE_URL+"/sa/delete_user", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    }

  //   axios.delete(`http://192.168.1.101:8000/sa/delete_user/${id}`, 
  //   {
  //    headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}`},
  //  })
  //   .then(res => console.log('Deleted', res)).catch(err => console.log(err))
       

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
   

    {/* <Newuserforms datas={datas}/> */}

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
                        <Link href="/super-admin/Addpackage"><a className="nav-link text-white "  style={{ display: 'inline-block' }}>
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
          <h6 className="font-weight-bolder mb-0">Registered Users</h6>
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
              <Link href="/super-admin/Sign-in"><a  className="nav-link text-body font-weight-bold px-0">
              <FontAwesomeIcon icon={faSignOut}  style={{ fontSize: 100, color: "black",height: "15px",padding:'9px 3px'}} />&nbsp;
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
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h2 className="text-white text-center text-capitalize ps-3 px-6">Registered Users</h2>
                <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                  <input className="form-control text-center form-control-sm ml-3 w-25" type="text" placeholder="Search" onChange={(e) => setSearchTitle(e.target.value)}
                    aria-label="Search"/><br />
                    <br />
                    {/* {posts.message.map((e) => {
                         <h1>{e.username}</h1>
                    })} */}
                    {/* {posts.filter((val) => 
                     val.username.toLowerCase().includes(searchTitle)
                    ).map((val, key) => {
                        return (
                            <div key={key}>
                                <p>{val.username}</p>
                            </div>
                        )
                    })} */}
                    
                    <h4 className="px-4 text-white"><FontAwesomeIcon icon={faSearch}  style={{ fontSize: 100, color: "white", height: "15px",padding:'0px 3px'}} /></h4>
                </form>
                {/* {loading ? (
                  <h4>Loading...</h4>
                ):(
                   posts.message.map((item) =><h5 key={item.first_name}>{item.username}</h5>)
                )} */}
                 {/* {posts.message.map((e) => {
                         return(
                         <>
                          <h1>{e.username}</h1>
                            </>
                         )
                     })} */}
                     
                     
              </div>
            </div>

            
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
              {posts.filter((o) => 
                     o.username.toLowerCase().includes(searchTitle)
                    ).map((o, key) => {
                        return (
                            <div key={key}>
                <table className="table align-items-center mb-0">
                  <thead>
                    
                    <tr className="text-center">
                       
                    
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">USER ID</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">SUPER ADMIN STAFF ID</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">NAME/EMAIL ID</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">MOBILE NO.</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">STAFF</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">CLIENTS</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">GSTIN</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">PACKAGE</th>
                      <th className="text-center text-uppercase text-secondary text-xl font-weight-bolder">ACTION</th>
                     
                    </tr>
                  </thead>
                  <tbody>


                    <tr className="text-center">
                      <td>
     
                        <p className="text-xs font-weight-bold mb-0">{o.username}</p>
                     
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">0123456789</p>
                        </td>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <a href="#"><img src="/super-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1"/></a>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-bold">{o.first_name}</h6>
                              <h6 className="mb-0 text-bold">{o.last_name}</h6>
                              <p className="text-xs text-secondary mb-0">{o.email_id}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{o.mobile_no}</p>
                          </td>
                          <td>
                            {/* <p className="text-xs font-weight-bold mb-0">0123456789</p> */}
                            </td>
                            <td>
                              {/* <p className="text-xs font-weight-bold mb-0">0123456789</p> */}
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0">{o.GSTIN}</p>
                                </td>
                                <td>
                                  <select id="heard" className="form-control border-2" required="">
                                    <option value="press">Select</option>
                                    <option value="press">A</option>
                                    <option value="net"> B</option>
                                    <option value="net"> C</option>
                                  </select>
                                </td>
                                <td className="align-middle text-center text-sm">
                                  <div className="container mt-3">
                                  <Link href="/super-admin/newuserforms/id"><a><button type="button" data-index={JSON.stringify(o)} onClick={()=>addedjson(JSON.stringify(o))} className="btn bg-gradient-info" >
                                    <FontAwesomeIcon icon={faPencilSquare}  style={{ fontSize: 100, color: "white", height: "15px",padding:'0px 3px'}} />
                                      </button></a></Link>&nbsp;
                                   
                                    {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal1">
                                    <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white", height: "15px",padding:'0px 3px'}} />
                                    </button> */}

                                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal1" onClick={(e) => postDelete(o.id)}>
                                    <FontAwesomeIcon icon={faTrash}  style={{ fontSize: 100, color: "white", height: "15px",padding:'0px 3px'}} />
                                            </button>
                                    
                                  </div>
                               </td>
                                </tr>
                              
                                <div className="modal" id="">
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
                              <h4 className="modal-title">You want to delete?</h4>
                              <button type="button" className="btn-close" data-dismiss="modal"></button>
                            </div>
                          
                            <div className="modal-footer">
                              <button type="button" className="btn btn-success" data-dismiss="modal">Yes</button>
                              <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                
                      <div className="modal" id="">
                  <div className="modal-dialog">
             <div className="modal-content">

      
      <div className="container w3-sans-serif">
        <h3 className="w3-text-red">Update your details</h3>
        <form className="w3-panel w3-border">
         <div className="row">
          <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" name="email"/>
          </div>
          </div>
          <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          </div>
          <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="contact">Mobile no.:</label>
            <input type="tel" className="form-control" id="mobile" placeholder="Enter email" name="email"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="contact">Upload profile picture:</label>
            <input type="file"/>
          </div>
        </div>
        </div>
        </form>
      </div>
      
     <div className="modal-footer">
           <button type="button" className="btn btn-success" data-bs-dismiss="modal">Update</button>
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
    </div>

    </div>
  </div>
</div>


                        
                        <div className="modal" id="myModal4">
                          <div className="modal-dialog">
                            <div className="modal-content">
                        
                            
                              <div className="modal-header">
                                <h4 className="modal-title"><i className="fa fa-trash" aria-hidden="true"></i></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              
                              <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Yes</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                  </tbody>
                </table>
                </div>
                        )
                    })}
              </div>
            </div>
           
                    
          </div>
        </div>
      </div>
      {/* <form>
         <input type="text" value={first_name} onChange={e => SetFirst_Name(e.target.value)}/>
         <input type="text" value={last_name} onChange={e => SetLast_Name(e.target.value)}/>
         <h2>Your first name is - {first_name}</h2>
         <h2>Your last name is - {last_name}</h2>
         <h2>{JSON.stringify(first_name)}</h2>
         <h2>{JSON.stringify(last_name)}</h2>

    <Link
          href={{
            pathname: "/super-admin/newuserforms",
            query: token1, // the data
          }}
>
         <a>Some Text</a> 
</Link>
      </form> */}
  
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
