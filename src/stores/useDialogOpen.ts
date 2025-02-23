import { create } from "zustand"

interface UseDialogStoreType {
  on: boolean //on or off
  response: -1 | 0 | 1 //rotate card(1) or not(0). -1 means no answer
  wordsI: number
  openDialog: (wordsI: number) => void
  setResponse: (response: -1 | 0 | 1) => void
}

const useDialogStore = create<UseDialogStoreType>((set) => ({
  on: false, //on or off
  response: -1, //rotate card(1) or not(0). -1 means no answer
  wordsI: -1,
  openDialog: (wordsI) => set({ on: true, response: -1, wordsI: wordsI }),
  setResponse: (response) => set({ on: false, response: response }),
}))

export default useDialogStore
