import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TeamFormPage2 = () => {
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
    player9: "",
    player10: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamFormData"));
    if (storedData) {
      setFormData((prev) => ({
        ...prev,
        ...storedData
      }));
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine the data and handle form submission
    const completeFormData = JSON.parse(localStorage.getItem("teamFormData"));
    localStorage.setItem("teamFormData", JSON.stringify({ ...completeFormData, ...formData }));
    
    // Clear localStorage or handle form data submission
    localStorage.removeItem("teamFormData");
    navigate("/success");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto"> {/* Centered the form container and restricted width */}
        <h2 className="text-xl font-bold mb-4 text-center">Add Players</h2> {/* Centered the title */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">Player {index + 1}</label>
              <input
                type="text"
                name={`player${index + 1}`}
                value={formData[`player${index + 1}`]}
                onChange={handleChange}
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" // Adjusted width
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm " // Adjusted width
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamFormPage2;
