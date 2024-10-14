import Image from "next/image"
import st from "./Header.module.scss"

export default function Header() {
  return (
    <div style={{ width: "100%" }}>
      <div className={st.headerPlug}></div>
      <header className={st.header}>
        <div className={st.headerName}>Беларускі тэхнік</div>
        <Image
          className={st.headerLogo}
          src="/logo.png"
          width={100}
          height={100}
          alt={""}
        />
      </header>
    </div>
  )
}
