import React, { useContext,createContext, useState } from "react";
import jobs from "../hook/job";

const jobState = jobs;

export const appContext = createContext();

export const useAppContext= ()=> useContext(appContext)

export const AppProvider = ({children})=>{

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [jobData, setJobData] = useState([]);
  const [searchJob, setSearchJob] = React.useState("");
  const [activeJobType, setActiveJobType] = React.useState("Full Time");
  const [jobDescription, setJobDescription] = React.useState("Perfect");

    return(
        <appContext.Provider value={{activeJobType, setActiveJobType, searchJob,jobState, setSearchJob, jobDescription, setJobDescription, isLoading, setIsLoading, err, setErr, jobData, setJobData}}>
            {children}
            </appContext.Provider>
    )
}

