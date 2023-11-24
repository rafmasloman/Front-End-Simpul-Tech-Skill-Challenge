export interface IGroupChatProps {
  groupname: string;
  date: string;
  member: IMemberGroup[];
  isMessageIn?: boolean;
  isLoading?: boolean;
  onClick?: (e: any) => void;
}

export interface IMemberGroup {
  name: string;
  message: string;
}
