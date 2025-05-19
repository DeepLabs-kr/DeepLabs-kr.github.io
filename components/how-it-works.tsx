import { MessageSquare, Lightbulb, Cpu, Rocket, Brain } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">How It Works</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Process, Powerful Results</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Creating AI models has never been easier. Our intuitive platform guides you through every step.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Chat with DeepLabs</h3>
          <p className="text-muted-foreground">Describe your AI needs to our intelligent chatbot interface</p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Lightbulb className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Get Recommendations</h3>
          <p className="text-muted-foreground">Receive tailored model suggestions and preprocessing methods</p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Cpu className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Train Your Model</h3>
          <p className="text-muted-foreground">Our VM environment handles the complex training process</p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Rocket className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Deploy & Use</h3>
          <p className="text-muted-foreground">Implement your AI model in your applications with ease</p>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium">DeepLabs AI Assistant</div>
            <div className="w-16"></div>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-lg bg-muted p-3">
                <p className="text-sm">
                  I need to build an AI model that can classify customer feedback as positive, negative, or neutral.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <Brain className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-lg bg-primary/10 p-3">
                <p className="text-sm">
                  I recommend using a sentiment analysis model based on BERT architecture. Would you like me to suggest
                  some preprocessing steps for your text data?
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-lg bg-muted p-3">
                <p className="text-sm">Yes, please. I have customer reviews in multiple languages.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <Brain className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-lg bg-primary/10 p-3">
                <p className="text-sm">
                  For multilingual data, I suggest using language detection, translation to a common language, text
                  normalization, and tokenization. Would you like me to set up a VM for training this model?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
