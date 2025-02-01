import { ReactChildren } from "@/types/react"

export const NewTabLink = ({
  url,
  children,
}: { url: string } & ReactChildren) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <a
      href={url}
      onClick={handleClick}
      className="underline text-primary cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
