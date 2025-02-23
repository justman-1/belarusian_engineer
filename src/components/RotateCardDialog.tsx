import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog"
import useDialogStore from "@/stores/useDialogOpen"

export default function RotateCardDialog() {
  const isOpen: boolean = useDialogStore((state) => state.on)
  const setResponse = useDialogStore((state) => state.setResponse)
  return (
    <DialogRoot
      placement={"center"}
      open={isOpen}
      onOpenChange={() => {
        setResponse(-1)
      }}
      motionPreset="slide-in-bottom"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Калі вы перавернеце картку, у гэтым тэсце ваш адказ пад ёй будзе{" "}
            <span style={{ color: "red" }}>незваротна ануляваны</span>.
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>Вы сапраўды хочаце перавярнуць картку?</p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setResponse(1)
            }}
          >
            Перавярнуць
          </Button>
          <Button
            colorPalette={"blue"}
            onClick={() => {
              setResponse(0)
            }}
          >
            Адмена
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
