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
  Grid,
} from '@mantine/core';
import { IconArrowLeft, IconX, IconDots } from '@tabler/icons-react';

interface IRoomChatLayoutTypes {
  onClick?: (e: any) => void;
}

const RoomChatLayout = ({ onClick }: IRoomChatLayoutTypes) => {
  return (
    <Card withBorder h={650} ff={'Lato'}>
      <Group justify="space-between">
        <Group>
          <IconArrowLeft onClick={onClick} />

          <Stack gap={0}>
            <Text c={COLORS['primary-blue']} fw={700}>
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </Text>
            <Text>3 Participants</Text>
          </Stack>
        </Group>

        <IconX />
      </Group>

      <Divider mt={20} />

      <Box>
        <Group justify="end">
          <Message
            time="19:32"
            messageText="No worries. It will be completed ASAP. I’ve asked him yesterday."
            name="You"
            date="Today June 09, 2021"
          />
        </Group>

        <Space mt={10} />

        <Group justify="start">
          <Message
            time="19:32"
            messageText="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
            name="Mary Hilda"
            date="Today June 09, 2021"
          />
        </Group>
      </Box>

      <Space mt={40} />

      <Grid>
        <Grid.Col span={10}>
          <TextInput
            placeholder="Type a new message"
            styles={{
              input: {
                borderColor: COLORS['secondary-gray'],
              },
            }}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            bg={COLORS['primary-blue']}
            w={'100%'}
            className="font-primary"
          >
            Send
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default RoomChatLayout;
