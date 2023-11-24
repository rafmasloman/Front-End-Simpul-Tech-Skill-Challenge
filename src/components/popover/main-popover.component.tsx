import { ChatContext } from '@/context/chat.context';
import GroupChatLayout from '@/layouts/group-chat.layout';
import { useContext } from 'react';

const MainPopover = () => {
  const { chatId } = useContext(ChatContext);

  console.log('chat id main : ', chatId);

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default MainPopover;
