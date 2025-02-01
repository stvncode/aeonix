import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import type { Meta, StoryObj } from "@storybook/react"
import { Mail, MessageSquare, Settings } from "lucide-react"
import "../index.css"

const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[400px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[400px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full flex-col gap-4 p-4">
          <div className="flex h-10 items-center gap-2 rounded-md border p-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Inbox</span>
          </div>
          <div className="flex h-10 items-center gap-2 rounded-md border p-2">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Messages</span>
          </div>
          <div className="flex h-10 items-center gap-2 rounded-md border p-2">
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">Settings</span>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="h-full p-4">
          <div className="rounded-md border p-4">
            <h2 className="text-lg font-semibold mb-2">Main Content</h2>
            <p className="text-sm text-muted-foreground">
              This is the main content area. You can resize the panels by
              dragging the handles between them.
            </p>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full flex-col gap-4 p-4">
          <div className="rounded-md border p-4">
            <h3 className="text-sm font-medium mb-2">Details</h3>
            <div className="text-sm text-muted-foreground">
              Additional information and details can be shown here.
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const NestedPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[400px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Preview Panel</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const MinMaxSizes: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[400px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-center">
            Min: 20%
            <br />
            Max: 40%
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Flexible Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15} maxSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-center">
            Min: 15%
            <br />
            Max: 30%
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
