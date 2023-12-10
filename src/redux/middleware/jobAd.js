import baseUrl from '../../config/constant.js';
import Utils from '../utils.js';

const PostJobAd = (payload) => {
    console.log(payload, "===>>> payload")
    return new Promise(async (resolve, reject) => {
        try {
            const apiOptions = {
                endpoint: `${baseUrl}/jobAd`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                method: 'POST',
                data: payload
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

const JobAdActions = {
    PostJobAd,
};

export default JobAdActions;