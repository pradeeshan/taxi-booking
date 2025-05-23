import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Rides</h1>
        <ul className="list-disc pl-5">
          <li>Ride from A to B on 2025-05-10</li>
          <li>Ride from C to D on 2025-05-15</li>
        </ul>
      </main>
    </div>
  );
}