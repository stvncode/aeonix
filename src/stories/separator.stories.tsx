import { Separator } from "@/components/ui/separator"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import "../index.css"

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Section One</div>
      <Separator />
      <div>Section Two</div>
      <Separator />
      <div>Section Three</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center space-x-4">
      <div>Item One</div>
      <Separator orientation="vertical" />
      <div>Item Two</div>
      <Separator orientation="vertical" />
      <div>Item Three</div>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Separator className="bg-primary/50" />
      <Separator className="bg-blue-500" />
      <Separator className="bg-green-500" />
      <div className="flex h-10 items-center space-x-4">
        <div>Blue</div>
        <Separator orientation="vertical" className="bg-blue-500" />
        <div>Green</div>
        <Separator orientation="vertical" className="bg-green-500" />
        <div>Red</div>
        <Separator orientation="vertical" className="bg-red-500" />
      </div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="rounded-lg border p-4 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium">Email</h4>
          <p className="text-sm text-muted-foreground">user@example.com</p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Last changed 3 months ago
          </p>
        </div>
      </div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="w-[200px] space-y-1">
      {["Profile", "Settings", "Messages", "Support", "Logout"].map(
        (item, index, arr) => (
          <React.Fragment key={item}>
            <div className="px-2 py-1.5 text-sm">{item}</div>
            {index !== arr.length - 1 && <Separator className="my-1" />}
          </React.Fragment>
        )
      )}
    </div>
  ),
}

export const WithDashPattern: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Section One</div>
      <Separator className="border-dashed border-t [&>*]:border-dashed" />
      <div>Section Two</div>
      <Separator className="border-dotted border-t [&>*]:border-dotted" />
      <div>Section Three</div>
    </div>
  ),
}

export const WithSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Large Spacing</h3>
        <Separator className="my-8" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium Spacing</h3>
        <Separator className="my-4" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Small Spacing</h3>
        <Separator className="my-2" />
      </div>
    </div>
  ),
}
