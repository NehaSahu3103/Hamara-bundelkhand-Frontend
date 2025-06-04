import React from "react";

const places = [
  { name: "Jhansi", attractions: ["Jhansi Fort", "Jhansi Rani Mahal", "St. Judes Shrine"] },
  { name: "Chitrakoot", attractions: ["Kamadgiri Temple", "Hanuman Dhara Temple", "Bharat Milap Temple"] },
  { name: "Datia", attractions: ["Datia Palace", "Peetambara Peeth", "Sonagiri Jain Temple"] },
  { name: "Orchha", attractions: ["Orchha Fort", "Chaturbhuj Temple", "Ram Raja Temple"] },
  { name: "Panna", attractions: ["Panna National Park", "Diamond Mines", "Padmavati Devi Temple"] },
  { name: "Tikamgarh", attractions: ["Lakshmi Narayan Temple", "Rani Mahal", "Shri Bhagwat Vilas Mandir"] },
  { name: "Sagar", attractions: ["Garhphra Temple", "Sagar Lake", "Dharmrajeshwar Temple"] },
  { name: "Rewa", attractions: ["Govindgarh Fort", "Rewa Fort", "Bhairon Baba Temple"] },
  { name: "Satna", attractions: ["Chitrakoot Dham", "Bharat Koop", "Venkatesh Temple"] },
  { name: "Chhatarpur", attractions: ["Khajuraho Temples", "Chaturbhuj Temple", "Matangeshwar Temple"] },
  { name: "Damoh", attractions: ["Jageshwar Dham Temple", "Nohleshwar Temple", "Radha Krishna Temple"] },
  { name: "Katni", attractions: ["Durgavati Museum", "Vireshwar Temple", "Sharda Devi Temple"] },
  { name: "Chhindwara", attractions: ["Pench National Park", "Ganesh Mandir", "Ram Mandir"] },
  { name: "Seoni", attractions: ["Kanha Tiger Reserve", "Ganesh Mandir", "Shri Swami Narayan Temple"] },
  { name: "Shivpuri", attractions: ["Madhav National Park", "Chhatris of Scindia Dynasty", "Bhadaiya Kund"], highlight: true },
];

const BundelkhandPlaces = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">हमाओ बुंदेलखंड</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              place.highlight ? "bg-teal-600 text-white" : "bg-teal-100"
            }`}
          >
            <h3 className={`text-lg font-semibold ${place.highlight ? "text-white" : "text-teal-800"}`}>
              {place.name}
            </h3>
            <ul className="mt-2">
              {place.attractions.map((attraction, i) => (
                <li key={i} className="text-sm">
                  • {attraction}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundelkhandPlaces;
