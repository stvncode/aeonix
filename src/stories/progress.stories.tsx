import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import "../index.css"

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => <Progress value={60} className="w-[60%]" />,
}

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(66)
      }, 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
  },
}

export const WithLabel: Story = {
  render: function ProgressWithLabel() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(80)
      }, 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="w-[60%] space-y-2">
        <Progress value={progress} />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    )
  },
}

export const WithSteps: Story = {
  render: function ProgressWithSteps() {
    const steps = ["Details", "Address", "Payment", "Confirmation"]
    const [currentStep, setCurrentStep] = useState(0)
    const progress = (currentStep / (steps.length - 1)) * 100

    return (
      <div className="w-[60%] space-y-4">
        <Progress value={progress} />
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`text-sm ${
                index <= currentStep
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    )
  },
}

export const LoadingStates: Story = {
  render: function LoadingProgress() {
    const [uploading, setUploading] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      if (uploading) {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              setUploading(false)
              return 100
            }
            return prev + 5
          })
        }, 200)
        return () => clearInterval(interval)
      }
    }, [uploading])

    return (
      <div className="w-[60%] space-y-4">
        <div className="space-y-2">
          <Progress value={progress} />
          <p className="text-sm text-muted-foreground">
            {progress === 100
              ? "Upload complete!"
              : uploading
              ? `Uploading... ${progress}%`
              : "Ready to upload"}
          </p>
        </div>
        <Button
          onClick={() => {
            setUploading(true)
            setProgress(0)
          }}
          disabled={uploading}
        >
          {progress === 100
            ? "Upload Another"
            : uploading
            ? "Uploading..."
            : "Upload"}
        </Button>
      </div>
    )
  },
}

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={75} className="w-[60%] h-2" />
      <Progress
        value={75}
        className="w-[60%] h-3 bg-blue-100 [&>div]:bg-blue-500"
      />
      <Progress
        value={75}
        className="w-[60%] h-4 bg-green-100 [&>div]:bg-green-500"
      />
      <Progress
        value={75}
        className="w-[60%] h-6 bg-purple-100 [&>div]:bg-purple-500"
      />
    </div>
  ),
}
