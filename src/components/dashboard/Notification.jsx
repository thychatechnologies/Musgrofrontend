import React from 'react';

const Notification = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`intro-y col-span-11 alert alert-${message.tags} alert-dismissible show flex items-center mb-6 mt-5 text-white`}
          role="alert"
        >
          <span><i data-lucide="info" className="w-4 h-4 mr-2"></i></span>
          <span>{message.text}</span>
          <button type="button" className="btn-close text-white" aria-label="Close">
            <i data-lucide="x" className="w-4 h-4"></i>
          </button>
        </div>
      ))}
    </>
  );
};

export default Notification;
