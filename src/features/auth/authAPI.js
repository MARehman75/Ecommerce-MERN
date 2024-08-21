// A mock function to mimic making an async request for data
export const createUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const checkUser = async (loginInfo) => {
  const email = loginInfo.email
  const password = loginInfo.password
  try {
    const response = await fetch('http://localhost:8080/users?email=' + email)
    const data = await response.json()
    if (data.length) {
      if (password === data[0].password) {
        return ({ data: data[0] })
      }
      else {
        return ({ error: 'Wrong credentials' })
      }
    } else {
      return ({ error: 'User not found' })
    }
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
