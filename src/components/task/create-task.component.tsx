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
import { IconDots } from '@tabler/icons-react';
import { useState } from 'react';

const CreateTask = () => {
  const [expandContent, setExpandContent] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');

  const [checked, setChecked] = useState(false);

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
          <TextInput
            className="w-3/6 "
            placeholder="Type Task Title"
            styles={{
              input: {
                borderColor: COLORS['secondary-gray'],
              },
            }}
          />

          <Group>
            <div
              className={`${expandContent ? '' : 'rotate-180'}`}
              onClick={() => setExpandContent(!expandContent)}
            >
              <ICExpand />
            </div>

            <Stack gap={0}>
              <IconDots size={20} />
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
              placeholder="Set Date"
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
          <Flex direction={'row'} align={'start'} gap={18}>
            <div className="w-fit h-fit " onClick={() => setIsEdit(!isEdit)}>
              <ICEdit />
            </div>
            <Textarea
              w={'100%'}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              autosize
              minRows={2}
              maxRows={4}
              placeholder="No Description"
              styles={{
                input: {
                  borderColor: 'white',
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

export default CreateTask;
