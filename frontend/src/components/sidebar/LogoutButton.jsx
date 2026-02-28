import { LogOut } from "lucide-react";
import React from "react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <LogOut
          onClick={logout}
          className="rotate-180 text-white cursor-pointer hover:text-red-500 transition-colors duration-300"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
