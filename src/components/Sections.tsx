import st from "./Sections.module.scss"
import CardLink from "./CardLink"
import { Text } from "@chakra-ui/react"

export default function Sections() {
  return (
    <div className="container">
      <Text className={st.sectionTitle} fontSize="3xl">
        Праграмаванне і інтэрнет
      </Text>
      <section className={st.cards}>
        <CardLink name="Вэб-праграмаванне" path="/pretest/prog-web" />
        <CardLink name="Праграмаванне мабільных дадаткаў" path="/pretest/prog-mobile" />
        <CardLink name="Алгарытмы і структуры даных" path="/pretest/algo" />
        <CardLink name="Інтэрнэт рэчаў" path="/pretest/internet-things" />
        <CardLink
          name="Праграмаванне мікракантролераў і ўбудавальных сістэм"
          path="/pretest/prog-micro"
        />

        {/* <CardLink name="Машыннае навучанне і штучны інтэлект" path="/pretest/ai" /> */}
        <CardLink name="Інтэрнэт" path="/pretest/internet" />
      </section>
      <Text className={st.sectionTitle} fontSize="3xl">
        Электроніка
      </Text>
      <section className={st.cards}>
        <CardLink
          name="Асновы аналагавай і лічбавай электронікі"
          path="/pretest/electro-fundamentals"
        />
        {/* <CardLink
          name="Сістэмы кіравання і аўтаматызацыя"
          path="/pretest/control-systems"
        />
        <CardLink name="Электрамантаж і схемы" path="/pretest/schemes" /> */}
      </section>
    </div>
  )
}
