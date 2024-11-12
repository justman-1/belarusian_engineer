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
        <CardLink
          name="Увесь раздзел: Праграмаванне і інтэрнет"
          path="/words/prog-full"
          isFull
        />
        <CardLink name="Вэб-праграммаванне" path="/words/prog-web" />
        <CardLink
          name="Праграммаванне мабільных дадаткаў"
          path="/words/prog-mobile"
        />
        <CardLink
          name="Праграммаванне мікракантролераў і ўбудавальных сістэм"
          path="/words/prog-micro"
        />
        <CardLink name="Алгарытмы і структуры даных" path="/words/algo" />
        <CardLink
          name="Машыннае навучанне і штучны інтэлект"
          path="/words/ai"
        />
        <CardLink name="Інтэрнэт рэчаў" path="/words/internet" />
      </section>
      <Text className={st.sectionTitle} fontSize="3xl">
        Электроніка
      </Text>
      <section className={st.cards}>
        <CardLink
          name="Ўвесь раздзел: Электроніка"
          path="/words/electronics-full"
          isFull
        />
        <CardLink
          name="Асновы аналагавай і лічбавай электронікі"
          path="/words/electro-fundamentals"
        />
        <CardLink
          name="Сістэмы кіравання і аўтаматызацыя"
          path="/words/control-systems"
        />
        <CardLink name="Электрамантаж і схемы" path="/words/schemes" />
      </section>
    </div>
  )
}
