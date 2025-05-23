import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold">TaxiBooking</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/book">Book</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}