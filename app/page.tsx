import React from "react";
import { Truck, Phone, Mail, MapPin, CheckCircle, Package, Clock, Shield } from "lucide-react";

export default function TruckingBusinessWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/BTS_Company Logo.png"
              alt="BTS Logo"
              className="w-25 h-25 object-cover"
            />

            <div>
              <h1 className="text-xl font-bold">
                Benitez Transport & Services
              </h1>
              <p className="text-xs text-slate-500">
                 Beyond Boundaries • Beyond Horizons
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>

            <a href="#about" className="hover:text-blue-700">
              About
            </a>

            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="uppercase tracking-widest text-blue-200 text-sm mb-3">
              Trucking • Delivery • Logistics
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Safe, Reliable, and On-Time Transport Services
            </h2>

            <p className="text-lg text-slate-200 mb-8">
              We provide dependable trucking and logistics support for
              businesses that need fast coordination, careful handling, and
              professional delivery service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-800 hover:bg-blue-50 rounded-2xl px-6 py-4 font-semibold">
                Request a Quote
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-blue-800 rounded-2xl px-6 py-4 font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="bg-slate-200/20 rounded-2xl flex items-center justify-center p-2 h-[520px] overflow-hidden">
              <img
                src="/1000031214.jpg"
                alt="BTS Truck"
                className="rounded-2xl w-full h-full object-contain"
              />
            </div>
           </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3">Our Services</h3>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Practical transport solutions for companies, suppliers, warehouses,
            and business deliveries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-sm p-7">
            <Package className="text-blue-700 mb-4" size={36} />

            <h4 className="text-xl font-semibold mb-2">
              Cargo Delivery
            </h4>

            <p className="text-slate-600">
              Closed van delivery for goods, packages, business cargo, and
              scheduled transport needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-7">
            <Clock className="text-blue-700 mb-4" size={36} />

            <h4 className="text-xl font-semibold mb-2">
              Scheduled Trips
            </h4>

            <p className="text-slate-600">
              Reliable daily, weekly, or project-based transport scheduling for
              business operations.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-7">
            <Shield className="text-blue-700 mb-4" size={36} />

            <h4 className="text-xl font-semibold mb-2">
              Business Logistics Support
            </h4>

            <p className="text-slate-600">
              Coordination support for pickups, deliveries, routing, and
              customer communication.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-5">
              Why Choose Us
            </h3>

            <p className="text-slate-600 mb-6">
              Benitez Transport & Services is committed to providing dependable,
              professional, and customer-focused trucking services.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span>Reliable coordination and communication</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span>Professional customer-focused service</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span>Flexible transport arrangements</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8">
            <h4 className="text-2xl font-bold mb-4">
              Available Vehicle
            </h4>

            <p className="text-slate-600 mb-4">
              Isuzu Elf 6W Closed Van
            </p>

            <ul className="text-slate-700 space-y-2">
              <li>• Ideal for cargo and business deliveries</li>
              <li>• Closed van for safer goods handling</li>
              <li>• Available for logistics services</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-blue-800 text-white rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Request a Quote Today
            </h3>

            <p className="text-blue-100">
              Contact us for delivery schedules, trucking availability, and
              business logistics requirements.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span>0917-XXX-XXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>your@email.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>Cavite / Metro Manila / Nearby Areas</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 text-center py-6">
        <p>
          © 2026 Benitez Transport & Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}