import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CustomTrigger: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? All of your data will
            be permanently removed. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-600">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>Show Terms</AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms of Service</AlertDialogTitle>
          <AlertDialogDescription className="h-72 overflow-y-auto text-left">
            <p className="mb-4">
              Please read these terms and conditions carefully before using our
              service. By accessing or using our service, you agree to be bound
              by these terms.
            </p>
            <p className="mb-4">
              1. Your use of the service is subject to these terms and
              conditions. You must read, agree with, and accept all of the terms
              and conditions contained in this agreement.
            </p>
            <p className="mb-4">
              2. We reserve the right to modify these terms at any time. Your
              continued use of the service following the posting of changes will
              mean you accept those changes.
            </p>
            <p>
              3. You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your computer.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>Unsubscribe</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unsubscribe from newsletter</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-4 space-y-4">
              <p>
                We're sorry to see you go. Please tell us why you're leaving:
              </p>
              <select className="w-full rounded-md border p-2">
                <option value="">Select a reason</option>
                <option value="too-many">Too many emails</option>
                <option value="not-relevant">Content not relevant</option>
                <option value="other">Other</option>
              </select>
              <textarea
                className="w-full rounded-md border p-2"
                placeholder="Additional comments (optional)"
                rows={3}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
          <AlertDialogAction>Confirm Unsubscribe</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
