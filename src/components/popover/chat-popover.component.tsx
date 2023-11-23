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
import { useEffect, useState } from 'react';
import { useQueryUsers } from '@/hooks/user/useQueryUsers';
import { IPopoverProps } from '@/interfaces/popover.interfaces';
import GroupChatLayout from '@/layouts/group-chat.layout';

const ChatPopover = ({ isActive, isOpened, onClick }: IPopoverProps) => {
  const [opened, setOpened] = useState(false);

  console.log('user data : ', opened);

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

      <Popover.Dropdown style={{ border: 0 }}>
        <GroupChatLayout />
      </Popover.Dropdown>
    </Popover>
  );
};

export default ChatPopover;
