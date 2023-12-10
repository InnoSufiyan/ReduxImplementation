import React, { useState } from 'react';
import JobAdActions from '../redux/middleware/jobAd';

const JobAd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [image, setImage] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        // Handle form submission logic here
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('salary', salary);
        formData.append('photo', image);

        console.log(formData, "====>>>formData")

        try {
            const apiResponse = await JobAdActions.PostJobAd(formData);


            console.log(apiResponse, "====>>>apiResponse")


            if (apiResponse.status) {
                console.log("worked")
            } else {
                console.log("blunder")
            }
        } catch (error) {
            console.log("worked")
            // dispatch(loginFailed(error));
        }
    };

    return (
        <div>
            <h2>Create Job Ad</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} />

                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={handleDescriptionChange} />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" value={location} onChange={handleLocationChange} />

                <label htmlFor="salary">Salary:</label>
                <input type="text" id="salary" value={salary} onChange={handleSalaryChange} />

                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={handleImageChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JobAd;
