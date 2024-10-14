import st from "./Sections.module.scss"
//gh пасхалка

export default function Sections() {
  return (
    <>
      <h1 className={st.sectionTitle}>Праграмаванне і інтэрнет</h1>
      <section className={st.blocks}>
        <div className={st.block}>Вэб-праграммаванне</div>
        <div className={st.block}>Праграммаванне мабільных дадаткаў</div>
        <div className={st.block}>
          Праграммаванне мікракантролераў і ўбудавальных сістэм
        </div>
        <div className={st.block}>Алгарытмы і структуры дадзеных</div>
        <div className={st.block}>Інтэрнэт рэчаў</div>
      </section>
      <h1 className={st.sectionTitle}>Электроніка</h1>
    </>
  )
}
