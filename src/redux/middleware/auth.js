import baseUrl  from '../../config/constant.js';
import Utils from '../utils';

const UserLogin = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = payload;
            const apiOptions = {
                endpoint: `${baseUrl}/auth/login`,
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                data: {
                    email,
                    password,
                },
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



const UserSignup = (payload) => {
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

const AuthActions = {
    UserLogin,
    UserSignup,
};

export default AuthActions;