import { FC } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "..";

const MessageIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" fill="white" width={30} height={30} {...props}>
    <Path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
  </Svg>
);

export default MessageIcon;
