import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTASection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your AI Journey?</h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of innovators who are creating powerful AI models without coding.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              className="bg-primary-foreground text-foreground"
              placeholder="Enter your email"
              type="email"
              required
            />
            <Button type="submit" variant="secondary">
              Get Early Access
            </Button>
          </form>
          <p className="text-xs text-primary-foreground/80">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
