import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreSurvey.scss';

const PreSurvey = ({ participantNumber }) => { // Assume participantNumber is passed as a prop
    const [formData, setFormData] = useState({
        name: '', // Add name
        email: '', // Add email
        age: '',
        gender: '',
        education: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here, you would handle the form data, such as sending it to a server or storing it for later use.
        navigate('/TrustGame'); // Update this to your actual next stage route
    };

    return (
        <div className="pre-survey">
            <h1>Demografik Anket</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-gender'>
                    <label>Gender: </label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    /> Male</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    /> Female</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === 'Other'}
                        onChange={handleChange}
                    /> Other</label>
                </div>
                <div>
                    <label>Education Level: </label>
                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD or Higher">PhD or Higher</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>Your Participant Number: {participantNumber || 'Not Assigned'}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PreSurvey;