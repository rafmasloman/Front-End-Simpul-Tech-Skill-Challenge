export interface IGroupChatProps {
  groupname: string;
  date: string;
  member: IMemberGroup[];
  isMessageIn?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export interface IMemberGroup {
  name: string;
  message: string;
}
