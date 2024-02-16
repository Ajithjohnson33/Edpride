
// pages/api/login.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      console.log(email + password)
  
      const url = "https://edprideuser.azurewebsites.net/api/Authentication/login";
  
      try {
        const apiResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!apiResponse.ok) {
          throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
  
        const data = await apiResponse.json();
        console.log('Response is '+data)
        res.status(200).json(data); // Send success response back to the client
      } catch (error) {
        res.status(500).json({ message: error.message }); // Send error response back to the client
      }
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  