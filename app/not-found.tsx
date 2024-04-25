import Link from 'next/link'
import Search from "@/app/components/Search";

export default function NotFound() {
    return (
        <div className="bg-white mx-auto p-6 py-14 my-3 shadow-xl w-full max-w-screen-lg">
            <h2 className="font-newsreader text-4xl">Not Found</h2>
            <p className="text-lg mt-2">We&apos;re sorry, but the page you&apos;re looking for can&apos;t be found. It may have been removed, renamed, or is temporarily unavailable.

                Please double-check the URL or go to our homepage.</p>
            <div className="mt-5 ml-2">
                <p className="mb-2">Try a search</p>
                <Search dark />
                <p className="my-3">- or -</p>
            </div>

            <Link className="bg-primary-300 text-xl p-2 block w-48 text-center rounded font-bold" href="/">Return Home</Link>
        </div>
    )
}