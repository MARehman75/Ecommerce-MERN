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

export const fetchLoggedInUser = async (userId) => {
  try {
    const response = await fetch('http://localhost:8080/users/'+ userId)
    const data = await response.json()
    return({data})
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


export const updateUser = async (update) => {
  try {
    const response = await fetch('http://localhost:8080/users/'+ update.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    })
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}