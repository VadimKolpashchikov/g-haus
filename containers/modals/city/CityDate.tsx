import { useState } from "react";
function getCityDate() {
  const [cities, setSities] = useState<string[]>([
    "Абакан",
    "Абдулино",
    "Адлер",
    "Александров",
    "Амурск",
    "Анапа",
    "Армавир",
    "Артем",
    "Архангельск",
    "Астрахань",
    "Гатчина",
    "Железноводск",
    "Железнодорожный",
    "Жуковский",
    "Йошкар-Ола",
    "Магадан",
    "Магнитогорск",
    "Мирный",
    "Москва",
    "Муром",
    "Мценск",
    "Мыски",
    "Таганрог",
    "Тамбов",
    "Тверь",
    "Темрюк",
    "Тимашёвск",
    "Толмачёво",
    "Тольятти",
    "Томск",
    "Тула",
    "Тюмень",
    "Чаплыгин",
    "Чебоксары",
    "Челябинск",
    "Череповец",
    "Юдино",
    "Балаково",
    "Балашиха",
    "Барабинск",
    "Барнаул",
    "Белгород",
    "Белово",
    "Березовский",
    "Брянск",
    "Данков",
    "Дзержинск",
    "Донецк",
    "Засечное",
    "Звенигород",
    "Казань",
    "Калининград",
    "Калуга",
    "Калья",
    "Камышин",
    "Канск",
    "Карачев",
    "Кемерово",
    "Керчь",
    "Кингисепп",
    "Кинель",
    "Киров",
    "Кировград",
    "Клин",
    "Ковров",
    "Кольчугино",
    "Комсомольск-на-Амуре",
    "Королёв",
    "Коряжма",
    "Кострома",
    "Котельнич",
    "Котлас",
    "Красногорск",
    "Краснодар",
    "Красное Село",
    "Краснокаменск",
    "Краснокамск",
    "Красноярск",
    "Кропоткин",
    "Крымск",
    "Кубинка",
    "Кудрово",
    "Куйбышев",
    "Курган",
    "Курск",
    "Набережные Челны",
    "Наро-Фоминск",
    "Нестерово",
    "Нижневартовск",
    "Нижнекамск",
    "Нижний Новгород",
    "Нижний Тагил",
    "Новокузнецк",
    "Новомосковск",
    "Новороссийск",
    "Новосибирск",
    "Новотроицк",
    "Новочебоксарск",
    "Ногинск",
    "Улан-Удэ",
    "Ульяновск",
    "Шарья",
    "Ярославль",
    "Великие Луки",
    "Великий Устюг",
    "Владикавказ",
    "Владимир",
    "Волгоград",
    "Волгодонск",
    "Вологда",
    "Воронеж",
    "Выкса",
    "Евпатория",
    "Ейск",
    "Екатеринбург",
    "Елабуга",
    "Иваново",
    "Ижевск",
    "Лабинск",
    "Лермонтов",
    "Липецк",
    "Луганск",
    "Лысьва",
    "Люберцы",
    "Обнинск",
    "Одинцово",
    "Озерск",
    "Омск",
    "Омутнинск",
    "Орёл",
    "Оренбург",
    "Орехово-Зуево",
    "Отрадный",
    "Переславль-Залесский",
    "Пермь",
    "Петрозаводск",
    "Прокопьевск",
    "Хабаровск",
    "Химки",
    "Электросталь",
    "Элиста",
    "Энгельс",
  ]);

  return cities;
}

function getAlphabet() {
  const [alphabet, setAlphabet] = useState<string[]>([
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
  ]);
  return alphabet;
}
export { getCityDate, getAlphabet };
