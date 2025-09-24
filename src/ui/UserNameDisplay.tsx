import useUserStore from "../stores/useUserStore";

function UserNameDisplay() {
  const userName = useUserStore((state) => state.userName);

  return (
    <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
      Halo,{" "}
      <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        {userName}
      </span>
      ! 👋
    </h1>
  );
}

export default UserNameDisplay;
