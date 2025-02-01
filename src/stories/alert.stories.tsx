import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, CheckCircle2, Info, Rocket, Terminal } from "lucide-react"
import "../index.css"

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert providing basic information to the user.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        A new software version is available. Please update to access the latest
        features.
      </AlertDescription>
    </Alert>
  ),
}

export const WithCustomStyles: Story = {
  render: () => (
    <Alert className="border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950">
      <Info className="h-4 w-4 text-blue-500 dark:text-blue-400" />
      <AlertTitle className="text-blue-700 dark:text-blue-300">
        Pro Tip
      </AlertTitle>
      <AlertDescription className="text-blue-600 dark:text-blue-200">
        You can customize the appearance of alerts using Tailwind CSS classes.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert className="border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-950">
      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle className="text-green-700 dark:text-green-300">
        Success
      </AlertTitle>
      <AlertDescription className="text-green-600 dark:text-green-200">
        Your changes have been successfully saved.
      </AlertDescription>
    </Alert>
  ),
}

export const WithList: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>System Requirements</AlertTitle>
      <AlertDescription>
        <div className="mt-2 space-y-1">
          <p>Your system needs the following to proceed:</p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>Node.js 14 or higher</li>
            <li>Git installed</li>
            <li>4GB RAM minimum</li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert>
      <Rocket className="h-4 w-4" />
      <AlertTitle>Getting Started</AlertTitle>
      <AlertDescription>
        <div className="mt-2 space-y-2">
          <p>Welcome to our platform! Let's help you get started.</p>
          <button className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90">
            Take the tour
          </button>
        </div>
      </AlertDescription>
    </Alert>
  ),
}

export const MultipleAlerts: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>General information message</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Critical error message</AlertDescription>
      </Alert>
      <Alert className="border-yellow-500 bg-yellow-50 dark:border-yellow-400 dark:bg-yellow-950">
        <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
        <AlertTitle className="text-yellow-700 dark:text-yellow-300">
          Warning
        </AlertTitle>
        <AlertDescription className="text-yellow-600 dark:text-yellow-200">
          Warning message for attention
        </AlertDescription>
      </Alert>
    </div>
  ),
}
