import Link from "next/link";

export default function BlackLink ({ href, children } : 
  { href: string, children: React.ReactNode }) {
  return(
    <Link href={href} className="bg-black text-white py-2 px-4 flex items-center rounded-lg h-9 hover:bg-zinc-800">
      {children}
    </Link>
  )
}