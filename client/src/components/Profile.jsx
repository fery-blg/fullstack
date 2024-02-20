import { useUser } from "../store/userstore";

// Bubble component
const Bubbles = () => {
  const emojis = ["😊", "😄", "😃", "😁", "😆", "😅", "😂", "🤣", "😇", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜"];

  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const createBubbles = () => {
    let bubbles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.floor(Math.random() * 50) + 20;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 5 + 3;
      const emoji = getRandomEmoji();

      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            animationDuration: `${animationDuration}s`,
          }}
        >
          {emoji}
        </div>
      );
    }
    return bubbles;
  };

  return <div className="bg-bubbles">{createBubbles()}</div>;
};

export function Profile() {
  const [user] = useUser((state) => [state.user]);
  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"></div>
      <Bubbles />
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 z-10">
        {user ? (
          <div>
            <h1 className="text-3xl font-bold text-purple-800 mb-2">
              Welcome DEAR {user.username}
            </h1>
            <p className="text-gray-700">Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-gray-700">Loading...</p>
        )}
      </div>
    </div>
  );
}
