import chatgpt from "../assets/chatgpt.png";
import gemini from "../assets/gemini.png";
import claude from "../assets/claude.png";


function User({ item, DeleteProfile }) {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor:
            item.UAI === "ChatGPT"
              ? "green"
              : item.UAI === "Gemini"
                ? "Red"
                : "Blue",
        }}
      >
        <img
          src={
            item.UAI === "ChatGPT"
              ? chatgpt
              : item.UAI === "Gemini"
                ? gemini
                : claude
          }
          width={50}
          height={50}
          alt={item.UAI}
        />
        <p>{item.UName}</p>
        <div className="control"></div>
        {item.UAge} | {item.UAI}
        <button
          onClick={() => {
            DeleteProfile(item.UID);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}
export default User;
