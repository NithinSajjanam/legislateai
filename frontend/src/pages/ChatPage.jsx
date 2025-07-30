import React, { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-vibrant-purple">Ask Legal Questions</h2>
      <textarea
        className="w-full p-2 rounded border dark:bg-gray-800"
        rows="4"
        placeholder="Enter your legal query..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-vibrant-blue text-white px-4 py-2 rounded mt-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm">
        {response}
      </div>
    </div>
  );
}
