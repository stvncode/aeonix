export type ReactChildren = {
  children?: React.ReactNode
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

declare global {
  interface Window {
    isUnderTest: boolean
  }
}
