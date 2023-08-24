import { useState } from "react";

interface Tab {
  name: string;
  list: string[];
}

type Tabs = Tab[];

export default function useLicensesData(): [
  Tabs,
  React.Dispatch<React.SetStateAction<Tabs>>
] {
  const [tabs, setTabs] = useState([
    {
      name: "Декларации соответствия",
      list: [
        "declaration-1",
        "declaration-2",
        "declaration-3",
        "declaration-4",
        "declaration-5",
        "declaration-6",
        "declaration-7",
        "declaration-8",
        "declaration-9",
      ],
    },
    {
      name: "Товарные знаки",
      list: [
        "trademark-1",
        "trademark-2",
        "trademark-3",
        "trademark-4",
        "trademark-5",
        "trademark-6",
        "trademark-7",
        "trademark-8",
        "trademark-9",
        "trademark-10",
        "trademark-11",
        "trademark-12",
      ],
    },
    {
      name: "Патенты",
      list: [
        "patent-1",
        "patent-2",
        "patent-3",
        "patent-4",
        "patent-5",
        "patent-6",
        "patent-7",
        "patent-8",
        "patent-9",
        "patent-10",
        "patent-11",
        "patent-12",
      ],
    },
  ]);

  return [tabs, setTabs];
}
