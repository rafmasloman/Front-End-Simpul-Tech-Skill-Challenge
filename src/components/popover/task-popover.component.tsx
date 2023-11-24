import { ICTodo } from '@/assets/icons/to_do_list-icon';
import { COLORS } from '@/constant/colors.constant';
import {
  Popover,
  Group,
  Card,
  TextInput,
  Space,
  Flex,
  Select,
  Button,
  Divider,
} from '@mantine/core';
import { IconSearch, IconArrowDown } from '@tabler/icons-react';
import TaskCard from '../task/task-card.component';
import { IPopoverProps } from '@/interfaces/popover.interfaces';
import { useState } from 'react';
import { TODOS_DATA } from '@/pages/api/dummy.api';
import CreateTask from '../task/create-task.component';
import { ICExpand } from '@/assets/icons/expand-icon';

const TaskPopover = ({ isActive, isOpened, onClick }: IPopoverProps) => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const [isAddTask, setIsAddTask] = useState(false);
  const [addTask, setAddTask] = useState<{id: number, title: string, description: string, date: string}>({id:0,date:'',title:'',description:''})

  return (
    <Popover width={700} opened={isOpened} position="top">
      <Popover.Target>
        <Group
          ff={'Lato'}
          h={'fit-content'}
          w={'fit-content'}
          className="w-fit h-fit hover:scale-90 duration-150"
          // onClick={() => setOpened((o) => !o)}
          onClick={onClick}
        >
          <ICTodo />
        </Group>
      </Popover.Target>

      <Popover.Dropdown style={{ border: 0 }}>
        <Card
          withBorder
          h={620}
          py={20}
          className="overflow-auto no-scrollbar"
          ff={'Lato'}
          radius={'md'}
        >
          <Group justify="space-between">
            <Select
              w={'fit-content'}
              rightSection={
                <div className="rotate-180">
                  <ICExpand />
                </div>
              }
              placeholder="My Task"
              defaultValue={'My Task'}
              data={['Personal Errands', 'Urgent To-Do']}
              styles={{
                input: {
                  width: 150,
                  borderColor: COLORS['primary-dark-gray'],
                },

                dropdown: {
                  color: COLORS['primary-dark-gray'],
                },
              }}
            />
            <Button
              bg={COLORS['primary-blue']}
              onClick={() => setIsAddTask(!isAddTask)}
            >
              New Task
            </Button>
          </Group>

          <Space mb={20} />

          {TODOS_DATA.map((todos, index) => {
            return (
              <>
                <TaskCard
                  key={todos.id}
                  title={todos.title}
                  description={todos.description || 'No Description'}
                  date={todos.createdAt}
                />
                {/* {index === index - 1 ? <Divider /> : null} */}
                <Divider my={20} />
              </>
            );
          })}

          {isAddTask ? <CreateTask /> : null}
        </Card>
      </Popover.Dropdown>
    </Popover>
  );
};

export default TaskPopover;
