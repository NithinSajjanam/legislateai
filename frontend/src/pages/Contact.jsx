import React from 'react';

export default function Contact() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-vibrant-pink mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded dark:bg-gray-800" type="text" placeholder="Name" />
        <input className="w-full p-2 border rounded dark:bg-gray-800" type="email" placeholder="Email" />
        <textarea className="w-full p-2 border rounded dark:bg-gray-800" placeholder="Message" rows="4" />
        <button className="bg-vibrant-purple text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
