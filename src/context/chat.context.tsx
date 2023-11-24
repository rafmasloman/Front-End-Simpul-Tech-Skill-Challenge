import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IChatContextProps {
  children: ReactNode;
}

interface IChatContextType {
  chatId: string;
  setChatId: Dispatch<SetStateAction<string>>;
}

export const ChatContext = createContext<IChatContextType>({
  chatId: '',
  setChatId: () => '',
});

export const Chats = ({ children }: IChatContextProps) => {
  const [chatId, setChatId] = useState<string>('');

  return (
    <ChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
