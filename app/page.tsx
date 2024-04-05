import ImageCard from "@/app/components/ImageCard";
import reportImg from "@/public/annual-report.jpg";
import opportunityImg from "@/public/opportunity.jpg";
import discoverImg from "@/public/discover.jpg";
import Footer from "@/app/components/Footer";
import {CMS_URL} from "@/constants";

async function getData() {
    const res = await fetch(`${CMS_URL}/pages`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

    return (
        <main className="font-pt_sans flex min-h-screen flex-col justify-between bg-white">
            <div className="flex-wrap bg-green-200 max-w-screen-2xl pb-28 sm:ml-36 flex justify-start font-newsreader items-center">
                <ImageCard wide linkStyles="w-full md:w-6/12 max-w-screen-lg sm:-translate-x-36" colorScheme="yellow" src={reportImg}
                           link="/annual-report" text="Read the WDRWS Annual Report"/>
                <div className="z-20 sm:-ml-44 bg-green-400 bg-opacity-50 p-7 border-l-green-500 border-l-8">
                    <h2 className="text-4xl sm:text-7xl sm:mb-4">purpose</h2>
                    <p className="pl-2 py-2 sm:text-4xl text-lg sm:ml-14 font-light max-w-screen-sm">
                        Ensuring quality, abundant water to all corners of western South Dakota
                    </p>
                </div>
            </div>
            <div className="md:-mt-16 md:ml-24 w-11/12 max-w-screen-2xl self-center flex flex-wrap md:flex-nowrap font-newsreader">
                <ImageCard colorScheme="blue" src={opportunityImg} linkStyles="w-full md:w-5/12 max-w-lg md:mb-24"
                           text="Learn more about the water needs of western South Dakota" link="/about"/>
                <div className="hidden md:block bg-black bg-opacity-20 border-t-[64px] border-b-[64px] w-0.5 mx-7 z-20"/>
                <div className="p-7 self-center mb-12 sm:mb-0">
                    <h2 className="text-4xl sm:text-7xl mb-4">opportunity</h2>
                    <p className=" pl-2 py-2 sm:text-4xl text-lg font-light max-w-screen-sm ml-7">
                        We have the opportunity to prevent water access challenges for future generations.
                    </p>
                </div>
            </div>
            <div className="bg-green-200 justify-end md:-mt-16 md:w-9/12 flex flex-wrap lg:flex-nowrap items-start font-newsreader pb-28">
                <div className="md:text-right w-full md:mr-32 mt-7 bg-green-400 border-l-green-500 border-l-8 p-4 sm:pr-14 bg-opacity-50">
                    <h2 className="mt-7 sm:text-7xl text-4xl mb-4">progress</h2>
                    <p className="sm:text-4xl text-lg font-light max-w-screen-lg ml-auto">
                        WDRWS was formed in 2021 to <br className="hidden sm:block"/>address the growing water needs <br className="hidden sm:block"/>of
                        western South Dakota.
                    </p>
                </div>
                <ImageCard linkStyles="w-full lg:w-4/12 max-w-lg max-w-lg lg:-mt-24" colorScheme="yellow" src={discoverImg}
                           text="Discover what the WDRWS has accomplished so far"
                           link="/discover"/>{/*todo all links on homepage*/}
            </div>
            <Footer/>
        </main>
    );
}
