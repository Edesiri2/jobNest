import react, { useEffect, useState } from "react";
import  axios from "axios";
import { ActivityIndicator } from "react-native";


const FetchApi = (query)=>{

    const [jobData, setJobData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)

    const options = {
        method: 'GET',
        url: 'https://indeed12.p.rapidapi.com/jobs/search',
        params: {
          query: 'manager',
          location: 'chicago',
          page_id: '1',
          locality: 'us',
          fromage: '1',
          radius: '50',
          sort: 'date'
        },
        headers: {
          'x-rapidapi-key': '733c453936msh491b5a2a3f23953p136746jsnb4794ded9d40',
          'x-rapidapi-host': 'indeed12.p.rapidapi.com'
        }
      };

    const getJobData = async()=>{
        setIsLoading(true)
       
        try{
            const response = await axios.request(options)
            console.log(response.data.hits);
            setJobData(response.data.hits)
            setIsLoading(false)

        }
        catch(error){
            setErr(err)
            console.log(error)}
            finally{
                setIsLoading(false)
            }     

    }
   
    useEffect(()=>{
     getJobData()   
    },[])
    return{
        jobData,err,isLoading
    }
}

export default FetchApi