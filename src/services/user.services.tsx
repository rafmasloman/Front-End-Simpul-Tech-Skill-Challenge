import { URL_SERVICES } from '@/constant/url.constant';

class UserService {
  static async queryGetAllUsers() {
    try {
      const response = await fetch(`${URL_SERVICES.API}/users`);

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }

  static async queryGetAllUserPost(id?: string) {
    try {
      const response = await fetch(`${URL_SERVICES.API}/users/${id}/posts`);

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }

  static async queryGetAllUserTodo(id: string) {
    try {
      const response = await fetch(`${URL_SERVICES.API}/users/${id}/todos`);

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
