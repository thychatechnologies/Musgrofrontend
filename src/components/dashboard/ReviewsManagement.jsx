import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Ensure to install react-modal or use another modal component

const ReviewsManagement = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReviewId, setSelectedReviewId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        // Fetch reviews data on component mount
        axios.get('/api/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const handleDeleteReview = (id) => {
        setSelectedReviewId(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        axios.post('/api/delete-review', { id: selectedReviewId })
            .then(response => {
                setReviews(reviews.filter(review => review.id !== selectedReviewId));
                setIsModalOpen(false);
                setMessage('Review deleted successfully!');
                setMessageType('success');
            })
            .catch(error => {
                console.error('Error deleting review:', error);
                setMessage('Failed to delete review.');
                setMessageType('error');
            });
    };

    return (
        <div className="content">
            {/* Notification */}
            {message && (
                <div className={`intro-y col-span-11 alert alert-${messageType} alert-dismissible show flex items-center mb-6 mt-5 text-white`} role="alert">
                    <span><i data-lucide="info" className="w-4 h-4 mr-2"></i></span>
                    <span>{message}</span>
                    <button type="button" className="btn-close text-white" aria-label="Close" onClick={() => setMessage('')}>
                        <i data-lucide="x" className="w-4 h-4"></i>
                    </button>
                </div>
            )}

            <h2 className="text-primary text-center font-medium mt-10" style={{ fontSize: '30px' }}>Reviews</h2>

            <div className="col-span-12 mt-6 border-t border-dark pt-5">
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    {reviews.length > 0 ? (
                        <table className="table table-report sm:mt-2">
                            <thead>
                                <tr>
                                    <th className="text-center whitespace-nowrap">SL NO</th>
                                    <th className="text-center whitespace-nowrap">NAME</th>
                                    <th className="text-center whitespace-nowrap">PLACE</th>
                                    <th className="text-center whitespace-nowrap">ADDED DATE</th>
                                    <th className="text-center whitespace-nowrap">REVIEW</th>
                                    <th className="text-center whitespace-nowrap">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review, index) => (
                                    <tr key={review.id} className="intro-x">
                                        <td className="text-center whitespace-nowrap">{index + 1}</td>
                                        <td className="text-center whitespace-nowrap">{review.name}</td>
                                        <td className="text-center whitespace-nowrap">{review.place}</td>
                                        <td className="text-center whitespace-nowrap">{new Date(review.date).toLocaleDateString()}</td>
                                        <td className="text-center">{review.description}</td>
                                        <td className="table-report__action w-48">
                                            <div className="flex justify-center items-center">
                                                <button onClick={() => handleDeleteReview(review.id)} className="flex items-center text-danger">
                                                    <i data-lucide="trash" className="w-4 h-4 mr-1"></i>
                                                </button>
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
                                        <td className="width" style={{ width: '100%' }}>
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

            {/* Delete Confirmation Modal */}
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} contentLabel="Delete Confirmation">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="p-5 text-center">
                            <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i>
                            <div className="text-3xl mt-5">Are you sure?</div>
                            <div className="text-slate-500 mt-2">Do you really want to delete this record? This process cannot be undone.</div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                            <button onClick={confirmDelete} className="btn btn-danger w-24">Delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ReviewsManagement;
