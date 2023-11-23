import { QUERY_KEY } from '@/constant/query-key.constant';
import UserService from '@/services/user.services';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useQueryUsers = () => {
  const {
    data: userData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [QUERY_KEY.USERS.GET],
    queryFn: UserService.queryGetAllUsers,
  });

  console.log('success fetch : ', isSuccess);

  return { userData, isLoading, isSuccess };
};
