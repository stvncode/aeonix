export const getElementPath = (element: HTMLElement): HTMLElement[] => {
  const path: HTMLElement[] = []
  let current: HTMLElement | null = element

  while (current && !current.classList.contains("h-full")) {
    path.push(current)
    current = current.parentElement
  }

  return path
}
