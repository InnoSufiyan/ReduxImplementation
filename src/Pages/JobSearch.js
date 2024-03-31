import axios from "axios"
import { useEffect } from "react"
import JobsActions from "../redux/middleware/jobs.js"
import { getJobsFailure, getJobsPending, getJobsSuccess } from "../redux/Slices/jobsSlice.js"
import { useDispatch, useSelector } from "react-redux"

export const JobSearch = () => {
    const dispatch = useDispatch()
    const { error, jobs, loading } = useSelector((state) => state.jobs)

    console.log(jobs, "===>> jobs")

    const getJobs = async () => {
        dispatch(getJobsPending())
        const apiResponse = await JobsActions.GetJobs(10);
        console.log(apiResponse, "==>> apiResponse")
        if (apiResponse.status) {
            dispatch(getJobsSuccess(apiResponse.data))
        } else {
            console.log(apiResponse)
            const payload = {
                message: apiResponse,
            };
            dispatch(getJobsFailure(payload));
        }
    }


    useEffect(() => {
        getJobs()
    }, [])

    return (
        <>
            <h1>
                Job Search Pages
            </h1>
            {
                loading && <h1>Loader chal raha</h1>
            }
            {
                error && <h1>Error aya hai</h1>
            }
            {
                jobs?.map((job) => (
                    <>
                        <p>{job.companyName}</p>
                        <h1>{job.designation}</h1>
                        <h3>{job.country}</h3>
                    </>
                ))
            }
        </>
    )
}