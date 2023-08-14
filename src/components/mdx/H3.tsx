import React from "react"

export default function H3({ children }: { children?: React.ReactNode }) {
  return <h3 className="mdx-h3 text-red-600 font-semibold underline pb-5">{children}</h3>
}