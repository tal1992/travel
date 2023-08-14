import React from "react"

export default function LI({ children }: { children?: React.ReactNode }) {
  return <li className="pb-5">{children}</li>
}