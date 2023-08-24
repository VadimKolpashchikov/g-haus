import { useState } from "react";

interface TabItem {
  title: string;
  category: Category[];
}
interface Category {
  name: string;
  link: string;
}

interface Tab {
  active: boolean;
  name: string;
  list: TabItem[];
}

type Tabs = Tab[];

export default function useInstructionsData(): [
  Tabs,
  React.Dispatch<React.SetStateAction<Tabs>>
] {
  const [tabs, setTabs] = useState([
    {
      active: true,
      name: "Самогонные аппараты",
      list: [
        {
          title: "A",
          category: [
            {
              name: "Алхимик",
              link: "#",
            },
            {
              name: "Атаман",
              link: "#",
            },
          ],
        },
        {
          title: "Б",
          category: [
            {
              name: "Благовар",
              link: "#",
            },
          ],
        },
        {
          title: "В",
          category: [
            {
              name: "Витязь",
              link: "#",
            },
          ],
        },
        {
          title: "Г",
          category: [
            {
              name: "Германия",
              link: "#",
            },
            {
              name: "Гусар",
              link: "#",
            },
          ],
        },
        {
          title: "Д",
          category: [
            {
              name: "Дачный",
              link: "#",
            },
            {
              name: "Дионис",
              link: "#",
            },
          ],
        },
        {
          title: "Е",
          category: [
            {
              name: "Егерь",
              link: "#",
            },
          ],
        },
        {
          title: "И",
          category: [
            {
              name: "Источник",
              link: "#",
            },
          ],
        },
        {
          title: "К",
          category: [
            {
              name: "Крепость",
              link: "#",
            },
            {
              name: "Крестьянка",
              link: "#",
            },
            {
              name: "Кубань",
              link: "#",
            },
          ],
        },
        {
          title: "М",
          category: [
            {
              name: "Магнат",
              link: "#",
            },
            {
              name: "Минивар",
              link: "#",
            },
          ],
        },
        {
          title: "П",
          category: [
            {
              name: "Пионер",
              link: "#",
            },
          ],
        },
        {
          title: "С",
          category: [
            {
              name: "Славянка Премиум",
              link: "#",
            },
            {
              name: "Союз",
              link: "#",
            },
          ],
        },
        {
          title: "Т",
          category: [
            {
              name: "Теплосталь",
              link: "#",
            },
          ],
        },
        {
          title: "Ф",
          category: [
            {
              name: "Финляндия",
              link: "#",
            },
          ],
        },
        {
          title: "Х",
          category: [
            {
              name: "Хантер",
              link: "#",
            },
          ],
        },
        {
          title: "G",
          category: [
            {
              name: "Gelikon",
              link: "#",
            },
          ],
        },
        {
          title: "M",
          category: [
            {
              name: "Merkel",
              link: "#",
            },
          ],
        },
        {
          title: "O",
          category: [
            {
              name: "Organic 2",
              link: "#",
            },
            {
              name: "Organic 3",
              link: "#",
            },
          ],
        },
      ],
    },
    {
      active: false,
      name: "Гидролаторы",
      list: [
        {
          title: "Е",
          category: [
            {
              name: "Ева",
              link: "#",
            },
          ],
        },
      ],
    },
    {
      active: false,
      name: "Пескоструйные аппараты",
      list: [
        {
          title: "Б",
          category: [
            {
              name: "Булат",
              link: "#",
            },
            {
              name: "Булат 2",
              link: "#",
            },
          ],
        },
        {
          title: "С",
          category: [
            {
              name: "Спутник",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Трубогибы",
      list: [
        {
          title: "Б",
          category: [
            {
              name: "Булат",
              link: "#",
            },
          ],
        },
        {
          title: "Е",
          category: [
            {
              name: "Емеля",
              link: "#",
            },
          ],
        },
        {
          title: "Р",
          category: [
            {
              name: "Радиус",
              link: "#",
            },
          ],
        },
        {
          title: "У",
          category: [
            {
              name: "уДачный",
              link: "#",
            },
          ],
        },
        {
          title: "D",
          category: [
            {
              name: "DINO",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Станки холодной ковки",
      list: [
        {
          title: "Б",
          category: [
            {
              name: "Булат",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Гриндеры",
      list: [
        {
          title: "С",
          category: [
            {
              name: "Спутник",
              link: "#",
            },
          ],
        },
        {
          title: "У",
          category: [
            {
              name: "уДачный",
              link: "#",
            },
          ],
        },
        {
          title: "D",
          category: [
            {
              name: "DINO",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Пивоварни",
      list: [
        {
          title: "B",
          category: [
            {
              name: "BAVARIA",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Печи",
      list: [
        {
          title: "С",
          category: [
            {
              name: "Спутник / Муфельная печь",
              link: "#",
            },
          ],
        },
        {
          title: "Т",
          category: [
            {
              name: "ТеплоСталь / Печь-буржуйка",
              link: "#",
            },
            {
              name: "ТеплоСталь / Банная печь",
              link: "#",
            },
          ],
        },
        {
          title: "V",
          category: [
            {
              name: "VITA / Печь-буржуйка",
              link: "#",
            },
            {
              name: "VITA / Электрокаменная печь",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Прессы для сока",
      list: [
        {
          title: "S",
          category: [
            {
              name: "SOK / Гидропресс",
              link: "#",
            },
            {
              name: "SOK / Бутылочный пресс",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Коптильни",
      list: [
        {
          title: "B",
          category: [
            {
              name: "BRAVO",
              link: "#",
            },
            {
              name: "BRAVO 2",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Дымогенераторы",
      list: [
        {
          title: "В",
          category: [
            {
              name: "Ворон",
              link: "#",
            },
          ],
        },
        {
          title: "В",
          category: [
            {
              name: "BRAVO",
              link: "#",
            },
          ],
        },
        {
          title: "M",
          category: [
            {
              name: "Merkel",
              link: "#",
            },
            {
              name: "Merkel 2",
              link: "#",
            },
          ],
        },
        {
          title: "P",
          category: [
            {
              name: "Platon",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Камеры для копчения",
      list: [
        {
          title: "В",
          category: [
            {
              name: "BRAVO",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Сыроварни",
      list: [
        {
          title: "B",
          category: [
            {
              name: "Bergmann",
              link: "#",
            },
          ],
        },
      ],
    },

    {
      active: false,
      name: "Автоклавы",
      list: [
        {
          title: "Б",
          category: [
            {
              name: "Белорусский",
              link: "#",
            },
            {
              name: "Булат",
              link: "#",
            },
          ],
        },

        {
          title: "К",
          category: [
            {
              name: "Крестьянка",
              link: "#",
            },
          ],
        },

        {
          title: "B",
          category: [
            {
              name: "BRAVO",
              link: "#",
            },
          ],
        },
      ],
    },
  ]);

  return [tabs, setTabs];
}
