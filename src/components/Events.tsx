import React from "react";

const Events = () => {
  return (
    <section id="events" className="bg-gray-50 py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span>Events</span>
          </div>
        </div>
        <h2 className="text-5xl font-display font-bold mb-6 text-left text-gray-900">Events</h2>
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-elegant p-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-sm">
            Coming soon
          </span>
        </div>
      </div>
    </section>
  );
};

export default Events;
