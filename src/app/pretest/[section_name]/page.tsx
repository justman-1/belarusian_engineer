import Header from "@/components/Header"
import { Text } from "@chakra-ui/react"
import { Russo_One } from "next/font/google"
import st from "./pretest.module.scss"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export default function preTest(/* {
  params,
}: {
  params: { section_name: string }
} */) {
  return (
    <div className={font.className}>
      <Header />
      <div className="container">
        <Text marginTop="30px" className={st.pretestText}>
          <p>
            📚 Праходзьце тэсты і вывучайце беларускую тэхнічную тэрміналогію.
          </p>
          <p>
            ✅ Пры праходжанні тэстаў вы павінны будзеце выбіраць правільныя
            пераклады для слоў з картак.
          </p>
          <p>
            🔍 Калі вы не ведаеце пераклад слова, вы можаце перавярнуць картку,
            клікнуўшы на яе, каб убачыць пераклад. Аднак, перавярнуўшы картку,
            вы больш не зможаце даць адказ у тэсце па гэтым слове (яно будзе
            залічана як няправільнае), але гэта не перашкодзіць вам прайсці тэст
            да канца.
          </p>
          <p>
            📈 Прагрэс пройдзеных тэстаў будзе захоўвацца і адлюстроўвацца ў
            выглядзе працэнтных суадносін колькасці правільна адказаных слоў да
            агульнага іх ліку.
          </p>
          <p>
            🏆 Прайдзіце ўсе тэсты на 100% і свабодна абмяркоўвайце тэмы,
            звязаныя з АйЦі і электронікай, на беларускай мове!
          </p>
        </Text>
        {/* Лэвэл 1(першыя 10 слоў) */}
        {/* Лэвэл 2(наступныя 10 слоў) */}
      </div>
    </div>
  )
}
