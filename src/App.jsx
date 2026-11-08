import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([
    { UID: 1, UName: "Timmy", UAge: 24, UAI: "ChatGPT" },
    { UID: 2, UName: "Khaow", UAge: 18, UAI: "Gemini" },
    { UID: 3, UName: "Jame", UAge: 24, UAI: "ChatGPT" },
    { UID: 4, UName: "Ghan", UAge: 20, UAI: "Claude" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "☀️Light");

  function DeleteProfile(UID) {
    const result = profile.filter((User) => User.UID !== UID);
    setProfile(result);
  }

  useEffect(() => {
    localStorage.setItem("mode", theme);
    console.log("Render Application");
  }, [theme][profile]);

  return (
    <div className={theme}>
      <div className="App">
        <Header title="@~" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm profile={profile} setProfile={setProfile} />
          <ProfileList profile={profile} DeleteProfile={DeleteProfile} />
        </main>
      </div>
    </div>
  );
}

export default App;
