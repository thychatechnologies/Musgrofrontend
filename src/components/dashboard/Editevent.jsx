import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Editevent() {
    const { id } = useParams();
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

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const { data } = await axios.get(`/api/events/${id}/`);
                setFormData({
                    name: data.name,
                    date: data.date,
                    start: data.start,
                    end: data.end,
                    description: data.description,
                });
            } catch (error) {
                setMessage('Error fetching event data.');
            }
        };
        fetchEvent();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            await axios.put(`/api/events/${id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Event updated successfully!');
            navigate('/manage-events');
        } catch (error) {
            setMessage('Error updating event.');
        }
    };

    return (
        <div className="content">
            <div className="intro-y box py-10 sm:py-10 mt-5">
                <h2 className="text-primary text-center font-medium" style={{ fontSize: '30px' }}>Edit Event</h2>
                {message && <div className="alert alert-info">{message}</div>}
                <div className="px-3 sm:px-10 mt-10 pt-10 border-t border-slate-200/60">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="name" className="form-label">Event Title</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter event Title" className="form-control" />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="image" className="form-label">Thumbnail</label>
                                <input type="file" name="image" onChange={handleChange} className="form-control" accept=".png, .jpg, .jpeg" />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="start" className="form-label">Start Time</label>
                                <input type="time" name="start" value={formData.start} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-4">
                                <label htmlFor="end" className="form-label">End Time</label>
                                <input type="time" name="end" value={formData.end} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} cols="10" rows="5" className="form-control" placeholder="Enter about event"></textarea>
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

export default Editevent
