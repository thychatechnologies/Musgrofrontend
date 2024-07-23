import React, { useState, useEffect } from 'react';


const ManageBanners = () => {
    const [banners, setBanners] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedBannerId, setSelectedBannerId] = useState(null);

    useEffect(() => {
        // Fetch banners from API or server
        // Replace with your API endpoint
        fetch('/your-endpoint-to-fetch-banners')
            .then(response => response.json())
            .then(data => setBanners(data))
            .catch(error => console.error('Error fetching banners:', error));
    }, []);

    const handleDelete = async () => {
        try {
            // Replace with your API endpoint
            const response = await fetch('/your-endpoint-to-delete-banner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ banner_id: selectedBannerId }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessages([{ tags: 'success', text: 'Banner deleted successfully!' }]);
                // Refresh the banners list after deletion
                setBanners(banners.filter(banner => banner.id !== selectedBannerId));
            } else {
                setMessages(result.messages || [{ tags: 'error', text: 'Failed to delete banner.' }]);
            }
        } catch (error) {
            setMessages([{ tags: 'error', text: 'An error occurred.' }]);
        }
    };

    return (
        <div className="content">
            {/* BEGIN: Notification */}
            {messages.length > 0 && messages.map((message, index) => (
                <div key={index} className={`intro-y col-span-11 alert alert-${message.tags} alert-dismissible show flex items-center mb-6 mt-5 text-white`} role="alert">
                    <span><i className="w-4 h-4 mr-2" data-lucide="info"></i></span>
                    <span>{message.text}</span>
                    <button type="button" className="btn-close text-white" data-tw-dismiss="alert" aria-label="Close">
                        <i className="w-4 h-4" data-lucide="x"></i>
                    </button>
                </div>
            ))}
            {/* END: Notification */}

            <h2 className="text-primary text-center font-medium mt-10" style={{ fontSize: '30px' }}>Manage Banners</h2>

            <div className="col-span-12 mt-6 border-t border-dark pt-5">
                <div className="intro-y block sm:flex items-center h-10">
                    <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                        <a href="/add-banner">
                            <button className="btn btn-primary ml-3">Add New Banner</button>
                        </a>
                    </div>
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    {banners.length > 0 ? (
                        <table className="table table-report sm:mt-2">
                            <thead>
                                <tr>
                                    <th className="text-center whitespace-nowrap">SL NO</th>
                                    <th className="text-center whitespace-nowrap">BANNER IMAGE</th>
                                    <th className="text-center whitespace-nowrap">BANNER TYPE</th>
                                    <th className="text-center whitespace-nowrap">ADDED DATE</th>
                                    <th className="text-center whitespace-nowrap">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {banners.map((banner, index) => (
                                    <tr key={banner.id} className="intro-x">
                                        <td className="text-center whitespace-nowrap">{index + 1}</td>
                                        <td className="flex justify-center">
                                            <div className="w-10 h-10 image-fit zoom-in">
                                                <img alt="Banner" className="tooltip" src={banner.Image.url} title={`Uploaded at ${new Date(banner.Date).toLocaleDateString()}`} data-action="zoom" />
                                            </div>
                                        </td>
                                        <td className="text-center whitespace-nowrap">{banner.Banner_Type}</td>
                                        <td className="text-center whitespace-nowrap">{new Date(banner.Date).toLocaleDateString()}</td>
                                        <td className="table-report__action w-48">
                                            <div className="flex justify-center items-center">
                                                <button onClick={() => setSelectedBannerId(banner.id)} className="flex items-center text-danger" data-tw-toggle="modal" data-tw-target="#delete-modal">
                                                    <i className="w-4 h-4 mr-1" data-lucide="trash"></i>
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
                                            <i data-lucide="hard-drive" style={{ width: '60px', height: '60px', margin: 'auto', display: 'block', padding: '10px', borderRadius: '50%', background: '#e8e4e4' }} className="w-4 h-4 mr-2 text-primary"></i>
                                            <div style={{ textAlign: 'center' }}>No data available!</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* BEGIN: Delete Confirmation Modal */}
            <div id="delete-modal" className="modal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="p-5 text-center">
                                <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i>
                                <div className="text-3xl mt-5">Are you sure?</div>
                                <div className="text-slate-500 mt-2">Do you really want to delete these records? <br />This process cannot be undone.</div>
                            </div>
                            <div className="px-5 pb-8 text-center">
                                <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                <button type="button" onClick={handleDelete} className="btn btn-danger w-24">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Delete Confirmation Modal */}
        </div>
    );
};

export default ManageBanners;
