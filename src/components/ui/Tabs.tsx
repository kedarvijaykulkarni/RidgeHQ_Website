"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
  idPrefix: string
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("Tabs components must be used within <Tabs>")
  return ctx
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, defaultValue, onValueChange, className, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    const idPrefix = React.useId()

    const setValue = React.useCallback(
      (next: string) => {
        if (!isControlled) setInternalValue(next)
        onValueChange?.(next)
      },
      [isControlled, onValueChange]
    )

    return (
      <TabsContext.Provider value={{ value: currentValue, setValue, idPrefix }}>
        <div ref={ref} className={cn(className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const listRef = React.useRef<HTMLDivElement>(null)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return
      const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      if (!tabs || tabs.length === 0) return
      const tabList = Array.from(tabs)
      const currentIndex = tabList.findIndex((tab) => tab === document.activeElement)
      if (currentIndex === -1) return
      event.preventDefault()
      let nextIndex: number
      if (event.key === "Home") nextIndex = 0
      else if (event.key === "End") nextIndex = tabList.length - 1
      else {
        const delta = event.key === "ArrowRight" ? 1 : -1
        nextIndex = (currentIndex + delta + tabList.length) % tabList.length
      }
      tabList[nextIndex].focus()
      tabList[nextIndex].click()
    }

    return (
      <div
        ref={(node) => {
          listRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        role="tablist"
        onKeyDown={handleKeyDown}
        className={cn(
          "glass-panel inline-flex items-center rounded-full p-1 bg-[var(--bg-elevated)]/50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, children, onClick, ...props }, ref) => {
    const { value: activeValue, setValue, idPrefix } = useTabsContext()
    const isActive = activeValue === value

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`${idPrefix}-trigger-${value}`}
        aria-controls={`${idPrefix}-panel-${value}`}
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        onClick={(event) => {
          setValue(value)
          onClick?.(event)
        }}
        className={cn(
          "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
          isActive
            ? "bg-[var(--accent)] text-[var(--bg)] shadow-md"
            : "text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const { value: activeValue, idPrefix } = useTabsContext()
    if (activeValue !== value) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`${idPrefix}-panel-${value}`}
        aria-labelledby={`${idPrefix}-trigger-${value}`}
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
