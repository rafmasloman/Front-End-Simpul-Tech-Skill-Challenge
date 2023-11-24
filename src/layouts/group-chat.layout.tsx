import GroupChat from '@/components/chat/group-chat.component';
import { COLORS } from '@/constant/colors.constant';
import { ChatContext } from '@/context/chat.context';
import { useQueryUsers } from '@/hooks/user/useQueryUsers';
import { Card, Group, Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useContext, useEffect } from 'react';

interface IGroupChatParentType {
  onClick?: (e: any) => void;
}

const GroupChatLayout = ({ onClick }: IGroupChatParentType) => {
  const { userData, isSuccess } = useQueryUsers();
  const { chatId, setChatId } = useContext(ChatContext);

  //   console.log('CHAT ID : ', chatId);

  return (
    <Card withBorder h={650} ff={'Lato'}>
      <Group className="flex w-full ">
        <TextInput
          placeholder="Search"
          rightSection={<IconSearch size={16} />}
          className="w-full placeholder:text-red-500"
          radius={'sm'}
          styles={{
            input: {
              borderColor: COLORS['primary-dark-gray'],
            },
          }}
        />
      </Group>

      <Space h={40} />

      <GroupChat
        groupname="109220-Naturalization"
        date={'January 1,2021 19:10'}
        member={userData}
        isLoading={isSuccess}
        isMessageIn={true}
        onClick={onClick}
      />

      <Space h={30} />

      <GroupChat
        groupname="Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]"
        date={'02/06/2021 10:45'}
        member={[
          {
            name: 'Ellen',
            message: 'Hey, please read.',
          },
        ]}
        isLoading={isSuccess}
      />

      <Space h={30} />

      <GroupChat
        groupname="8405-Diana SALAZAR MUNGUIA"
        date={'01/06/2021 12:19'}
        member={[
          {
            name: 'Cameron Phillips',
            message:
              'I understand your initial concerns and thats very valid, Elizabeth. But you ...',
          },
        ]}
        isLoading={isSuccess}
      />
      <Space h={30} />
    </Card>
  );
};

export default GroupChatLayout;
