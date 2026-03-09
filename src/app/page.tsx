import Link from "next/link";

const versions = [
  { letter: "A", ready: false },
  { letter: "B", ready: false },
  { letter: "C", ready: false },
  { letter: "D", ready: false },
  { letter: "E", ready: false },
  { letter: "F", ready: false },
  { letter: "G", ready: false },
  { letter: "H", ready: false },
  { letter: "I", ready: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Local Leader &mdash; Homepage Versions
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Click any version to preview. Each is a complete, independent homepage
          design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {versions.map((v) => (
            <Link
              key={v.letter}
              href={`/version-${v.letter.toLowerCase()}`}
              className="group block rounded-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-colors"
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
              <p className="text-sm text-gray-500 mt-3 group-hover:text-gray-400 transition-colors">
                /version-{v.letter.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
