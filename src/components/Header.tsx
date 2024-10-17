import Image from "next/image"
import st from "./Header.module.scss"
import Link from "next/link"

export default function Header() {
  return (
    <div style={{ width: "100%" }}>
      <div className={st.headerPlug}></div>
      <header className={st.header}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={st.headerName}>Беларускі тэхнік</div>
        </Link>
        <Link href="/">
          <Image
            className={st.headerLogo}
            src="/logo.png"
            width={100}
            height={100}
            alt={""}
          />
        </Link>
      </header>
    </div>
  )
}
