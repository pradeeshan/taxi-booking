import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to Taxi Booking</h1>
        <p>Book your ride easily and quickly!</p>
      </main>
    </div>
  );
}