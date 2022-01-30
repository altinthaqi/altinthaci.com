import { useState, useEffect } from "react";

export default function Loading({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{children}</>;
}
