import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Database, Server } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo-cut.jpg" alt="DeepLabs Logo" className="h-10 w-auto" />
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Linking Tomorrow with Human-Driven Agent Intelligence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create powerful AI models through an intuitive chatbot interface. No technical expertise required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/hero-illustration.png"
                    alt="DeepLabs AI - Human-Driven Agent Intelligence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">All-in-One AI Solution</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DeepLabs empowers you to create, train, and deploy AI models without writing a single line of code.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
              <FeatureCard
                icon={<Brain className="h-10 w-10" />}
                title="AI Model Creation"
                description="Specify your desired AI application, and our system recommends the most suitable models for your needs."
                imageSrc="/feature-model-creation.png"
              />
              <FeatureCard
                icon={<TrendingUp className="h-10 w-10" />}
                title="Trend Analysis"
                description="Stay ahead with integration of the latest research papers, providing up-to-date information on AI advancements."
                imageSrc="/feature-trend-analysis.png"
              />
              <FeatureCard
                icon={<Database className="h-10 w-10" />}
                title="Data Preprocessing"
                description="Get smart recommendations for data preprocessing methods based on your example training data."
                imageSrc="/feature-data-preprocessing.png"
              />
              <FeatureCard
                icon={<Server className="h-10 w-10" />}
                title="VM-Based Training"
                description="Support for training and optimization within a secure virtual machine environment for maximum performance."
                imageSrc="/feature-vm-training.png"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <HowItWorks />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/logo-cut.jpg" alt="DeepLabs Logo" className="h-8 w-auto" />
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} DeepLabs. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
