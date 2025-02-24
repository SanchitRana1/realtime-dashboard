import { logout } from "@/utils/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>{user?.name}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;