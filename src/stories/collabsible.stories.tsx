import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ChevronRight,
  ChevronsUpDown,
  Minus,
  Plus,
  Settings,
} from "lucide-react"
import { useState } from "react"
import "../index.css"

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: function CollapsibleDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Notifications</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Push Notifications: Enabled
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Email Notifications: Disabled
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const WithIcon: Story = {
  render: function CollapsibleWithIcon() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            className="flex w-full justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </div>
            {isOpen ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            Theme: Light
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            Language: English
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            Timezone: UTC
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const Nested: Story = {
  render: function NestedCollapsible() {
    const [outerOpen, setOuterOpen] = useState(false)
    const [innerOpen, setInnerOpen] = useState(false)

    return (
      <Collapsible
        open={outerOpen}
        onOpenChange={setOuterOpen}
        className="w-[350px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex w-full justify-between">
            <span>Project Settings</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200 ${
                outerOpen ? "rotate-90" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            Project Name: My Project
          </div>
          <Collapsible
            open={innerOpen}
            onOpenChange={setInnerOpen}
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full justify-between px-4"
              >
                <span>Advanced Settings</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    innerOpen ? "rotate-90" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-4">
              <div className="rounded-md border px-4 py-2 text-sm">
                API Key: ****
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                Webhook URL: https://...
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const Animated: Story = {
  render: function AnimatedCollapsible() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex w-full justify-between">
            <span>Details</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="rounded-md border p-4 text-sm">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const WithForm: Story = {
  render: function FormCollapsible() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex w-full justify-between">
            <span>Additional Information</span>
            {isOpen ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 p-4 border rounded-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea
              className="w-full rounded-md border p-2 text-sm min-h-[100px]"
              placeholder="Tell us about yourself..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Website</label>
            <input
              type="url"
              className="w-full rounded-md border p-2 text-sm"
              placeholder="https://example.com"
            />
          </div>
          <Button className="w-full">Save</Button>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}
