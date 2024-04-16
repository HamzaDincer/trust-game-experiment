import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PreSurvey.scss";

const PreSurvey = ({ participantNumber }) => {
  const [formData, setFormData] = useState({
    name: "", // Add name
    email: "", // Add email
    age: "",
    gender: "",
    education: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/TrustGame"); // Update this to your actual next stage route
  };

  return (
    <div className="pre-survey">
      <h1>Demografik Anket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>İsim: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Yaş: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-gender">
          <label>Cinsiyet: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Erkek"
              checked={formData.gender === "Erkek"}
              onChange={handleChange}
            />{" "}
            Erkek
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Kadın"
              checked={formData.gender === "Kadın"}
              onChange={handleChange}
            />{" "}
            Kadın
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Diğer"
              checked={formData.gender === "Diğer"}
              onChange={handleChange}
            />{" "}
            Diğer
          </label>
        </div>
        <div>
          <label>Eğitim Seviyesi: </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">Seçiniz...</option>
            <option value="High School">Lise Mezunu</option>
            <option value="Bachelor's Degree">Üniversite Mezunu</option>
            <option value="Master's Degree">Yüksek Lisans Mezunu</option>
            <option value="PhD or Higher">Doktora Mezunu</option>
            <option value="Other">Diğer</option>
          </select>
        </div>
        <div>Katılımcı Numaranız: {participantNumber || "Not Assigned"}</div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default PreSurvey;
