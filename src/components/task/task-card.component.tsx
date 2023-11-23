import { ICCalender } from '@/assets/icons/calender-icon';
import { ICEdit } from '@/assets/icons/edit-icon';
import { ICExpand } from '@/assets/icons/expand-icon';
import { ICSchedule } from '@/assets/icons/schedule-icon';
import { COLORS } from '@/constant/colors.constant';
import {
  Group,
  Checkbox,
  Text,
  Stack,
  Flex,
  Button,
  TextInput,
  Textarea,
} from '@mantine/core';
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
  const [expandContent, setExpandContent] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(description);

  const [checked, setChecked] = useState(false);

  console.log('Is Expand : ', expandContent);

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
        styles={{
          icon: {
            color: COLORS['primary-gray'],
            backgroundColor: 'transparent',
          },
          input: {
            backgroundColor: 'transparent',
            borderRadius: 2,
            borderColor: COLORS['primary-gray'],
            borderWidth: 3,
          },
        }}
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
            c={checked ? COLORS['primary-gray'] : ''}
            td={checked ? 'line-through' : ''}
          >
            {title}
          </Text>
          <Group>
            {checked ? null : <Text className="text-red-500">2 Days Left</Text>}

            <Text>12/06/2021</Text>

            <div
              className={`${expandContent ? '' : 'rotate-180'}`}
              onClick={() => setExpandContent(!expandContent)}
            >
              <ICExpand />
            </div>

            <Stack gap={0}>
              <IconDots size={20} onClick={() => setMenuOption(!menuOption)} />
              {menuOption ? showMenu() : null}
            </Stack>
          </Group>
        </Flex>

        <Stack
          mt={16}
          className={`${
            expandContent ? 'h-full' : 'h-0'
          } duration-500 overflow-hidden`}
        >
          <Group gap={18}>
            <div>
              <ICSchedule />
            </div>
            <DateInput
              placeholder="Input Date"
              rightSection={<ICCalender />}
              decadeLabelFormat={'YYYY'}
              styles={{
                input: {
                  width: 210,
                  height: 40,
                  borderColor: COLORS['primary-dark-gray'],
                },
                calendarHeader: {
                  color: COLORS['primary-dark-gray'],
                },
              }}
            />
          </Group>
          <Flex direction={'row'} align={'center'} gap={18}>
            <div className="w-fit h-fit " onClick={() => setIsEdit(!isEdit)}>
              <ICEdit />
            </div>
            <Textarea
              w={'100%'}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              disabled={!isEdit}
              autosize
              minRows={2}
              maxRows={4}
              styles={{
                input: {
                  borderColor: isEdit ? COLORS['primary-gray'] : 'white',
                  color: COLORS['secondary-gray'],
                  width: '100%',
                  textAlign: 'justify',
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default TaskCard;
