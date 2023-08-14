import React from "react"

export default function List({ children }: { children?: React.ReactNode }) {
  return <ul className="list-disc px-5">{children}</ul>
}