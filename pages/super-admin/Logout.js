import { checkCookies, removeCookies  } from 'cookies-next';


export async function getServerSideProps({ req, res }){
  

 
    
  
        if(checkCookies('cid2', {req, res}))
        {
           
            removeCookies('cid2', {req, res});
            

        }
        
   
      
       return{
        redirect: {
            permanent: false,
            destination: "/super-admin/Sign-in",
          }
        }
 
 };

  

export default function logout({token1}) {


    console.log(token1)

  
    return 

        

    
}