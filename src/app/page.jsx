import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to QR Class</h1>
      <p className="text-gray-600 mb-4">Please login or register to get started.</p>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-500"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
