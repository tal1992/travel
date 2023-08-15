import React from "react"

export default function Paragraph({ children }: { children?: React.ReactNode }) {
  return <p className="mdx-p pb-5">{children}</p>
}