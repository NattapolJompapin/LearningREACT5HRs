import "./AddForm.css";
import { useState } from "react";

function AddForm(props) {
  const [UName, setUName] = useState("");
  const [UAI, setUAI] = useState("ChatGPT");
  const { profile, setProfile } = props;

  function saveProfile(e) {
    e.preventDefault();
    const UNewUID = {
      UID: profile.length + 1,
      UName: UName,
      UAI: UAI,
    };
    console.log(UName);
    setProfile([...profile, UNewUID]);
    setUName("");
    setUAI("ChatGPT");
  }

  return (
    <section className="container">
      <form onSubmit={saveProfile}>
        <label>UName</label>
        <input
          type="text"
          value={UName}
          onChange={(e) => setUName(e.target.value)}
        />
        <select value={UAI} onChange={(e) => setUAI(e.target.value)}>
          <option>ChatGPT</option>
          <option>Gemini</option>
          <option>Claude</option>
        </select>
        <button
          type="submit"
          className="btn-save"
          disabled={UName.trim() === ""}
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default AddForm;
