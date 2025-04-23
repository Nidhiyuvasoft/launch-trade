import React from "react";
import { BeatLoader } from "react-spinners";



const PageLoading = ({ loading, position= 'fixed' }) => {
  if(!loading) return null
  return (
    <div className={`${position} page-loading inset-0 flex items-center justify-center bg-white backdrop-blur-sm z-50`}>
      <BeatLoader
        color={"#265CE7"}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
      />
    </div>
  );
};
export default PageLoading;
