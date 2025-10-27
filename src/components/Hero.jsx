import Spline from "@splinetool/react-spline";
import { Rocket, Search, CreditCard, Package } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[560px] sm:h-[640px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1220]/60 via-[#0B1220]/40 to-white/0" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-white/20 px-3 py-1 text-xs text-orange-100 shadow-sm backdrop-blur">
                <Rocket size={14} /> Built for garages, tuned for speed
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow">
                Mechzo — Parts at the speed of need.
              </h1>
              <p className="mt-4 text-white/90 text-lg leading-relaxed">
                Connect with your local partner store, pay in‑app, and track delivery live. One platform for garages, stores, and delivery agents.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#0B5ED7] text-white hover:bg-[#0A4FB4] transition-colors shadow">
                  Get the App
                </button>
                <a href="#flow" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 backdrop-blur">
                  View Operational Flow
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-[#0B5ED7] text-white flex items-center justify-center">
                    <Search size={18} />
                  </div>
                  <div>
                    <dt className="font-medium text-white">Smart search</dt>
                    <dd className="text-sm text-white/80">VIN, category, brand filters</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-orange-500 text-white flex items-center justify-center">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <dt className="font-medium text-white">In‑app payments</dt>
                    <dd className="text-sm text-white/80">Razorpay / UPI</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-[#0B5ED7] text-white flex items-center justify-center">
                    <Package size={18} />
                  </div>
                  <div>
                    <dt className="font-medium text-white">Inventory synced</dt>
                    <dd className="text-sm text-white/80">Real‑time availability</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
