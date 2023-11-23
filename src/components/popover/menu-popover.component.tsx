import { ICLigthning } from '@/assets/icons/lightning-icon';
import { ICQuestion } from '@/assets/icons/question-icon';
import { ICTodo } from '@/assets/icons/to_do_list-icon';
import { ApiUserQueryPosts } from '@/pages/api/user.api';
import { Popover, Group, Text, Button, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MenuPopover = () => {
  const { push } = useRouter();

  const handleNavigationPage = (url: string) => {
    push(url);
  };

  return (
    <Popover width={200} closeOnClickOutside position="left-end">
      <Popover.Target>
        <Group
          h={'fit-content'}
          w={'fit-content'}
          className="w-fit h-fit hover:scale-90 duration-150"
        >
          <ICLigthning />
        </Group>
      </Popover.Target>

      <Popover.Dropdown style={{ border: 0 }}>
        <Group className="flex " ff={'Lato'}>
          <div
            className="hover:scale-90 duration-150 "
            onClick={() => handleNavigationPage('/inbox')}
          >
            <Text className="text-center" fw={400} mb={10}>
              Inbox
            </Text>
            <ICQuestion />
          </div>
          <div
            className="hover:scale-90 duration-150 "
            onClick={() => handleNavigationPage('/tasks')}
          >
            <Text className="text-center" mb={10}>
              Task
            </Text>
            <ICTodo />
          </div>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};

export default MenuPopover;
