const BASE_URL = "http://localhost:3001";

export const getStudyItem = async () => {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
  });
  return res.json();
};
