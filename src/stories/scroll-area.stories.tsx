import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

const CARDS = Array.from({ length: 10 }).map((_, i) => ({
  title: `Card ${i + 1}`,
  description: "Desc",
}))

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="w-[150px] shrink-0 rounded-md border p-4"
          >
            <div className="text-sm font-medium">{card.title}</div>
            <div className="text-sm text-muted-foreground">
              {card.description}
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

const SONGS = [
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Currents",
  },
  {
    title: "Breathe Deeper",
    artist: "Tame Impala",
    album: "The Slow Rush",
  },
  {
    title: "Let It Happen",
    artist: "Tame Impala",
    album: "Currents",
  },
  {
    title: "Lost In Yesterday",
    artist: "Tame Impala",
    album: "The Slow Rush",
  },
  {
    title: "Is It True",
    artist: "Tame Impala",
    album: "The Slow Rush",
  },
] as const

export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-[400px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Listen Now</h4>
        {SONGS.map((song) => (
          <div key={song.title} className="mb-4 text-sm">
            <div className="text-sm font-medium leading-none">{song.title}</div>
            <div className="text-sm text-muted-foreground">{song.artist}</div>
            <div className="text-xs text-muted-foreground">{song.album}</div>
            <Separator className="mt-2.5" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    status: "Offline",
  },
  {
    name: "Carol Williams",
    email: "carol@example.com",
    status: "Active",
  },
  {
    name: "David Brown",
    email: "david@example.com",
    status: "Away",
  },
  {
    name: "Eve Davis",
    email: "eve@example.com",
    status: "Active",
  },
  {
    name: "Frank Miller",
    email: "frank@example.com",
    status: "Offline",
  },
] as const

export const WithCustomStyles: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-[400px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Team Members</h4>
        {users.map((user) => (
          <div
            key={user.email}
            className="mb-4 rounded-lg border p-3 text-sm transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{user.name}</div>
              <div
                className={cn(
                  "text-xs",
                  user.status === "Active" && "text-green-500",
                  user.status === "Offline" && "text-red-500",
                  user.status === "Away" && "text-yellow-500"
                )}
              >
                {user.status}
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {user.email}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const ScrollableContainer: Story = {
  render: () => (
    <ScrollArea className="h-[500px] w-full max-w-[600px] rounded-md border p-4">
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-semibold">Section {i + 1}</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
