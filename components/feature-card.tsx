import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  imageSrc?: string
}

export default function FeatureCard({ icon, title, description, imageSrc }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center transition-all hover:shadow-lg overflow-hidden">
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader className="flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
          {icon}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
