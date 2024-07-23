import React, { useState } from 'react';


const AddBanner = () => {
    const [bannerType, setBannerType] = useState('');
    const [image, setImage] = useState(null);
    const [messages, setMessages] = useState([]);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('type', bannerType);
        if (image) formData.append('image', image);

        try {
            // Replace with your API endpoint
            const response = await fetch('/your-endpoint/', {
                method: 'POST',
                body: formData,
                // Include any necessary headers
            });
            
            const result = await response.json();
            
            if (response.ok) {
                // Handle success (e.g., display success message)
                setMessages([{ tags: 'success', text: 'Banner added successfully!' }]);
            } else {
                // Handle error messages
                setMessages(result.messages || [{ tags: 'error', text: 'Failed to add banner.' }]);
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

            <div className="intro-y box py-10 sm:py-10 mt-5">
                <h2 className="text-primary text-center font-medium" style={{ fontSize: '30px' }}>Add Banner</h2>
                
                <div className="px-3 sm:px-10 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5"> 
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="bannerType" className="form-label">Banner Type</label>
                                <select 
                                    name="type" 
                                    id="bannerType" 
                                    required 
                                    className="form-control"
                                    value={bannerType}
                                    onChange={(e) => setBannerType(e.target.value)}
                                >
                                    <option value="">Select Banner Type</option>
                                    <option value="Mobile">For Mobile Phones</option>
                                    <option value="System">For Computer Systems</option>
                                </select>
                            </div>

                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="bannerImage" className="form-label">Banner</label>
                                <input 
                                    name="image" 
                                    id="bannerImage"
                                    type="file" 
                                    className="form-control file" 
                                    accept=".png, .jpg, .jpeg" 
                                    required
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                <button className="btn btn-primary w-24 ml-2" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBanner;
