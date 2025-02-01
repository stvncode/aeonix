import { Flex } from "@/components/ui/flex"
import { type ReactNode } from "react"

export type FeatureEmptyStateProps = {
  title: string
  description: string
  illustration: string
  actions?: ReactNode
}

export const FeatureEmptyState = ({
  title,
  description,
  illustration,
  actions,
}: FeatureEmptyStateProps) => (
  <Flex
    direction="column"
    justify="center"
    className="gap-10 h-full"
    align="center"
  >
    <img src={illustration} alt="" />
    <Flex direction="column" className="gap-3 max-w-[480px]" align="center">
      <div className="text-3xl font-semibold text-center">{title}</div>
      <div className="text-secondary-foreground/50 text-center font-light">
        {description}
      </div>
    </Flex>
    {actions && (
      <Flex justify="start" className="gap-2">
        {actions}
      </Flex>
    )}
  </Flex>
)

interface DataTableEmptyStateProps {
  title: string
  description: string
  illustration: string
  create?: ReactNode
  docLink?: string
}

export const DataTableEmptyState = ({
  create,
  title,
  description,
  illustration,
}: DataTableEmptyStateProps) => (
  <Flex
    direction="column"
    justify="center"
    align="center"
    className="h-full w-full"
  >
    <FeatureEmptyState
      actions={create}
      title={title}
      description={description}
      illustration={illustration}
    />
  </Flex>
)
