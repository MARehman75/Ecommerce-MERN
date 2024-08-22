// A mock function to mimic making an async request for data
export const addToCart = async (item) => {
  try {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const fetchItemsByUserId = async (userId) => {
  try {
    const response = await fetch('http://localhost:8080/cart?user='+userId)
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const updateCart = async (update) => {
  try {
    const response = await fetch('http://localhost:8080/cart/'+ update.id, {
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
    console.error('Error updating item:', error);
    throw error;
  }
}

export const deleteItemFromCart = async (itemId) => {
  try {
    const response = await fetch('http://localhost:8080/cart/'+ itemId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    return ({ data: {id: itemId} })
  }
  catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
}