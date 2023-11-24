import { ICAvatar } from '@/assets/icons/avatar-icon';
import { COLORS } from '@/constant/colors.constant';
import { IGroupChatProps } from '@/interfaces/chat.interfaces';
import { Group, Text, Divider, Avatar, Box, Stack, Flex } from '@mantine/core';
import SkeletonChat from './skeleton-chat.component';
import { ChangeEvent, useContext } from 'react';
import { ChatContext } from '@/context/chat.context';

const GroupChat = ({
  groupname,
  member,
  date: messageDate,
  isMessageIn,
  isLoading,
  onClick,
}: IGroupChatProps) => {
  console.log(isLoading);

  const { setChatId } = useContext(ChatContext);
  return isLoading ? (
    <Box
      //   onClick={(e: any) => {
      //     e.preventDefault();
      //     setChatId(e.target.innerHTML);
      //     console.log(e.target.innerHTML);
      //   }}
      onClick={onClick}
    >
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
