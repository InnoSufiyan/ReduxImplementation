import axios from 'axios';

async function CallApi(apiOptions) {
    let apiResponse = {};

    console.log(apiOptions, "apiOptions")

    const config = {
        method: apiOptions.method,
        url: apiOptions.endpoint,
        headers: apiOptions.headers,
        data: apiOptions?.data,
    };

    await axios(config)
        .then((result) => {
            console.log(result, "===>>> result")
            apiResponse = result;
        })
        .catch((error) => {
            console.log(error, "===>>> error")
            apiResponse = error;

            const { status } = error.response;

            if (status === 401) {
                // eslint-disable-next-line no-use-before-define
                alert('Session Expired, Please login again. redirecting...');
                window.location.href = 'http://localhost:3000/auth/login';
            }
        });

    return apiResponse;
}

const Utils = {
    CallApi,
};

export default Utils;