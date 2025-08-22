import { useState } from "react";
import axios from "axios";
import React from "react"

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Booking...");

    try {
      const res = await axios.post("http://localhost:5000/api/book-appointment", formData);
      if (res.data.success) {
        setStatus("✅ Appointment booked successfully!");
      } else {
        setStatus("❌ Booking failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
          Book an Appointment
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          {/* Date */}
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />

          {/* Time */}
          <input
            type="time"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>

        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </div>
    </div>
  );
}
