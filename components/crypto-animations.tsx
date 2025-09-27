"use client"

import { useEffect, useState } from "react"

interface TradingElement {
  id: number
  symbol: string
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  color: string
  type: "symbol" | "text" | "chart"
}

export function CryptoAnimations() {
  const [elements, setElements] = useState<TradingElement[]>([])

  useEffect(() => {
    // Create initial trading elements
    const initialElements: TradingElement[] = []

    const tradingSymbols = ["↗", "↘", "▲", "▼", "◆", "●", "★", "✦"]

    const tradingText = [
      "LONG",
      "SHORT",
      "BUY",
      "SELL",
      "HODL",
      "PUMP",
      "MOON",
      "BULL",
      "BEAR",
      "LEVERAGE",
      "MARGIN",
      "FUTURES",
      "PERPS",
      "CALLS",
      "PUTS",
      "STRIKE",
    ]

    const chartElements = ["▲", "▼", "◆", "●", "■", "▬", "━", "┃", "╱", "╲"]

    const colors = [
      "oklch(0.8 0.35 200)", // Electric blue
      "oklch(0.85 0.3 140)", // Bright green
      "oklch(0.9 0.25 85)", // Gold
      "oklch(0.8 0.35 25)", // Red
      "oklch(0.85 0.3 300)", // Purple
      "oklch(0.8 0.4 180)", // Cyan
      "oklch(0.9 0.3 320)", // Magenta
    ]

    // Add trading symbols
    for (let i = 0; i < 8; i++) {
      initialElements.push({
        id: i,
        symbol: tradingSymbols[Math.floor(Math.random() * tradingSymbols.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 25 + 20,
        speed: Math.random() * 2 + 0.5,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: "symbol",
      })
    }

    // Add trading text
    for (let i = 8; i < 16; i++) {
      initialElements.push({
        id: i,
        symbol: tradingText[Math.floor(Math.random() * tradingText.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 10,
        speed: Math.random() * 1.5 + 0.3,
        rotation: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: "text",
      })
    }

    // Add chart elements
    for (let i = 16; i < 22; i++) {
      initialElements.push({
        id: i,
        symbol: chartElements[Math.floor(Math.random() * chartElements.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 1 + 0.2,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: "chart",
      })
    }

    setElements(initialElements)

    // Animation loop
    const animateElements = () => {
      setElements((prevElements) =>
        prevElements.map((element) => ({
          ...element,
          x: element.x + Math.sin(Date.now() * 0.001 + element.id) * element.speed,
          y: element.y + Math.cos(Date.now() * 0.0008 + element.id) * element.speed * 0.5,
          rotation: element.type === "text" ? 0 : element.rotation + element.speed * 0.5,
        })),
      )
    }

    const interval = setInterval(animateElements, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute transition-all duration-75 ease-linear ${
            element.type === "text" ? "font-bold font-mono tracking-wider" : ""
          }`}
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            transform: `rotate(${element.rotation}deg)`,
            fontSize: element.type === "text" ? `${element.size}px` : `${element.size}px`,
            color: element.color,
            textShadow: `0 0 20px ${element.color}, 0 0 40px ${element.color}`,
            filter: element.type === "symbol" ? "blur(0.3px)" : "blur(0.1px)",
            opacity: element.type === "text" ? 0.4 : 0.6,
            fontWeight: element.type === "text" ? "bold" : "normal",
          }}
        >
          {element.symbol}
        </div>
      ))}

      <div className="absolute top-16 left-16 opacity-20">
        <div className="flex items-end space-x-1">
          <div className="w-2 h-8 bg-crypto-green animate-pulse"></div>
          <div className="w-2 h-12 bg-crypto-red animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-6 bg-crypto-green animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          <div className="w-2 h-10 bg-crypto-gold animate-pulse" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-2 h-4 bg-crypto-red animate-pulse" style={{ animationDelay: "0.8s" }}></div>
        </div>
      </div>

      <div className="absolute top-32 right-20 opacity-20">
        <div className="flex items-end space-x-1">
          <div className="w-2 h-6 bg-crypto-purple animate-pulse"></div>
          <div className="w-2 h-9 bg-crypto-green animate-pulse" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-2 h-4 bg-crypto-red animate-pulse" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-2 h-11 bg-crypto-gold animate-pulse" style={{ animationDelay: "0.9s" }}></div>
        </div>
      </div>

      <div
        className="absolute top-1/4 left-8 text-crypto-green text-lg font-bold font-mono opacity-40 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        ↗ +15.7%
      </div>
      <div
        className="absolute top-1/3 right-12 text-crypto-red text-lg font-bold font-mono opacity-40 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      >
        ↘ -8.2%
      </div>
      <div
        className="absolute bottom-1/3 left-16 text-crypto-gold text-sm font-mono opacity-30 animate-pulse"
        style={{ animationDuration: "2s" }}
      >
        VOLUME: 2.4M
      </div>
      <div
        className="absolute bottom-1/4 right-24 text-crypto-purple text-sm font-mono opacity-30 animate-pulse"
        style={{ animationDuration: "3s", animationDelay: "1.5s" }}
      >
        24H HIGH: $67,890
      </div>

      <div className="absolute top-2/3 left-1/4 opacity-25">
        <div className="flex items-end space-x-1">
          <div className="relative">
            <div className="w-1 h-8 bg-crypto-green mx-auto"></div>
            <div className="w-3 h-4 bg-crypto-green -mt-6"></div>
          </div>
          <div className="relative">
            <div className="w-1 h-6 bg-crypto-red mx-auto"></div>
            <div className="w-3 h-3 bg-crypto-red -mt-4"></div>
          </div>
          <div className="relative">
            <div className="w-1 h-10 bg-crypto-green mx-auto"></div>
            <div className="w-3 h-5 bg-crypto-green -mt-8"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/3 text-crypto-gold text-xs font-mono opacity-25 animate-pulse">
        LONDON SESSION OPEN
      </div>
      <div
        className="absolute top-1/2 right-8 text-crypto-purple text-xs font-mono opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        NYSE: 15:30 EST
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full crypto-flashy-rainbow opacity-30 animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute top-2/3 right-1/3 w-6 h-6 rounded-full crypto-intense-blue opacity-40 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
      />

      {/* Glowing lines */}
      <div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-gold to-transparent opacity-20 animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-purple to-transparent opacity-20 animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      />
    </div>
  )
}
