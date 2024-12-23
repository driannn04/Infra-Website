// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Headers from "./Headers";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/bg1.jpeg')" }}
    >
      <Headers />
      <div className="text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Selamat Datang</h2>
        <Link
          to="/penelitian"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition"
        >
          Kelola Data Penelitian
        </Link>
      </div>
    </div>
  );
};

export default Home;
