import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <div>
      <Navbar />
      <main className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <input className="border p-2 w-full" placeholder="Email" />
          <input className="border p-2 w-full" type="password" placeholder="Password" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
      </main>
    </div>
  );
}