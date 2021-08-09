import React from "react"
import { Link } from "gatsby";

export default function Home() {
  return (
    <div class="bg-blue-100 h-screen">
      <p class="py-10 text-center text-2xl font-bold">This is the festivals partition - see <Link class="text-blue-500" to="/festivals">/festivals</Link></p>
    </div>
  )
}
