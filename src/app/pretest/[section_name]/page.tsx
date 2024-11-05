import Header from "@/components/Header"
import { Russo_One } from "next/font/google"

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        molestias cupiditate nisi omnis pariatur veritatis tempora magnam cum
        sapiente repellendus, laboriosam asperiores ducimus, quis tenetur
        architecto dolor nesciunt? Rem, error.
      </div>
    </div>
  )
}
