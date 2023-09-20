import { Notifications } from './Notification.styled';

export function Notification({ message, option }) {
  return <Notifications option={option}>{message}</Notifications>;
}
