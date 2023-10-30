import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Use the fetch API to make a GET request to the API endpoint
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the 'posts' state variable
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts from JSONPlaceholder API</h1>
      <ul>
        {posts.map((post) => (
          console.log(post)
        ))}
      </ul>
    </div>
  );
}

export default App;
