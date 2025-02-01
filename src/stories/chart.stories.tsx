import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { Meta, StoryObj } from "@storybook/react"
import { ArrowDown, ArrowUp, Circle } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"
import "../index.css"

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof ChartContainer>

const defaultConfig = {
  views: {
    label: "Views",
    theme: {
      light: "hsl(220 80% 60%)",
      dark: "hsl(220 80% 65%)",
    },
  },
  clicks: {
    label: "Clicks",
    theme: {
      light: "hsl(150 80% 40%)",
      dark: "hsl(150 80% 45%)",
    },
  },
  sales: {
    label: "Sales",
    theme: {
      light: "hsl(10 80% 60%)",
      dark: "hsl(10 80% 65%)",
    },
  },
}

const sampleData = [
  { month: "Jan", views: 1000, clicks: 500, sales: 200 },
  { month: "Feb", views: 1500, clicks: 700, sales: 300 },
  { month: "Mar", views: 1200, clicks: 600, sales: 250 },
  { month: "Apr", views: 1800, clicks: 800, sales: 400 },
  { month: "May", views: 2000, clicks: 1000, sales: 500 },
  { month: "Jun", views: 2400, clicks: 1200, sales: 600 },
]

export const LineChartExample: Story = {
  render: () => (
    <ChartContainer className="w-1/2" config={defaultConfig}>
      <LineChart data={sampleData}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="views"
          stroke="var(--color-views)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="clicks"
          stroke="var(--color-clicks)"
          strokeWidth={2}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  ),
}

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer className="w-full" config={defaultConfig}>
      <BarChart data={sampleData}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="views" fill="var(--color-views)" />
        <Bar dataKey="clicks" fill="var(--color-clicks)" />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  ),
}

export const AreaChartExample: Story = {
  render: () => (
    <ChartContainer className="w-full" config={defaultConfig}>
      <AreaChart data={sampleData}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="views"
          fill="var(--color-views)"
          fillOpacity={0.2}
          stroke="var(--color-views)"
        />
        <Area
          type="monotone"
          dataKey="clicks"
          fill="var(--color-clicks)"
          fillOpacity={0.2}
          stroke="var(--color-clicks)"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  ),
}

const customConfig = {
  positive: {
    label: "Positive",
    icon: ArrowUp,
    theme: {
      light: "hsl(142.1 76.2% 36.3%)",
      dark: "hsl(142.1 70.6% 45.3%)",
    },
  },
  negative: {
    label: "Negative",
    icon: ArrowDown,
    theme: {
      light: "hsl(346.8 77.2% 49.8%)",
      dark: "hsl(346.8 77.2% 49.8%)",
    },
  },
  neutral: {
    label: "Neutral",
    icon: Circle,
    theme: {
      light: "hsl(221.2 83.2% 53.3%)",
      dark: "hsl(217.2 91.2% 59.8%)",
    },
  },
}

const customData = [
  { date: "2024-01", positive: 345, negative: 200, neutral: 300 },
  { date: "2024-02", positive: 400, negative: 150, neutral: 250 },
  { date: "2024-03", positive: 500, negative: 100, neutral: 200 },
]

export const CustomIconsAndTooltips: Story = {
  render: () => (
    <ChartContainer className="w-full" config={customConfig}>
      <LineChart data={customData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="line"
              formatter={(value, name, item) => (
                <div className="flex items-center gap-2">
                  {item.color && (
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                  <span>{name}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              )}
            />
          }
        />
        <Line
          type="monotone"
          dataKey="positive"
          stroke="var(--color-positive)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="negative"
          stroke="var(--color-negative)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="neutral"
          stroke="var(--color-neutral)"
          strokeWidth={2}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  ),
}

export const ResponsiveExample: Story = {
  render: () => (
    <div className="grid gap-4 sm:grid-cols-2">
      <ChartContainer config={defaultConfig}>
        <AreaChart data={sampleData}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="views"
            fill="var(--color-views)"
            fillOpacity={0.2}
            stroke="var(--color-views)"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
      <ChartContainer config={defaultConfig}>
        <BarChart data={sampleData}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="clicks" fill="var(--color-clicks)" />
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
}
