// useFetchData.js
import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        // Check for the known keys and default to an empty array if not found
        const extractedData = result.schedule || result.rankings || [];
        setData(extractedData);
        setError(null);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("There was an error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
