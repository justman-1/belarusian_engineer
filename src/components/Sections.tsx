import st from "./Sections.module.scss"
/* import { useRef } from "react" */
import CardLink from "./CardLink"

export default function Sections() {
  /* const allRef = useRef<HTMLDivElement>(null) */
  /* function changeAllOpacity(val: string) {
    if (allRef.current) allRef.current.style.opacity = val
  } */
  return (
    <div /* ref={allRef} */ style={{ transition: "all 0.3s ease" }}>
      <h1 className={st.sectionTitle}>Праграмаванне і інтэрнет</h1>
      <section className={st.blocks}>
        <CardLink
          name="Ўвесь раздзел: Праграмаванне і інтэрнет"
          path="/words/prog-full"
          /* makeOpacity0={changeAllOpacity} */
          isFull
        />
        <CardLink
          name="Вэб-праграммаванне"
          path="/words/prog-internet"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Праграммаванне мабільных дадаткаў"
          path="/words/prog-mobile"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Праграммаванне мікракантролераў і ўбудавальных сістэм"
          path="/words/prog-micro"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Алгарытмы і структуры даных"
          path="/words/algo"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Машыннае навучанне і штучны інтэлект"
          path="/words/ai"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Інтэрнэт рэчаў"
          path="/words/internet"
          /* makeOpacity0={changeAllOpacity} */
        />
      </section>
      <h1 className={st.sectionTitle}>Электроніка</h1>
      <section className={st.blocks}>
        <CardLink
          name="Ўвесь раздзел: Электроніка"
          path="/words/electronics-full"
          /* makeOpacity0={changeAllOpacity} */
          isFull
        />
        <CardLink
          name="Асновы аналагавай і лічбавай электронікі"
          path="/words/electro-fundamentals"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Сістэмы кіравання і аўтаматызацыя"
          path="/words/control-systems"
          /* makeOpacity0={changeAllOpacity} */
        />
        <CardLink
          name="Электрамантаж і схемы"
          path="/words/schemes"
          /* makeOpacity0={changeAllOpacity} */
        />
      </section>
    </div>
  )
}
