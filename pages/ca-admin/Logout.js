import { checkCookies, removeCookies  } from 'cookies-next';


export async function getServerSideProps({ req, res }){
  

 
    
  
        if(checkCookies('cid', {req, res}))
        {
           
            removeCookies('cid', {req, res});
            

        }
        
   
      
       return{
        redirect: {
            permanent: false,
            destination: "/ca-admin/Sign-in",
          }
        }
 
 };

  

export default function logout({token1}) {


    console.log(token1)

  
    return 

        

    
}