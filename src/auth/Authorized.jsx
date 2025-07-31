import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
export const Authorized = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    console.log("Session on check:", session);
    if (!session) {
      console.log("No session — redirecting to login");
      navigate("/login");
    } else {
      setLoading(false);
    }
  };

    checkSession();

  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    console.log("Auth state changed:", session);
    if (!session) {
      navigate("/login");
    }
  });

  return () => listener.subscription.unsubscribe();
}, [navigate]);

  if (loading) {
    return null; 
  }

  return <>{children}</>;
};
