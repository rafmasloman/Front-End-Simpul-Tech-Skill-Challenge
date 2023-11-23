import { Modal, TextInput, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';

interface IChatModalProps {
  opened: boolean;
  open?: () => void;
  close: () => void;
}

export const ChatModal = ({ opened, open, close }: IChatModalProps) => {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Chat"
      centered
      xOffset={'2vw'}
    >
      <Group w={'100%'}>
        <Text>Ini modal</Text>
      </Group>
    </Modal>
  );
};
