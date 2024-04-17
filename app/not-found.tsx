import Link from 'next/link'
import Search from "@/app/components/Search";

export default function NotFound() {
    return (
        <div className="bg-white mx-auto p-6 py-14 my-3 shadow-xl w-full max-w-screen-sm">
            <h2 className="font-avenir font-bold text-4xl">Not Found</h2>
            <p className="text-lg mt-2">Could not find the requested page. It may have moved, or been removed.</p>
            <div className="mt-5 ml-2">
                <p className="mb-2">Try a search</p>
                <Search dark />
                <p className="my-3">- or -</p>
            </div>

            <Link className="bg-primary-300 text-xl p-2 block w-48 text-center rounded font-bold" href="/">Return Home</Link>
        </div>
    )
}