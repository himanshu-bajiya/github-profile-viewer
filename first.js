import { useEffect, useState} from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Generateprofile from "./components/Generateprofile";

function Fetchprofile(){
    let [profile , setprofile] = useState([])
    let ran = Math.floor(1+Math.random()*6000)
    useEffect(()=>{
 async function fetchprofile(){
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=20`)
        const data = await response.json()
        setprofile(data)

    }
    fetchprofile();
    },[])
  
  
    return(
       <div className="gen"> 
        {profile.map((user,index)=>{
   return (
     < > 
     
   <Generateprofile
      key={index}
      name ={user.login}
      image ={user.avatar_url}></Generateprofile>
      </>)  
        })}
    </div>    
    );
    

}




function Profileviewer(){
   return(<>
    <Header></Header>
    <Fetchprofile></Fetchprofile>
    </>
   )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Profileviewer></Profileviewer>)