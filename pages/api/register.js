
// pages/api/register.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, mobile, email, password,roleId,schoolName } = req.body;

    try {
      const response = await fetch("https://edprideuser.azurewebsites.net/api/Authentication/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, mobile, email, password, roleId,schoolName }),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
