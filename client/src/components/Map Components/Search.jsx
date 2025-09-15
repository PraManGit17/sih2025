import React, { useState } from "react";
import { useMapContext } from "../../Context/MapContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { ports, setSelectedPort } = useMapContext();

  const handleSearch = () => {
    const found = ports.find((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (found) {
      setSelectedPort(found);
    } else {
      alert("Port not found. Try again.");
    }
  };

  return (
    <div className="z-10 flex flex-col h-screen gap-3 px-6 py-4 space-y-4">
      <div className="text-[55px] max-w-[90%] font-bold leading-16">Port-by-Port <span className="text-[#64b9ffd8]">Coastal Monitoring</span></div>

      <div className="glass-parent px-5 flex flex-col gap-6 text-white rounded-xl shadow-lg py-6 overflow-hidden">
        <h2 className="text-lg font-medium ">Select Any Indian Port From Below For Map View</h2>

        <div className="flex items-center gap-2 glass-child rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Port by Name or ID...."
            className="flex-1 bg-transparent outline-none text-white placeholder-text-white"
          />
          <button
            onClick={handleSearch}
            className="bg-white text-gray-600 text-sm font-medium px-3 py-1 rounded-lg"
          >
            Search
          </button>
        </div>

        <div className="overflow-y-auto max-h-[450px] pr-2 custom-scrollbar py-4">
          <div className="grid gap-2">
            {ports.map((p) => (
              <button
                key={p.name}
                onClick={() => setSelectedPort(p)}
                className="px-4 py-3 glass-child hover:bg-blue-600 hover:shadow-md rounded-lg text-sm text-left transition-all duration-200"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;