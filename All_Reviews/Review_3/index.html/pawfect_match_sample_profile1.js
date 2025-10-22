import React from "react";
import { Pencil, Settings, Crown, Heart, Calendar, PawPrint } from "lucide-react";

export default function ProfilePage() {
  const dogs = [
    { name: "Buddy", breed: "Golden Retriever", primary: true },
    { name: "Max", breed: "Labrador", primary: false },
  ];

  const recentMatches = ["Luna", "Charlie", "Bella", "Max"];

  return (
    <div className="p-4 max-w-lg mx-auto font-sans text-gray-800">
      {/* Profile Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <div className="flex gap-3">
          <Settings size={20} />
          <Crown size={20} />
          <Pencil size={20} />
        </div>
      </div>

      {/* My Dogs Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">My Dogs</h2>
        {dogs.map((dog, idx) => (
          <div key={idx} className="bg-white shadow rounded p-3 flex justify-between mb-2">
            <div>
              <p className="font-bold">{dog.name}</p>
              <p className="text-sm text-gray-500">{dog.breed}</p>
              {dog.primary && <span className="text-xs text-green-600 font-semibold">Primary</span>}
            </div>
            <button className="text-blue-500 text-sm">Edit</button>
          </div>
        ))}
        <button className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-full">+ Add Dog</button>
      </div>

      {/* Social Connections */}
      <div className="mb-6 grid grid-cols-3 text-center">
        <div>
          <Heart className="mx-auto mb-1" />
          <p className="font-bold">12</p>
          <p className="text-xs text-gray-500">Matches</p>
        </div>
        <div>
          <Calendar className="mx-auto mb-1" />
          <p className="font-bold">5</p>
          <p className="text-xs text-gray-500">Events</p>
        </div>
        <div>
          <PawPrint className="mx-auto mb-1" />
          <p className="font-bold">8</p>
          <p className="text-xs text-gray-500">Playdates</p>
        </div>
      </div>

      {/* Recent Matches */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Matches</h2>
        <div className="flex gap-2 overflow-x-auto">
          {recentMatches.map((name, idx) => (
            <div key={idx} className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
