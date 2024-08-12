// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
  try {
    const response = await fetch('http://localhost:8080')
    const data = await response.json()
    return({data})
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
