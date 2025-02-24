import { auth, provider, signInWithPopup, signInWithRedirect } from "../utils/firebase";
import googleLogo from "../assets/google_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/utils/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false); // To detect popup block

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (!result) {
        setPopupBlocked(true);
        throw new Error("Popup was blocked or closed immediately.");
      }

      const { accessToken, displayName, email, photoURL } = result.user;
      const userData = { accessToken, displayName, email, photoURL };
      sessionStorage.setItem("user", JSON.stringify(userData));

      dispatch(login(userData));
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      if (error.message.includes("Popup was blocked")) {
        console.log("Switching to Redirect-based login...");
        setPopupBlocked(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // If popup is blocked, fallback to `signInWithRedirect`
  useEffect(() => {
    if (popupBlocked) {
      signInWithRedirect(auth, provider);
    }
  }, [popupBlocked]);

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // Redirect if user is already logged in
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
      {/* Signup Card */}
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 text-center border border-white/30">
        <h2 className="text-3xl font-extrabold text-white mb-4">Welcome Back!</h2>
        <p className="text-white/80 mb-6">Sign in to continue</p>

        {/* Google Sign-in Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white/20 text-white py-3 px-6 rounded-lg hover:bg-white/30 transition duration-300 ease-in-out gap-4 shadow-md"
          disabled={loading}
        >
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />
          <span className="font-medium">{loading ? "Signing In..." : "Sign In with Google"}</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
