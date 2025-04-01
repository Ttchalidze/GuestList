import { useState, useEffect } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/TK";
const API = BASE_URL + COHORT;

export default function useQuery(resource) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = async () => {
      setError(null);
      try {
        const response = await fetch(API + resource);
        if (!response.ok) throw Error("ERROR!!!");
        const result = await response.json();
        setData(result.data);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    };
    query();
  }, [resource]);

  return { data, error };
}
