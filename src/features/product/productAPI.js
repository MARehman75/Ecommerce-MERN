// A mock function to mimic making an async request for data
export const fetchAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`)
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


// export const fetchProductsByFilters = async (filter, sort, pagination) => {

//   let queryString = ''
//   for (let key in filter) {
//     const categoryValues = filter[key]
//     if (categoryValues.length) {
//       const lastCatrgoryValue = categoryValues[categoryValues.length - 1]
//       queryString += `${key}=${lastCatrgoryValue}&`
//     }
//   }
//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`
//   }
//   for (let key in pagination) {
//     queryString += `${key}=${pagination[key]}&`
//   }

//   try {
//     const response = await fetch('http://localhost:8080/products?' + queryString)
//     const data = await response.json()
//     const totalItems = await response.headers.get('X-Total-Count')
//     return ({ data: { products: data, totalItems: +totalItems } })
//   }
//   catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

//THIS LOGIC IS BETTER BUT NOT IMPLEMENTED BY CODER DOST - IT ACTUALLY SHOWS MULTIPLE FILTERS

export const fetchProductsByFilters = async (filter, sort, pagination) => {
  let queryString = '';

  // Constructing the query string for filters
  for (let key in filter) {
    const filterValues = filter[key];
    if (filterValues.length) {
      queryString += filterValues.map(value => `${key}=${encodeURIComponent(value)}`).join('&') + '&';
    }
  }

  // Adding sorting to the query string
  for (let key in sort) {
    queryString += `${key}=${encodeURIComponent(sort[key])}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }


  try {
    const response = await fetch('http://localhost:8080/products?' + queryString.slice(0, -1));
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count')
    return ({ data: { products: data, totalItems: +totalItems } })
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const fetchCategories = async () => {
  try {
    const response = await fetch('http://localhost:8080/categories')
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


export const fetchBrands = async () => {
  try {
    const response = await fetch('http://localhost:8080/brands')
    const data = await response.json()
    return ({ data })
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}