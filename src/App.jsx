import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OperationalFlow from "./components/OperationalFlow";
import OrderTrackerDemo from "./components/OrderTrackerDemo";

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mechzo. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <OperationalFlow />
      <OrderTrackerDemo />
      <Footer />
    </div>
  );
}
