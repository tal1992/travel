import React from "react"

export default function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className="mdx-h2 text-slate-500 font-semibold pb-5">{children}</h2>
}