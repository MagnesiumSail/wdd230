const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiTUFHTkVTSVVNLVNBSUwiLCJ2ZXJzaW9uIjoidjIiLCJyZXNldF9kYXRlIjoiMjAyMy0wNy0xNSIsImlhdCI6MTY4OTQ3MjMxNSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.IEFSCsrq_Rmh_VVC8hDH1znqHkcPo8TDni7v8ixaRmndO0J-3A3QE_Ivtji9DZLQAFe8F3qeE8bR_ignVM8IwwN1sUseOzfQIGNxzQGYz7EYBhbOLBV9aSXGXceHvWal58GqF_ykF96yGDYrZwzvqAuW7X0r918D7SsCXGOKPqIWONEVqBZT3oEcZaV7X9fVbbRaEN06PGmbNZA8MPD9goFI-ykr53On7xzKT_aOLEzXxHTaGJOqhEivv89xYgzZ96xGogd5GBGm9T2P0CnFmfhKToUG-eta9U8U0ieEnKorRhEIw5tKZmxsCF2vVpxQmKUqaG5fVe8lbA9GgDJktA'
    },
  };
  
  fetch('https://api.spacetraders.io/v2/my/agent', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

