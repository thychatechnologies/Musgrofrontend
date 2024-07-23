import React, { useState } from 'react';
import Notification from './Notification';

const AddClientForm = ({ messages = [], onSubmit }) => {  // Default messages to an empty array
  const [formData, setFormData] = useState({
    name: '',
    client_id: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="content">
      <Notification messages={messages} />
      <div className="intro-y box py-10 sm:py-10 mt-5">
        <h2 className="text-primary text-center font-medium" style={{ fontSize: '30px' }}>Add Client</h2>
        <div className="px-3 sm:px-10 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
              <div className="intro-y col-span-12 sm:col-span-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Client Name Here"
                  required
                  maxLength="100"  // Corrected to camelCase
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6">
                <label htmlFor="client_id" className="form-label">Client ID</label>
                <input
                  name="client_id"
                  type="text"
                  className="form-control"
                  readOnly
                  maxLength="25"  // Corrected to camelCase
                  value={formData.client_id}
                  onChange={handleChange}
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input
                  name="mobile"
                  type="text"
                  className="form-control"
                  placeholder="Enter Client Mobile Number Here"
                  required
                  maxLength="15"  // Corrected to camelCase
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Client Email Address Here"
                  value={formData.email}
                  onChange={handleChange}
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

export default AddClientForm;
