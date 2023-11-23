import { ICAvatar } from '@/assets/icons/avatar-icon';
import { COLORS } from '@/constant/colors.constant';
import { IGroupChatProps } from '@/interfaces/chat.interfaces';
import { Group, Text, Divider, Avatar, Box, Stack, Flex } from '@mantine/core';
import SkeletonChat from './skeleton-chat.component';

const GroupChat = ({
  groupname,
  member,
  date: messageDate,
  isMessageIn,
  isLoading,
  onClick,
}: IGroupChatProps) => {
  console.log(isLoading);

  return isLoading ? (
    <Box onClick={onClick}>
      <Flex direction={'row'} gap={20}>
        <Avatar.Group spacing={16}>
          <Avatar size={'md'}>
            <ICAvatar />
          </Avatar>

          <Avatar size={'md'} bg={COLORS['primary-blue']}>
            <ICAvatar isBlue={true} />
          </Avatar>
        </Avatar.Group>

        <Flex className="" w={'100%'} gap={20}>
          <Stack gap={6}>
            <p className="text-primary-blue font-semibold  ">{groupname}</p>

            <Stack gap={0}>
              <p className="font-semibold ">{member[0].name}</p>
              <Text>{member[0].message}</Text>
            </Stack>
          </Stack>

          <p className=" h-fit w-1/2 ">{messageDate}</p>
        </Flex>

        {isMessageIn ? (
          <div className="my-auto w-2.5 h-2 bg-red-500 rounded-full"></div>
        ) : null}
      </Flex>

      <Divider color={COLORS['primary-dark-gray']} mt={30} />
    </Box>
  ) : (
    <SkeletonChat />
  );
};

export default GroupChat;
