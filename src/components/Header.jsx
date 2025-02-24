import { Button } from "@/components/ui/button";

const Header = ({ user, loading, onSignIn, onLogout }) => {
  return (
    <div className="flex justify-between items-center mb-4 bg-gradient-to-r from-[#1e1e64] to-[#643ba5] text-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <img src={user.photoURL} alt="User" referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full border-2 border-white" />
          <span>{user.displayName}</span>
          <Button onClick={onLogout} className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg">Logout</Button>
        </div>
      ) : (
        <Button onClick={onSignIn} disabled={loading} className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg">
          {loading ? "Signing In..." : "Sign in with Google"}
        </Button>
      )}
    </div>
  );
};

export default Header;
