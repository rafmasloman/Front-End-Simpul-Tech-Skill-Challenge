import { COLORS } from '@/constant/colors.constant';
import { Box, Group, Text, Flex, Stack } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

interface IMessageProps {
  messageText: string;
  name: string;
  date?: string;
  time: string;
}

const Message = ({ messageText, name,date, time }: IMessageProps) => {
  return (
    <Box
      bg={
        name.includes('you')
          ? COLORS['message-green']
          : COLORS['message-yellow']
      }
    >
      <Stack>
        <Text>{name}</Text>
        <Group>
          <div>
            <Text>{messageText}</Text>
            <Text>{time}</Text>
          </div>
          <IconDots />
        </Group>
      </Stack>
    </Box>
  );
};

export default Message;
