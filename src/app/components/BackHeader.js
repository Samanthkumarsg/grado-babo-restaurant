import Link from "next/link";

export default function BackHeader() {
    return (
        <div className="w-full py-6 flex items-start justify-start">
            <Link href="/"> <h1 className="text-xl underline underline-offset-8 hover:text-primary"> ← Back Home </h1> </Link>
        </div>
    )
}