import { ICEdit } from '@/assets/icons/edit-icon';
import { ICSchedule } from '@/assets/icons/schedule-icon';
import { Group, Checkbox, Text, Stack, Flex, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconCalendarEvent, IconArrowUp, IconDots } from '@tabler/icons-react';
import { useState } from 'react';

interface ITaskProps {
  title: string;
  description: string;
  date: string;
}

const TaskCard = ({ title, description, date }: ITaskProps) => {
  const [menuOption, setMenuOption] = useState(false);
  const [checked, setChecked] = useState(false);

  const showMenu = () => {
    return (
      <Button className=" flex   text-red-400  h-9 border px-5 rounded-md border-primary-dark-gray">
        Delete
      </Button>
    );
  };

  return (
    <Flex direction={'row'}>
      <Checkbox
        mr={20}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        checked={checked}
      />
      <Flex direction={'column'} w={'100%'}>
        <Flex
          direction={'row'}
          justify="space-between"
          align={'flex-start'}
          className="relative w-full"
        >
          <Text
            className="w-3/6 font-semibold "
            td={checked ? 'line-through' : ''}
          >
            {title}
          </Text>
          <Group>
            <Text className="text-red-500">2 Days Left</Text>

            <Text>12/06/2021</Text>

            <IconArrowUp size={20} />

            <Stack gap={0}>
              <IconDots size={20} onClick={() => setMenuOption(!menuOption)} />
              {menuOption ? showMenu() : null}
            </Stack>
          </Group>
        </Flex>

        <Stack mt={16}>
          <Group gap={18}>
            <div>
              <ICSchedule />
            </div>
            <DateInput
              placeholder="Input Date"
              rightSection={<IconCalendarEvent />}
              styles={{
                input: {
                  width: 210,
                  height: 40,
                },
              }}
            />
          </Group>
          <Flex direction={'row'} align={'center'} gap={18}>
            <div className="w-fit h-fit ">
              <ICEdit />
            </div>
            <Text>{description}</Text>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default TaskCard;
