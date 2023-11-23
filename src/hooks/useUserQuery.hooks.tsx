import { ApiUserQueryPosts } from '@/pages/api/user.api';

const useUserQuery = () => {
  const users = ApiUserQueryPosts();

  const user = users.then((data) => data);

  return users.then((data) => data);
};

export default useUserQuery;
