import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Menu,
  PanelBottom,
  PanelLeft,
  PanelRight,
  PanelTop,
  SettingsIcon,
  XIcon,
} from "lucide-react"
import "../index.css"

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <PanelLeft className="mr-2 h-4 w-4" />
            Left
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <PanelTop className="mr-2 h-4 w-4" />
            Top
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <PanelBottom className="mr-2 h-4 w-4" />
            Bottom
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <PanelRight className="mr-2 h-4 w-4" />
            Right
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const Settings: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <SettingsIcon className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Manage your application settings and preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <select className="w-full rounded-md border p-2">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Language</Label>
            <select className="w-full rounded-md border p-2">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Notifications</Label>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email-notif" />
              <Label htmlFor="email-notif">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="push-notif" />
              <Label htmlFor="push-notif">Push notifications</Label>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const MobileMenu: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {[
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            { label: "Products", href: "#" },
            { label: "Contact", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-4 py-2 text-sm hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </div>
        <SheetFooter>
          <Button variant="outline" className="w-full">
            Log out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const ShoppingCart: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Cart (3)</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>You have 3 items in your cart</SheetDescription>
        </SheetHeader>
        <div className="space-y-4 py-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              <div className="h-16 w-16 rounded-md bg-muted" />
              <div className="flex-1 space-y-1">
                <h3 className="font-medium">Product {item}</h3>
                <p className="text-sm text-muted-foreground">Quantity: 1</p>
                <p className="font-medium">${item * 10.99}</p>
              </div>
              <Button variant="ghost" size="icon">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-4">
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
              <span>Total</span>
              <span className="font-medium">$32.97</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
