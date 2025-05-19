import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Innovators</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what our users are saying about their experience with DeepLabs.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <Card className="border-0 bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/professional-woman-diverse.png" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Data Scientist @ TechCorp</p>
              </div>
            </div>
            <blockquote className="border-l-2 pl-4 italic mt-4">
              "DeepLabs has revolutionized how we approach AI model creation. What used to take weeks now takes hours,
              and the results are impressive."
            </blockquote>
          </CardContent>
        </Card>
        <Card className="border-0 bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/professional-man.png" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-sm text-muted-foreground">CTO @ StartupX</p>
              </div>
            </div>
            <blockquote className="border-l-2 pl-4 italic mt-4">
              "As a non-technical founder, I never thought I'd be able to create AI models myself. DeepLabs made it not
              just possible, but enjoyable."
            </blockquote>
          </CardContent>
        </Card>
        <Card className="border-0 bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/professional-woman-glasses.png" alt="Elena Rodriguez" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Elena Rodriguez</p>
                <p className="text-sm text-muted-foreground">Research Lead @ AI Institute</p>
              </div>
            </div>
            <blockquote className="border-l-2 pl-4 italic mt-4">
              "The trend analysis feature keeps us informed about the latest research. It's like having a dedicated AI
              research assistant."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
