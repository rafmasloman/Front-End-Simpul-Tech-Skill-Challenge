import { Skeleton } from '@mantine/core';

const SkeletonChat = () => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <Skeleton height={40} width={40} circle w={45} />
      <div className=" w-full">
        <Skeleton height={10} radius={'lg'} className="mb-2.5 w-2/3" />
        <Skeleton height={10} radius={'lg'} className="w-9/12 mb-2.5" />
        <Skeleton height={10} radius={'lg'} className="w-3/12" />
      </div>
    </div>
  );
};

export default SkeletonChat;
