import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Addevents() {
    const [formData, setFormData] = useState({
        name: '',
        image: null,
        date: '',
        start: '',
        end: '',
        description: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            await axios.post('/api/events/add/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Event added successfully!');
            navigate('/manage-events');
        } catch (error) {
            setMessage('Error adding event.');
            console.error('Error adding event:', error);
        }
    };
    return (
        <div className="content">
            <div className="intro-y box py-10 sm:py-10 mt-5">
                <h2 className="text-primary text-center font-medium" style={{ fontSize: '30px' }}>Add Event</h2>
                {message && <div className="alert alert-info">{message}</div>}
                <div className="px-3 sm:px-10 mt-10 pt-10 border-t border-slate-200/60">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="name" className="form-label">Event Title</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter event title"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="image" className="form-label">Thumbnail</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    className="form-control"
                                    accept=".png, .jpg, .jpeg"
                                    required
                                />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="start" className="form-label">Start Time</label>
                                <input
                                    type="time"
                                    name="start"
                                    value={formData.start}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="end" className="form-label">End Time</label>
                                <input
                                    type="time"
                                    name="end"
                                    value={formData.end}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    cols="10"
                                    rows="5"
                                    className="form-control"
                                    placeholder="Enter about event"
                                    required
                                ></textarea>
                            </div>
                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                <button type="submit" className="btn btn-primary w-24 ml-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addevents
