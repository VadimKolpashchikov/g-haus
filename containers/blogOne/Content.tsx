import styles from "@blogOne/content.module.scss";
import Image from "next/image";

const Content = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.row_info}>
          <span className={styles.views}>
            <Image
              src={"/global/views-icon.svg"}
              alt="views"
              width={22}
              height={13}
            />
            18474
          </span>
          <span className={styles.date}>
            <Image
              src={"/global/date-icon.svg"}
              alt="date"
              width={19}
              height={19}
            />
            16 декабря 2021
          </span>
        </div>
        <div className={styles.wrapper}>
          <Image
            src={"/blogOne/content/blog-item-1.jpg"}
            alt="date"
            width={991}
            height={474}
          />
          <p>
            Этот сорт появился в продаже в середине прошлого века. Рецепт
            российского сыра разработал НИИ маслодельной и сыродельной
            промышленности СССР в 1960-х годах. С тех пор технология
            производства не менялась. Этот твердый сорт популярен и любим уже
            более 50 лет. Но не всегда в магазине можно найти полезный и
            безопасный продукт без «химии», поэтому сегодня многие задумываются
            о том, как приготовить российский сыр самостоятельно.
          </p>
          <Image
            src={"/blogOne/content/blog-item-2.jpg"}
            alt="date"
            width={991}
            height={474}
          />
          <h3>Как приготовить российский сыр в домашних условиях</h3>
          <p>
            Следуя рецепту, российский сыр в домашних условиях готовят только из
            свежего молока. Купленное в магазине использовать не стоит — оно не
            дает сырного сгустка. Молоко лучше приобрести у фермера,
            пастеризовать его и охладить.
          </p>
          <h4>Ингредиенты на 1 кг сыра «Российский»:</h4>
          <ul>
            <li>молоко – 10 л;</li>
            <li>фермент жидкий сычужный – половина чайной ложки;</li>
            <li>закваска молочнокислых бактерий – 200 мг;</li>
            <li>поваренная соль – 3 ст. ложки;</li>
            <li>вода кипяченая– 50 мл.</li>
          </ul>
          <h4>Из оборудования пригодятся:</h4>
          <ul>
            <li>сыроварня на 12 литров или более;</li>
            <li>кастрюля и кухонный термометр (если нет сыроварни);</li>
            <li>длинный нож или «Лира»;</li>
            <li>форма на 1 кг сыра;</li>
            <li>термопакет.</li>
          </ul>
          <Image
            src={"/blogOne/content/blog-item-3.jpg"}
            alt="date"
            width={991}
            height={605}
          />
          <p>Приготовление сыра проходит в несколько этапов:</p>
          <h4>1. Пастеризация</h4>
          <p>
            Молоко нагревают до 70 –72 ℃, но не кипятят. Температуру проверяют
            кухонным термометром или ориентируются по показаниям автоматической
            сыроварни.
          </p>
          <h4>2. Резервация</h4>
          <p>
            На втором этапе пастеризованное молоко нужно быстро охладить, и в
            рубашку сыроварни подают воду. Затем остывшее молоко должно
            простоять сутки при температуре 10 ℃.
          </p>
          <h4>3. Сквашивание молока</h4>
          <p>
            Чтобы начать сквашивание молока, активируют закваску. Берут
            небольшую ее щепотку (0,5 мг), засыпают в стакан подогретого до 35℃
            молока, размешивают и оставляют на 40-45 мин. Параллельно начинают
            медленно нагревать сыроварню на слабом огне или при минимальной
            мощности ТЭНа. Когда температура молока поднимется до 30℃, выливают
            в него закваску. Затем нужно взять 50 мл кипяченой остывшей воды и
            влить в нее сычужный фермент (половину чайной ложки), раствор
            перемешать, ввести в молоко. В течение часа температуру в сыроварне
            нужно поддерживать на уровне не ниже 30℃.
          </p>
          <h4>4. Обработка сгустка</h4>
          <p>
            Примерно через час образуется желеобразный сгусток. Его длинным
            ножом или «лирой» нужно разрезать на кубики со стороной около 2 см.
            Делают это прямо в сыроварне! Затем емкость закрывают крышкой и
            оставляют на 10-15 мин. Когда кубики опустятся на дно, часть
            сыворотки сливают. Сыроварню ставят на небольшой огонь и, помешивая,
            нагревают около 10 минут. Так образуется сырное зерно. Важно, чтобы
            температура не поднялась выше 38℃! Когда кубики станут меньше по
            размеру, сыворотку отцеживают, а сырное зерно заливают 3 л кипяченой
            воды (40℃). После этого раствор с зерном опять нужно подогревать
            около 15 минут, следя, чтобы температура не поднималась выше 42℃.
            Затем воду можно слить, а в зерно добавить половину чайной ложки
            соли и тщательно размешать. Чтобы стекла жидкость, зерно нужно
            откинуть на сито и подождать 30 минут.
          </p>
          <h4>5. Прессование</h4>
          <p>
            Этап прессования необходим, чтобы сформировать аккуратную сырную
            головку. Для этого зерно перекладывают в форму, а сверху ставят груз
            весом 0,5 кг. Через полчаса сырную головку нужно перевернуть и
            поставить груз побольше — 1 кг, затем груз 2 кг, потом — 3 кг.
            Выдерживать сыр под гнетом нужно до тех пор, пока не перестанет
            выделяться сыворотка.
          </p>
          <Image
            src={"/blogOne/content/blog-item-4.jpg"}
            alt="date"
            width={991}
            height={605}
          />
          <h4>6. Посол</h4>
          <p>
            После прессования проводят посол. Для этого потребуется раствор: на
            1 литр горячей воды – 3 столовые ложки соли. Рассол нагревают до
            100℃ и процеживают через сложенную в несколько слоев марлю. Сырную
            головку опускают в готовый соляной раствор, накрывают крышкой и
            оставляют на 12 часов, временами переворачивая.
          </p>
          <h4>7. Созревание</h4>
          <p>
            Просолившийся сыр вынимают и дают ему обсохнуть. Головку отправляют
            на нижнюю полку холодильника и оставляют на 2-3 дня, иногда
            переворачивают (корочка должна быть сухой). Затем сыр помещают в
            термопакет, завязывают и опускают на 5 секунд в очень горячую воду
            (90℃), чтобы пленка обтянула головку. Теперь сыр снова отправляют на
            нижнюю полку холодильника, созревать там он будет около 3 недель.
            При этом ежедневно головку нужно переворачивать. Процесс
            приготовления сыра не так сложен, как кажется. Самая большая
            трудность — поддерживать оптимальную температуру на каждом этапе
            производства и быстро охлаждать сырное зерно. Но если вы используете
            сыроварню, автоматика сделает всё за вас. Аппарат регулирует нагрев
            ТЭНов по заданным температурным режимам, а благодаря водяной рубашке
            вы охладите пастеризованное молоко быстрее, чем в обычной кастрюле.
          </p>
          <p>
            Если вы варите сыр часто или планируете заниматься этим
            профессионально, <a href="">домашняя сыроварня Bergmann</a> снимет с
            вас всю рутину.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
