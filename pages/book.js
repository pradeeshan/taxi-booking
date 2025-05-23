import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Book() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ride booked from ${pickup} to ${drop}`);
  };

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Book a Ride</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="border p-2 w-full" placeholder="Pickup Location" value={pickup} onChange={e => setPickup(e.target.value)} />
          <input className="border p-2 w-full" placeholder="Drop Location" value={drop} onChange={e => setDrop(e.target.value)} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Book</button>
        </form>
      </main>
    </div>
  );
}