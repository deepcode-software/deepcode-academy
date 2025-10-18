import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1>DeepCode Academy</h1>
      <h2>Online Academy Platform</h2>
      <div className="search">
        <input
          type="search"
          name="search"
          placeholder="What Do You Need To Learn?"
        />
        <button>Search</button>
      </div>
    </div>
  );
}
