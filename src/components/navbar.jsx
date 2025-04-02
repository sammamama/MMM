"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

const navItems = [
  {
    title: "Bands",
    href: "/bands",
  },
  {
    title: "Businesses",
    href: "/business",
  },
  {
    title: "Moments",
    href: "/moments",
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full text-white">
      <div className="backdrop-blur-md bg-transparent border-b">
        <div className="container flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-bold text-xl">
              Brand
            </Link>
            <nav className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm font-extralight bg-transparent hover:font-bold">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-transparent border-b">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-sm p-2 font-extralight transition-colors hover:font-bold"
                onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

