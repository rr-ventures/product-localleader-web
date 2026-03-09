import Link from "next/link"

const versions = [
  { letter: "A", path: "/version-a", ready: false },
  { letter: "B", path: "/version-b", ready: false },
  { letter: "C", path: "/version-c", ready: false },
  { letter: "D", path: "/version-d", ready: false },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Local Leader &mdash; Homepage Versions
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          All versions are live simultaneously. Click any card to preview.
        </p>

        {/* Base reference */}
        <div className="mt-10">
          <Link
            href="/base"
            className="group block rounded-lg bg-white/5 border border-amber-500/30 p-6 hover:bg-white/10 hover:border-amber-500/50"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight">
                Base
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-500/20 text-amber-400">
                Reference
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-3 group-hover:text-gray-400">
              /base &mdash; Neutral reference implementation. All versions inherit from this.
            </p>
          </Link>
        </div>

        {/* Design versions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {versions.map((v) => (
            <Link
              key={v.letter}
              href={v.path}
              className="group block rounded-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold tracking-tight">
                  {v.letter}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    v.ready
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/10 text-gray-500"
                  }`}
                >
                  {v.ready ? "Ready" : "Not built yet"}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-3 group-hover:text-gray-400">
                {v.path}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
