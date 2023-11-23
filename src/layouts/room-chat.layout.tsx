import Message from '@/components/message/message.component';
import { COLORS } from '@/constant/colors.constant';
import {
  Card,
  Group,
  Stack,
  Text,
  Flex,
  Space,
  Divider,
  Button,
  Box,
  TextInput,
} from '@mantine/core';
import { IconArrowLeft, IconX, IconDots } from '@tabler/icons-react';

const RoomChatLayout = () => {
  return (
    <Card withBorder h={650} ff={'Lato'}>
      <Group>
        <IconArrowLeft />

        <Stack gap={5}>
          <Text>
            I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
          </Text>
          <Text>3 Participants</Text>
        </Stack>

        <IconX />
      </Group>

      <Divider />

      <Box>
        <Group>
          <Message
            time="19:32"
            messageText="No worries. It will be completed ASAP. I’ve asked him yesterday."
            name="You"
            date="Today June 09, 2021"
          />
        </Group>
      </Box>

      <Group>
        <TextInput />
        <Button>Send</Button>
      </Group>
    </Card>
  );
};

export default RoomChatLayout;
