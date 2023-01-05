import { Freeze, Key, Limite, Security } from "components";

export const items = [
  {
    icon: <Freeze fill="white" width={30} height={30} />,
    title: "Freeze card",
    subtitle: "Tap again to unfreeze"
  },
  {
    icon: <Key fill="white" width={30} height={30} />,
    title: "View PIN",
    subtitle: "Always protect your PIN"
  },
  {
    icon: <Security fill="white" width={30} height={30} />,
    title: "Security",
    subtitle: "Enable additional protection"
  },
  {
    icon: <Limite fill="white" width={30} height={30} />,
    title: "Limit",
    subtitle: "Set monthly spending amount"
  }
];
