import ChatPopover from '@/components/popover/chat-popover.component';
import MenuPopover from '@/components/popover/menu-popover.component';
import TaskPopover from '@/components/popover/task-popover.component';
import { Text, Card } from '@mantine/core';
import { useState } from 'react';

const InboxPage = () => {
  const [isActivePop, setIsActivePop] = useState('');

  function handlePop(activePop: string) {
    if (activePop === isActivePop) {
      return setIsActivePop('');
    }
    setIsActivePop(activePop);
  }

  return (
    <main className="bg-white min-h-screen relative flex flex-col justify-between ">
      <Text ff={'Lato'}>Inbox Page</Text>

      <div className="flex justify-end p-7 ">
        <ChatPopover
          onClick={() => handlePop('chat')}
          isOpened={isActivePop === 'chat'}
        />

        <TaskPopover
          onClick={() => handlePop('task')}
          isOpened={isActivePop === 'task'}
        />
      </div>
    </main>
  );
};

export default InboxPage;
