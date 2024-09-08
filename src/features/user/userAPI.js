// A mock function to mimic making an async request for data
export const fetchLoggedInUserOrders = async (userId) => {
  try {
    const response = await fetch('http://localhost:8080/orders/?user.id='+ userId)
    const data = await response.json()
    return({data})
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
