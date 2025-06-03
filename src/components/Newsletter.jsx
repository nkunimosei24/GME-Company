// Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mnnvqpdo', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="bg-green-800 text-white py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Get updates on new products, farming tips, and special offers</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="px-4 py-2 text-white rounded-md w-full border-1 border-amber-50"
        />
        <button type="submit" className="bg-white text-green-800 px-6 py-2 rounded-md font-semibold">
          Subscribe
        </button>
      </form>

      {status === 'SUCCESS' && <p className="mt-4 text-green-200">Thanks for subscribing!</p>}
      {status === 'ERROR' && <p className="mt-4 text-red-200">Oops! Something went wrong.</p>}
    </div>
  );
};

export default Newsletter;
