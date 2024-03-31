import baseUrl from '../../config/constant.js';
import Utils from '../utils';

const GetJobs = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const apiOptions = {
                endpoint: `${baseUrl}/jobAds/all?limit=${limit}&pageNo=1&keyWord=&category=`,
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            };
            const apiResponse = await Utils.CallApi(apiOptions);
            if (apiResponse.status === 200) {
                resolve(apiResponse.data);
            } else {
                resolve(apiResponse.response.data);
            }
        } catch (error) {
            reject(error);
        }
    });
};



const GetJob = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                firstName,
                lastName,
                userName,
                email,
                password,
                cPassword
            } = payload;
            const apiOptions = {
                endpoint: `${baseUrl}/auth/signup`,
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                data: {
                    firstName,
                    lastName,
                    userName,
                    email,
                    password,
                    cPassword
                },
            };
            const apiResponse = await Utils.CallApi(apiOptions);
            console.log(apiResponse, "apiResponse")
            if (apiResponse?.response) {
                resolve(apiResponse.response.data);
            } else {
                resolve(apiResponse.data);
            }
        } catch (error) {
            reject(error);
        }
    });
};

const JobsActions = {
    GetJobs,
    GetJob,
};

export default JobsActions;