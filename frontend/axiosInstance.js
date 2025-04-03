import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
})

instance.interceptors.request.use(
    async (config) => {
        
        try {
            const token = localStorage.getItem("token");
            config.headers.Authorization=`Bearer ${token}`;
            return config;
        }
        catch(error){
            console.log("Error in request interceptor", error);

        }
    }
)
//response interceptor to handle errors
instance.interceptors.response.use(
   (response) =>{
    console.log("Response data:", response.data);
    return response;

   },
   (error)=>{
    console.error("Response error:",error);
    if(error.reponse.status === 401){
        console.log("Unauthorized error.Redirecting to login ...");
    }

   }
);







export default instance;
