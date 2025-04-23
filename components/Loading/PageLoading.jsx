

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ScaleLoader } from "react-spinners";

const PageLoading = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return (
    loading && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
        style={{ zIndex: 1050 }}
      >
        <ScaleLoader color="#47a9ff" />
      </div>
    )
  );
};

export default PageLoading;

