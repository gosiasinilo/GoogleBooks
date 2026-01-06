

export const getBooks = async (text) => {
  const maxResults = 10;


  const requests = await 
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        text
      )}&maxResults=${maxResults}`);

   
      if (!requests.ok) {
        throw new Error("Fetch failed");
     
    }


  const results = await requests.json();

  return (results.items || []).map((book) => ({
    id: book.id || Math.random().toString(),
    data: book.volumeInfo || {},
  })); 
};