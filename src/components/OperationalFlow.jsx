import { ArrowRight, Search, CreditCard, Store, Package, Truck, CheckCircle2, MapPin } from "lucide-react";

const Step = ({ icon: Icon, title, desc, color }) => (
  <div className={`flex items-start gap-3 rounded-xl border bg-white p-4 shadow-sm ${color.border}`}>
    <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white ${color.bg}`}>
      <Icon size={18} />
    </div>
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default function OperationalFlow() {
  return (
    <section id="flow" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Operational Flow</h2>
            <p className="mt-2 text-gray-600">How Mechzo routes an order from search to doorstep.</p>
          </div>
          <a href="#demo" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Try demo</a>
        </div>

        <div className="mt-8 grid lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border bg-white p-5">
            <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Garage Owner</p>
            <div className="mt-4 space-y-3">
              <Step icon={Search} title="Search parts" desc="VIN, make, model" color={{ bg: 'bg-indigo-600', border: 'border-indigo-100' }} />
              <Step icon={CreditCard} title="Place order" desc="Pay inside app" color={{ bg: 'bg-indigo-600', border: 'border-indigo-100' }} />
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Mechzo App</p>
            <div className="mt-4 space-y-3">
              <Step icon={MapPin} title="Route to store" desc="Nearest partner" color={{ bg: 'bg-emerald-600', border: 'border-emerald-100' }} />
              <Step icon={Package} title="Confirm stock" desc="Synced inventory" color={{ bg: 'bg-emerald-600', border: 'border-emerald-100' }} />
              <Step icon={Truck} title="Assign delivery" desc="Agent dispatched" color={{ bg: 'bg-emerald-600', border: 'border-emerald-100' }} />
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Partner Store</p>
            <div className="mt-4 space-y-3">
              <Step icon={Store} title="Prepare package" desc="Pick and pack" color={{ bg: 'bg-amber-600', border: 'border-amber-100' }} />
              <Step icon={ArrowRight} title="Handover" desc="To delivery agent" color={{ bg: 'bg-amber-600', border: 'border-amber-100' }} />
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-xs font-semibold text-fuchsia-700 uppercase tracking-wider">Delivery & Admin</p>
            <div className="mt-4 space-y-3">
              <Step icon={Truck} title="Deliver" desc="Pick up and drop" color={{ bg: 'bg-fuchsia-600', border: 'border-fuchsia-100' }} />
              <Step icon={CheckCircle2} title="Update status" desc="Live tracking" color={{ bg: 'bg-fuchsia-600', border: 'border-fuchsia-100' }} />
              <Step icon={CreditCard} title="Settle payouts" desc="Store settlements" color={{ bg: 'bg-fuchsia-600', border: 'border-fuchsia-100' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
