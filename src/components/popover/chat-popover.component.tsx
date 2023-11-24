import { ICLigthning } from '@/assets/icons/lightning-icon';
import { ICQuestion } from '@/assets/icons/question-icon';
import { ICTodo } from '@/assets/icons/to_do_list-icon';
import {
  Popover,
  Group,
  Text,
  Button,
  Stack,
  TextInput,
  Space,
  Card,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import GroupChat from '../chat/group-chat.component';
import { COLORS } from '@/constant/colors.constant';
import { useContext, useEffect, useState } from 'react';
import { useQueryUsers } from '@/hooks/user/useQueryUsers';
import { IPopoverProps } from '@/interfaces/popover.interfaces';
import GroupChatLayout from '@/layouts/group-chat.layout';
import { ChatContext, Chats } from '@/context/chat.context';
import MainPopover from './main-popover.component';
import RoomChatLayout from '@/layouts/room-chat.layout';

const ChatPopover = ({ isActive, isOpened, onClick }: IPopoverProps) => {
  const [opened, setOpened] = useState(false);

  const { chatId } = useContext(ChatContext);
  const [userData, setUserData] = useState('');

  console.log('user data : ', userData);

  useEffect(() => {
    console.log('chat Id : ', chatId);
  }, [chatId]);

  return (
    <Popover width={700} opened={isOpened} closeOnClickOutside position="top">
      <Popover.Target>
        <Group
          ff={'Lato'}
          h={'fit-content'}
          w={'fit-content'}
          className="w-fit h-fit hover:scale-90 duration-150"
          //   onClick={onClick}
          onClick={onClick}
        >
          <ICQuestion />
        </Group>
      </Popover.Target>

      <Chats>
        <Popover.Dropdown style={{ border: 0 }}>
          <GroupChatLayout
            onClick={(e: any) => {
              console.log(e.target.innerHTML);
              setUserData(e.target.innerHTML);
            }}
          />
          {userData !== '' ? (
            <RoomChatLayout onClick={() => setUserData('')} />
          ) : null}
          {/* <MainPopover /> */}
        </Popover.Dropdown>
      </Chats>
    </Popover>
  );
};

export default ChatPopover;
