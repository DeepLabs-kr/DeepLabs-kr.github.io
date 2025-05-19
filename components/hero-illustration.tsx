"use client"

import { useEffect, useRef } from "react"

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      return rect
    }

    const rect = setCanvasDimensions()

    // Colors
    const primaryColor = "#7c3aed" // Purple
    const secondaryColor = "#c4b5fd" // Light purple
    const accentColor = "#2dd4bf" // Teal
    const darkColor = "#1e293b" // Dark slate

    // Draw human silhouette
    const drawHuman = () => {
      const x = rect.width * 0.25
      const y = rect.height * 0.5
      const radius = rect.height * 0.15

      // Head
      ctx.beginPath()
      ctx.arc(x, y - radius - 10, radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = primaryColor
      ctx.fill()

      // Body
      ctx.beginPath()
      ctx.moveTo(x, y - radius + 10)
      ctx.lineTo(x - radius * 0.8, y + radius)
      ctx.lineTo(x + radius * 0.8, y + radius)
      ctx.closePath()
      ctx.fillStyle = primaryColor
      ctx.fill()
    }

    // Draw AI/robot silhouette
    const drawAI = () => {
      const x = rect.width * 0.75
      const y = rect.height * 0.5
      const size = rect.height * 0.3

      // Head/CPU
      ctx.beginPath()
      ctx.roundRect(x - size * 0.5, y - size * 0.6, size, size * 0.8, 10)
      ctx.fillStyle = accentColor
      ctx.fill()

      // Circuit patterns
      ctx.beginPath()
      ctx.moveTo(x - size * 0.3, y - size * 0.6)
      ctx.lineTo(x - size * 0.3, y - size * 0.2)
      ctx.moveTo(x, y - size * 0.6)
      ctx.lineTo(x, y - size * 0.2)
      ctx.moveTo(x + size * 0.3, y - size * 0.6)
      ctx.lineTo(x + size * 0.3, y - size * 0.2)

      ctx.moveTo(x - size * 0.5, y - size * 0.4)
      ctx.lineTo(x + size * 0.5, y - size * 0.4)
      ctx.moveTo(x - size * 0.5, y - size * 0.2)
      ctx.lineTo(x + size * 0.5, y - size * 0.2)

      ctx.strokeStyle = darkColor
      ctx.lineWidth = 2
      ctx.stroke()

      // Body/server
      ctx.beginPath()
      ctx.roundRect(x - size * 0.4, y + size * 0.3, size * 0.8, size * 0.5, 5)
      ctx.fillStyle = accentColor
      ctx.fill()

      // Lights
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(x - size * 0.2 + i * size * 0.2, y + size * 0.4, 3, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor
        ctx.fill()
      }
    }

    // Draw connecting elements (chat bubbles, data flow)
    const drawConnections = () => {
      const centerX = rect.width * 0.5
      const centerY = rect.height * 0.5
      const bubbleWidth = rect.width * 0.15
      const bubbleHeight = rect.height * 0.1

      // Human chat bubble
      ctx.beginPath()
      ctx.roundRect(centerX - bubbleWidth * 1.5, centerY - bubbleHeight * 1.5, bubbleWidth, bubbleHeight, 10)
      ctx.fillStyle = primaryColor
      ctx.fill()

      // Text in human bubble
      ctx.fillStyle = "white"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Create AI model", centerX - bubbleWidth, centerY - bubbleHeight * 1)

      // AI chat bubble
      ctx.beginPath()
      ctx.roundRect(centerX + bubbleWidth * 0.5, centerY - bubbleHeight * 0.5, bubbleWidth, bubbleHeight, 10)
      ctx.fillStyle = accentColor
      ctx.fill()

      // Text in AI bubble
      ctx.fillStyle = "white"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Analyzing data...", centerX + bubbleWidth * 1, centerY)

      // Data flow lines
      ctx.beginPath()

      // Flowing data particles
      const numParticles = 15
      const now = Date.now() / 1000

      for (let i = 0; i < numParticles; i++) {
        const t = (now * 0.5 + i / numParticles) % 1
        const x = centerX - bubbleWidth + t * (bubbleWidth * 2)
        const y = centerY + Math.sin(t * Math.PI * 4) * 10

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = t < 0.5 ? primaryColor : accentColor
        ctx.globalAlpha = Math.sin(t * Math.PI)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // Connection line
      ctx.beginPath()
      ctx.moveTo(centerX - bubbleWidth, centerY)
      ctx.bezierCurveTo(
        centerX - bubbleWidth * 0.5,
        centerY - 20,
        centerX + bubbleWidth * 0.5,
        centerY + 20,
        centerX + bubbleWidth,
        centerY,
      )
      ctx.strokeStyle = darkColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw neural network background
    const drawBackground = () => {
      const numNodes = 30
      const nodes = []

      // Create nodes
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: Math.random() * 3 + 1,
        })
      }

      // Draw connections between nodes
      ctx.globalAlpha = 0.2
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < rect.width * 0.2) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = secondaryColor
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = secondaryColor
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      drawBackground()
      drawHuman()
      drawAI()
      drawConnections()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[400px]">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
