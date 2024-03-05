export const fetchData = async () => {
  return await fetch("https://frontend-assignment7.vercel.app/supplies").then(
    (res) => res.json()
  );
};
