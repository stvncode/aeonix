import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Calculator,
  Calendar,
  Cloud,
  CreditCard,
  FileText,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Settings,
  Smile,
  User,
} from "lucide-react"
import React, { useState } from "react"
import "../index.css"

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithDialog: Story = {
  render: function CommandWithDialog() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Applications">
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Documents</span>
              </CommandItem>
              <CommandItem>
                <Cloud className="mr-2 h-4 w-4" />
                <span>Cloud Storage</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Help & Support">
              <CommandItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </CommandItem>
              <CommandItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}

export const WithSections: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Recently Used">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Document 1.txt</span>
            <CommandShortcut>⌘1</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Document 2.txt</span>
            <CommandShortcut>⌘2</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
          <CommandItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile Settings</span>
          </CommandItem>
          <CommandItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log Out</span>
            <CommandShortcut>⌘Q</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const SearchableList: Story = {
  render: function SearchableListExample() {
    const [inputValue, setInputValue] = useState("")

    const items = [
      { icon: Calculator, label: "Calculator", category: "Tools" },
      { icon: FileText, label: "Documents", category: "Tools" },
      { icon: Cloud, label: "Cloud Storage", category: "Storage" },
      { icon: Settings, label: "Settings", category: "System" },
      { icon: User, label: "Profile", category: "Account" },
      { icon: LogOut, label: "Log Out", category: "Account" },
    ]

    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    )

    const groupedItems = filteredItems.reduce((groups, item) => {
      const category = item.category
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(item)
      return groups
    }, {} as Record<string, typeof items>)

    return (
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Search..."
          value={inputValue}
          onValueChange={setInputValue}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedItems).map(([category, items]) => (
            <React.Fragment key={category}>
              <CommandGroup heading={category}>
                {items.map((item) => (
                  <CommandItem key={item.label}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </Command>
    )
  },
}
