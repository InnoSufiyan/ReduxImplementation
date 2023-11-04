import React, { useState } from 'react';

const PrivateJobPosting = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobType, setJobType] = useState('');

    return (
        <div>
            <h2>Job Posting</h2>
            <label>
                Job Title:
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label>
                Job Description:
                <input type="text" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
            </label>
            <label>
                Job Location:
                <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
            </label>
            <label>
                Job Type:
                <input type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} />
            </label>
        </div>
    );
};

export default PrivateJobPosting;
