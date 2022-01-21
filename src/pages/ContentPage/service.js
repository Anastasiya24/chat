export async function fetchList(setHeroes, pageNumber, setPageNumber, setFetching) {
  const limit = 10 * pageNumber || 10;
  const offset = 0; //limit * pageNumber;
  fetch(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      setHeroes(res);
      setPageNumber((prev) => prev + 1);
    })
    .finally(() => setFetching(false));
}
