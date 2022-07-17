import React from 'react'
import Link from 'next/link'

const UserNavbar = () => {
  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href="#">
        <img src="/ca-admin/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="CA1"/>
        <span className="ms-1 font-weight-bold text-white">CA Admin</span>
      </a>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/ca-admin/Dashboard"><a className="nav-link text-white active bg-gradient-info" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">dashboard</i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </a>
          </Link>
        </li>  
        <li className="nav-item mt-3">
          <Link href="/ca-admin/Staff" onClick="myFunction('Demo1')"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Staff</h6></a></Link>
          <div id="Demo1" className="w3-container w3-hide">
           {/* <!-- <a className="nav-link text-white " href="registeredca.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1">Staff</span>
            </a>
            <a className="nav-link text-white " href="new_reg.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-exclamation" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1">Pending Approvals</span>
            </a>>--> */}
          </div>
        </li>
        <li className="nav-item mt-3">
          <Link href="/ca-admin/Clients"><a  onClick="myFunction('Demo2')"><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">user</h6></a></Link>
          <div id="Demo2" className="w3-container w3-hide">
            {/* <!-- <a className="nav-link text-white " href="packages.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1">View</span>
            </a>--> */}
         
          </div>
        </li>
        <li className="nav-item mt-3">
          <Link href="/ca-admin/MySpace"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Server</h6></a></Link>
        </li>
        <li className="nav-item mt-3">
          <a href="#"><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Staff Attendence</h6></a>
        </li>
        <li className="nav-item mt-3">
          <Link href="/ca-admin/Complaintform"><a><h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">COMPLAINTS</h6></a></Link>
        </li>
   
      </ul>
    </div>
  </aside>
    </>
  )
}

export default UserNavbar
