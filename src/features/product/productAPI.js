// A mock function to mimic making an async request for data
export const fetchAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    return({data})
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const fetchProductsByFilters = async (filter) => {

  let queryString = ''
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  try {
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    return({data})
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
