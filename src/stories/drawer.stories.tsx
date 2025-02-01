import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import "../index.css"

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="grid gap-4">
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
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithScrollableContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>View Items</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>
            You have {10} items in your cart
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[50vh] p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="mb-4 grid grid-cols-[1fr_auto] gap-4 rounded-lg border p-4"
            >
              <div>
                <h4 className="text-sm font-semibold">Product {i + 1}</h4>
                <p className="text-sm text-muted-foreground">
                  Product description goes here
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">${(i + 1) * 10}.00</p>
                <p className="text-sm text-muted-foreground">Qty: 1</p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <DrawerFooter>
          <Button>Checkout</Button>
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithForm: Story = {
  render: function FormDrawer() {
    const [open, setOpen] = useState(false)

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>New Contact</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add Contact</DrawerTitle>
            <DrawerDescription>
              Add a new contact to your address book.
            </DrawerDescription>
          </DrawerHeader>
          <form className="grid gap-4 p-4 pb-0">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="Enter full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" />
            </div>
          </form>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Add Contact</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const WithPreview: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Preview Item</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[96vh]">
        <DrawerHeader>
          <DrawerTitle>Product Preview</DrawerTitle>
          <DrawerDescription>Get a closer look at this item</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src="/api/placeholder/1280/720"
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid gap-4">
            <div>
              <h3 className="font-semibold">Product Name</h3>
              <p className="text-sm text-muted-foreground">
                Detailed product description with all the important information
                that a customer might need to know before making a purchase
                decision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Price</Label>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              <div>
                <Label>Availability</Label>
                <p className="text-sm text-green-600">In Stock</p>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Add to Cart</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close Preview</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
