export const ApiUserQueryPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const ApiUserQueryComments = async () => {
    try {
        
    } catch (error) {
        
    }
}

class UserApiServices {
    
}
