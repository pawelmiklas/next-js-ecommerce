import Link from "next/link";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 border-b border-gray-200">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
      <Link
        href="/"
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
