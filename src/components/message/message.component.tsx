import { COLORS } from '@/constant/colors.constant';
import { Box, Group, Text, Flex, Stack } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

interface IMessageProps {
  messageText: string;
  name: string;
  date?: string;
  time: string;
}

const Message = ({ messageText, name, date, time }: IMessageProps) => {
  const checkUsername = () => {
    return name.toLowerCase().includes('you'.toLowerCase());
  };

  return (
    <Box>
      <Stack gap={5}>
        <Text ta={`${checkUsername() ? 'right' : 'left'}`}>{name}</Text>
        <Group align={`start`}>
          {checkUsername() ? <IconDots /> : null}

          <Box
            bg={
              checkUsername()
                ? COLORS['message-purple']
                : COLORS['message-yellow']
            }
            p={10}
            style={{ borderRadius: 7 }}
            className="w-4/5"
          >
            <Text fz={'0.875rem'}>{messageText}</Text>
            <Text c={COLORS['secondary-gray']} fz={'0.85rem'}>
              {time}
            </Text>
          </Box>
          {checkUsername() ? null : <IconDots />}
        </Group>
      </Stack>
    </Box>
  );
};

export default Message;
