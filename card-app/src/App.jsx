import UserCard from "./components/UserCard.jsx";
import "./index.css";

const card = {
  avatar: "../public/Assets/avatar.png",
  name: "Chrisse",
  address: "4018 Sachs Trail",
  posts: "1841",
  followers: "66868",
  btn: "Follow",
  title: "User Display",
};

function App() {
  return (
    <div className="main-container">
      <UserCard cardInfo={card} />
    </div>
  );
}

export default App;