import React from "react"

export default function H1({ children }: { children?: React.ReactNode }) {
  return <h1 className="mdx-h1 text-slate-700 text-3xl py-10 pb-5 font-bold">{children}</h1>
}