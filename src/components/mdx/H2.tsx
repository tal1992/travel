import React from "react"

export default function P({ children }: { children?: React.ReactNode }) {
  return <h2 className="mdx-h2 text-slate-500 font-semibold underline pb-5">{children}</h2>
}