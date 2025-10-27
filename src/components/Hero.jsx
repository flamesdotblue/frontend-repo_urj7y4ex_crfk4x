import { Rocket, Search, CreditCard, Package } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 shadow-sm">
              <Rocket size={14} /> Built for garages, tuned for speed
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Order auto parts in minutes. We handle the rest.
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Mechzo connects garages, partner stores, and delivery agents in one streamlined flow—so parts arrive fast, accurate, and fully tracked.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                View Live Flow
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                  <Search size={18} />
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Smart search</dt>
                  <dd className="text-sm text-gray-600">VIN, category, brand filters</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                  <CreditCard size={18} />
                </div>
                <div>
                  <dt className="font-medium text-gray-900">In‑app payments</dt>
                  <dd className="text-sm text-gray-600">Instant confirmation</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                  <Package size={18} />
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Inventory synced</dt>
                  <dd className="text-sm text-gray-600">Real‑time availability</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200 p-4">
                  <p className="text-sm font-semibold text-indigo-800">Garage Owner</p>
                  <p className="mt-2 text-sm text-indigo-900/80">Search → Order → Pay</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 p-4">
                  <p className="text-sm font-semibold text-emerald-800">Partner Store</p>
                  <p className="mt-2 text-sm text-emerald-900/80">Pick → Pack → Handover</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 p-4">
                  <p className="text-sm font-semibold text-amber-800">Delivery Agent</p>
                  <p className="mt-2 text-sm text-amber-900/80">Pickup → Deliver → Update</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-fuchsia-100 to-fuchsia-50 border border-fuchsia-200 p-4">
                  <p className="text-sm font-semibold text-fuchsia-800">Admin</p>
                  <p className="mt-2 text-sm text-fuchsia-900/80">Listings → Orders → Payouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
