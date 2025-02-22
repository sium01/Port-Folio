import { useState, useEffect } from "react";

const ProfileViews = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Previous views load kora
    let count = localStorage.getItem("portfolioViews") || 0;
    count = parseInt(count) + 1;
    setViews(count);
    
    // LocalStorage update kora
    localStorage.setItem("portfolioViews", count);
  }, []);

  return (
    <div>
      <h2>Views: {views}</h2>
    </div>
  );
};

export default ProfileViews;
