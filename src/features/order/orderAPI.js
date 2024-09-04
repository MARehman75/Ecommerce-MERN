
export const createOrder = async (order) => {
  try {
    const response = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}