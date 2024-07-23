// src/components/ManageEvents.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await axios.get('/api/events/');
                setEvents(data);
            } catch (error) {
                setMessage('Error fetching events.');
            }
        };
        fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`/api/events/${eventId}/`);
            setEvents(events.filter(event => event.id !== eventId));
            setMessage('Event deleted successfully!');
        } catch (error) {
            setMessage('Error deleting event.');
        }
    };

    return (
        <div className="content">
            <div className="intro-y box py-10 sm:py-10 mt-5">
                <div className="intro-y block sm:flex items-center h-10">
                    <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                        <Link to="/add-event">
                            <button className="btn btn-primary ml-3">Add New Event</button>
                        </Link>
                    </div>
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    {events.length > 0 ? (
                        <table className="table table-report sm:mt-2">
                            <thead>
                                <tr>
                                    <th className="text-center whitespace-nowrap">SL NO</th>
                                    <th className="text-center whitespace-nowrap">EVENT</th>
                                    <th className="text-center whitespace-nowrap">IMAGE</th>
                                    <th className="text-center whitespace-nowrap">EVENT DATE</th>
                                    <th className="text-center whitespace-nowrap">START TIME</th>
                                    <th className="text-center whitespace-nowrap">END TIME</th>
                                    <th className="text-center whitespace-nowrap">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={event.id} className="intro-x">
                                        <td className="text-center whitespace-nowrap">{index + 1}</td>
                                        <td className="text-center whitespace-nowrap">{event.name}</td>
                                        <td className="flex justify-center">
                                            <div className="w-10 h-10 image-fit zoom-in">
                                                <img alt="Event Image" className="tooltip" src={event.image} title={`Uploaded at ${new Date(event.uploaded_at).toLocaleDateString()}`} data-action="zoom" />
                                            </div>
                                        </td>
                                        <td className="text-center whitespace-nowrap">{new Date(event.date).toLocaleDateString()}</td>
                                        <td className="text-center whitespace-nowrap">{event.start}</td>
                                        <td className="text-center whitespace-nowrap">{event.end}</td>
                                        <td className="table-report__action w-48">
                                            <div className="flex justify-center items-center">
                                                <button onClick={() => handleDelete(event.id)} className="flex items-center text-danger">
                                                    <i data-lucide="trash" className="w-4 h-4 mr-3"></i>
                                                </button>
                                                <Link to={`/edit-event/${event.id}`} className="flex items-center text-primary">
                                                    <i data-lucide="edit" className="w-4 h-4"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="intro-y col-span-12 overflow-auto 2xl:overflow-visible mt-3">
                            <table className="table table-report -mt-2">
                                <tbody>
                                    <tr className="intro-x width">
                                        <td className=" width" style={{ width: '100%' }}>
                                            <i data-lucide="hard-drive" style={{ width: '60px', height: '60px', marginLeft: 'auto', marginRight: 'auto', display: 'block', padding: '10px', borderRadius: '50%', background: '#e8e4e4' }} className="w-4 h-4 mr-2 text-primary"></i>
                                            <div style={{ textAlign: 'center' }}>No data available!</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageEvents;
