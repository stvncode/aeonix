import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Meta, StoryObj } from "@storybook/react"
import { Bell, CalendarIcon, Info, Settings } from "lucide-react"
import "../index.css"

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithSettings: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Settings className="h-4 w-4" />
            <div>
              <h4 className="font-medium leading-none">Appearance</h4>
              <p className="text-sm text-muted-foreground">
                Customize the interface appearance
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Theme</Label>
            <select className="w-full rounded-md border p-2">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label>Language</Label>
            <select className="w-full rounded-md border p-2">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Calendar: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          Pick a date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Select Date Range</h4>
            <p className="text-sm text-muted-foreground">
              Choose your preferred date range
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label>Start Date</Label>
                <Input type="date" className="h-8" />
              </div>
              <div>
                <Label>End Date</Label>
                <Input type="date" className="h-8" />
              </div>
            </div>
          </div>
          <Button size="sm">Apply Range</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Notifications: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Notifications</h4>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>
          <div className="grid gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 rounded-lg border p-3">
                <Info className="h-5 w-5 text-blue-500" />
                <div className="grid gap-1">
                  <p className="text-sm font-medium">New Update Available</p>
                  <p className="text-xs text-muted-foreground">
                    A new software version is available for download.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button size="sm" className="w-full">
            View All
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const CustomPosition: Story = {
  render: () => (
    <div className="flex gap-4">
      {["top", "right", "bottom", "left"].map((position) => (
        <Popover key={position}>
          <PopoverTrigger asChild>
            <Button variant="outline">{position}</Button>
          </PopoverTrigger>
          <PopoverContent
            side={position as "top" | "right" | "bottom" | "left"}
            className="w-40"
          >
            <p className="text-sm">This popover opens from the {position}.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
