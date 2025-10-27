import { useMemo, useState } from "react";
import { Package, Clock, Truck, CheckCircle2, MapPin } from "lucide-react";

const STAGES = [
  { key: "placed", label: "Order placed", icon: Package, color: "indigo" },
  { key: "assigned", label: "Agent assigned", icon: Truck, color: "emerald" },
  { key: "enroute", label: "En route", icon: MapPin, color: "amber" },
  { key: "delivered", label: "Delivered", icon: CheckCircle2, color: "fuchsia" },
];

export default function OrderTrackerDemo() {
  const [progress, setProgress] = useState(0);

  const current = useMemo(() => STAGES[progress], [progress]);

  return (
    <section id="demo" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Live Order Flow Demo</h3>
              <p className="text-gray-600">Click through to simulate the delivery lifecycle.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setProgress((p) => Math.max(0, p - 1))}
                className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => setProgress((p) => Math.min(STAGES.length - 1, p + 1))}
                className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {STAGES.map((stage, idx) => {
              const active = idx <= progress;
              const Icon = stage.icon;
              const palette = active ? `bg-${stage.color}-600 text-white border-${stage.color}-600` : "bg-gray-100 text-gray-500 border-gray-200";
              return (
                <div key={stage.key} className={`rounded-xl border p-4 flex items-start gap-3 ${active ? "shadow" : "opacity-80"}`}>
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${palette}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{stage.label}</p>
                    <p className="text-sm text-gray-600">{active ? "Completed" : "Pending"}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Clock className="text-gray-400" size={18} />
            <p className="text-sm text-gray-600">
              Current status: <span className="font-medium text-gray-900">{current.label}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
