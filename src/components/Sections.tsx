"use client"

import st from "./Sections.module.scss"
import { useRef } from "react"
import CardLink from "./CardLink"

export default function Sections() {
  const allRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={allRef} style={{ transition: "all 0.5s ease" }}>
      <h1 className={st.sectionTitle}>Праграмаванне і інтэрнет</h1>
      <section className={st.blocks}>
        <CardLink
          name="Ўвесь раздзел"
          path="/words/prog-internet"
          allDiv={allRef.current}
          isFull
        />
        <CardLink
          name="Вэб-праграммаванне"
          path="/words/prog-internet"
          allDiv={allRef.current}
        />
        <CardLink
          name="Праграммаванне мабільных дадаткаў"
          path="/words/prog-mobile"
          allDiv={allRef.current}
        />
        <CardLink
          name="Праграммаванне мікракантролераў і ўбудавальных сістэм"
          path="/words/prog-micro"
          allDiv={allRef.current}
        />
        <CardLink
          name="Алгарытмы і структуры даных"
          path="/words/algo"
          allDiv={allRef.current}
        />
        <CardLink
          name="Інтэрнэт рэчаў"
          path="/words/internet"
          allDiv={allRef.current}
        />
      </section>
      <h1 className={st.sectionTitle}>Электроніка</h1>
      <section className={st.blocks}>
        <CardLink
          name="Асновы аналагавай і лічбавай электронікі"
          path="/words/electro-fundamentals"
          allDiv={allRef.current}
        />
        <CardLink
          name="Сістэмы кіравання і аўтаматызацыя"
          path="/words/control-systems"
          allDiv={allRef.current}
        />
        <CardLink
          name="Электрамантаж і схемы"
          path="/words/schemes"
          allDiv={allRef.current}
        />
      </section>
    </div>
  )
}
