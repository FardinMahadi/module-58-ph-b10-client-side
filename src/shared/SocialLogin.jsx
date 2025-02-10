import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SocialLogin = () => {
  const { googleSignIn, setUser, loading, setLoading } =
    useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      setUser(result.user);
    } catch (error) {
      console.error("Google sign-in failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full border-2 border-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center"
        disabled={loading}
      >
        {loading ? (
          <span className="loader mr-2"></span>
        ) : (
          <span className="mr-2">🔗</span>
        )}
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default SocialLogin;
