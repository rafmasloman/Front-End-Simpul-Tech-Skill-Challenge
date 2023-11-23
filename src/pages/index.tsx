import Image from 'next/image';
import { Lato } from 'next/font/google';
import {
  Title,
  Button,
  Popover,
  Text,
  Group,
  TextInput,
  Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ICLigthning } from '@/assets/icons/lightning-icon';
import { ChatModal } from '@/components/modal/chat-modal.component';
import { useEffect, useState } from 'react';
import MenuPopover from '@/components/popover/menu-popover.component';
import { ApiUserQueryPosts } from './api/user.api';
import useUserQuery from '@/hooks/useUserQuery.hooks';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});

export default function Home() {
  // const [opened, { open, close }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);

  return (
    <Container
      className={`flex min-h-screen flex-col items-center p-24 justify-between ${lato.className}  bg-white`}
    >
      <h1>Simpul Techincal Test</h1>

      {/* <ChatModal opened={opened} close={close} /> */}

      <MenuPopover />
    </Container>
  );
}
