import React from 'react'
import { useEffect } from 'react'
import Cookies from 'cookies'
import { useRouter } from 'next/router'

export async function getServerSideProps({ req, response }){
    const cookies = new Cookies(req, response)
  
    let token2 = null
   
    if (cookies.get('cid')){
         token2 = cookies.get('cid')
    }else{
         token2 = null
    }
  
   
  
    let token1 = null
   
    if (cookies.get('access_token')){
         token1 = cookies.get('access_token')
    }else{
         token1 = null
    }
  
  
  
            
  
   
  
  
    return { props: { token1, token2 } };
  
    
  }

const Protect = ({token1, token2}) => {

    console.log(token1)
    console.log(token2)
  
    const router = useRouter()
  
    useEffect(() => {
         if(token1)
         {
            router.push('/super-admin/Sign-in')
         }
    }, [])
  
      
  return (
    <div></div>
  )
}

export default Protect