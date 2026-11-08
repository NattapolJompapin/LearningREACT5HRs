import { useState } from "react";
import "./ProfileList.css";
import User from "./User";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function ProfileList({ profile, DeleteProfile }) {
  console.table();
  const [show, setShow] = useState(true);
  const myStyle = {
    color: "Orange",
    fontSize: "30px",
  };
  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>Profile Table [{profile.length}] ID</h2>
        <span onClick={() => setShow(!show)}>{show ? <FaRegEye size={30}/> : <FaRegEyeSlash size={30}/>}</span>
      </div>
      <ul>
        {show &&
          profile.map((item) => (
            <User key={item.UID} item={item} DeleteProfile={DeleteProfile} />
          ))}
      </ul>
    </div>
  );
}
export default ProfileList;
