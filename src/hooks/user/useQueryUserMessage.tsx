import { IUserMessageQueryResponse } from '@/interfaces/user.interfaces';
import UserService from '@/services/user.services';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constant/query-key.constant';

const useQueryUserMessage = () => {
  const { data: userGetMessage } = useQuery({
    queryKey: [QUERY_KEY.USER_COMMENT.GET],
    queryFn: () => UserService.queryGetAllUserPost,
  });

  return { userGetMessage };
};

export default useQueryUserMessage;
