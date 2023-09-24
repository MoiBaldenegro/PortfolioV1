import { useState, useEffect } from 'react';

export default function useDate() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDateTime = new Date();
      const formattedDateTime = newDateTime.toString().split(" ", 5).join(" ");
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currentDateTime };
}
