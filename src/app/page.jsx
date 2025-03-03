import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Qr-Class</h1>
      <Link href='/login' className='bg-gray-300 p-2 rounded hover:bg-gray-400'>Get started</Link>
    </div>
  );
}
