import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { Meta, StoryObj } from "@storybook/react"
import { CalendarDays, Twitter } from "lucide-react"
import "../index.css"

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm text-muted-foreground">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithStats: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">View Statistics</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="text-lg font-semibold">89</div>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Projects Completed</h4>
              <p className="text-xs text-muted-foreground">
                Last updated 2 hours ago
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Success Rate</p>
              <div className="text-lg font-bold text-green-500">95%</div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Response Time</p>
              <div className="text-lg font-bold">2.5h</div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithSocialProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="text-blue-500 hover:underline inline-flex items-center gap-1"
        >
          <Twitter className="h-4 w-4" />
          Follow me
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <img
                src="https://avatar.iran.liara.run/public/28"
                alt="@johndoe"
                className="h-12 w-12 rounded-full"
              />
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">Sarah Williams</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>@sarahw</span>
                <span className="text-blue-500">Follow</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            UI/UX Designer • Creating digital experiences that matter • Design
            Systems enthusiast
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">2,931</span>{" "}
              Following
            </div>
            <div>
              <span className="font-semibold text-foreground">10.4k</span>{" "}
              Followers
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithArticlePreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>
        <span className="text-blue-500 cursor-pointer">Latest Article</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="space-y-4">
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt="Article preview"
            className="w-full h-32 object-cover rounded-md"
          />
          <div>
            <h3 className="font-semibold">Building Better Design Systems</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn how to create and maintain scalable design systems that
              improve your team's productivity and consistency.
            </p>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>5 min read</span>
            <span>Published on Oct 15, 2023</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
