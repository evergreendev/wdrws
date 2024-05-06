import ImageCard from "@/app/components/ImageCard";
import reportImg from "@/public/annual-report.jpg";
import opportunityImg from "@/public/opportunity.jpg";
import discoverImg from "@/public/discover.jpg";
import ColCard from "@/app/components/ColCard";
import materialsImg from "@/public/technical-sessions.png";
import newsImg from "@/public/gary-drewes.jpg";
import aboutImg from "@/public/katie-leclair.jpg";
import Link from "next/link";

export default async function Home() {

    return (
        <main className="font-pt_sans flex min-h-screen flex-col justify-between bg-white">
            <div className="bg-hero bg-cover min-h-[30vh] relative">
                <div className="w-full bg-white bg-opacity-60 max-w-screen-xl lg:max-w-screen-xl mx-auto py-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h2 className="font-newsreader text-3xl sm:text-6xl text-center">Working to bring quality, abundant water to all corners of
                        western South Dakota.</h2>
                </div>
            </div>

            <div className="w-full flex mb-6 flex-wrap">
                <Link href="/membership"
                      className="bg-green-500 xl:w-[33%] grow text-white flex flex-col justify-start px-8 py-4">
                <div className="sm:w-96 mx-auto">
                        <h2 className="font-newreader text-3xl text-center font-bold mb-2">
                            Get Involved
                        </h2>
                        <p className="text-center text-xl">Take your seat at the table
                            to discuss the future water needs of your community.</p>
                    </div>
                </Link>
                <Link href="/material/category/newsletter" className="bg-primary-500 xl:w-[33%] grow text-black flex flex-col justify-start px-8  py-4">
                    <div className="sm:w-96 mx-auto">
                        <h2 className="font-newreader text-3xl text-center font-bold mb-2">
                            Stay Informed
                        </h2>
                        <p className="text-center text-xl">Keep up to date on the latest from WDRWS with our
                            newsletter</p>
                    </div>
                </Link>
                <Link href="/our-history"
                      className="bg-secondary-500 xl:w-[33%] grow text-white flex flex-col justify-start px-8  py-4">
                    <div className="sm:w-96 mx-auto">
                        <h2 className="font-newreader text-3xl text-center font-bold mb-2">
                            History
                        </h2>
                        <p className="text-center text-xl">Learn more about WDRWS formation, purpose, and mission</p>
                    </div>
                </Link>
            </div>
            <div
                className="flex-wrap bg-green-200 max-w-screen-2xl pb-28 sm:mx-auto flex justify-start font-newsreader items-center">
                <ImageCard loading="eager" wide linkStyles="w-full md:w-6/12 max-w-screen-lg xl:-translate-x-36" colorScheme="yellow"
                           src={reportImg}
                           transparent
                           link="/annual-report" text="Read the WDRWS Annual Report"/>
                <div className="z-20 xl:-ml-36 p-7 bg-green-400 bg-opacity-50">
                    <h2 className="text-4xl sm:text-7xl sm:mb-4">purpose</h2>
                    <p className="pl-2 py-2 sm:text-4xl text-lg sm:ml-14 font-light max-w-screen-sm">
                        Ensuring quality, abundant water to all corners of western South Dakota
                    </p>
                </div>
            </div>
            <div
                className="md:-mt-16 md:ml-24 w-11/12 max-w-screen-2xl self-center flex flex-wrap md:flex-nowrap font-newsreader">
                <ImageCard colorScheme="blue" src={opportunityImg} linkStyles="w-full md:w-5/12 max-w-lg md:mb-24"
                           text="Learn more about the water needs of western South Dakota" link="/drought"/>
                {/*<div
                    className="hidden md:block bg-black bg-opacity-20 border-t-[64px] border-b-[64px] w-0.5 mx-7 z-20"/>*/}
                <div className="p-7 self-center mb-12 sm:mb-0">
                    <h2 className="text-4xl sm:text-7xl mb-4">opportunity</h2>
                    <p className=" pl-2 py-2 sm:text-4xl text-lg font-light max-w-screen-sm ml-7">
                        We have the opportunity to prevent water access challenges for future generations.
                    </p>
                </div>
            </div>
            <div
                className="bg-green-200 justify-end md:-mt-16 md:w-9/12 flex flex-wrap lg:flex-nowrap items-start font-newsreader pb-28">
                <div
                    className="md:text-right w-full md:mr-32 mt-7 bg-green-400 border-l-green-500 border-l-8 p-4 sm:pr-14 bg-opacity-50">
                    <h2 className="mt-7 sm:text-7xl text-4xl mb-4">progress</h2>
                    <p className="sm:text-4xl text-lg font-light max-w-screen-lg ml-auto">
                        WDRWS was formed in 2021 to <br className="hidden sm:block"/>address the growing water needs <br
                        className="hidden sm:block"/>of
                        western South Dakota.
                    </p>
                </div>
                <ImageCard linkStyles="w-full lg:w-4/12 max-w-lg max-w-lg lg:-mt-24" colorScheme="yellow"
                           src={discoverImg}
                           text="Discover what the WDRWS has accomplished so far"
                           link="/progress"/>
            </div>
            <div className="w-full max-w-screen-xl m-auto -translate-y-20 flex flex-wrap justify-around">
                <ColCard url="/material/category/technical-session" styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-primary-500"
                         borderClass="border-primary-500"
                         src={materialsImg} header="Materials" subHeader="Technical Sessions"
                         text="The anatomy of regional water projects" items={[
                    {
                        title: "Annual Report",
                        url: "/annual-report",
                        src: discoverImg
                    },
                    {
                        title: "Meeting Agenda",
                        url: "/meeting-agenda",
                        src: discoverImg
                    }
                ]}/>
                <ColCard url="/news" styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-secondary-500"
                         borderClass="border-t-secondary-500"
                         src={newsImg} header="News" subHeader="In the Media" text="Congratulations to @Gary Drewes for being appointed to the SD State Water Management Board
" items={[]}/>
                <ColCard url="/katie-profile" styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-green-500"
                         borderClass="border-green-500" src={aboutImg}
                         header="About Us" subHeader="Team Profile"
                         text="Introducing Katie LeClair, the new Operations Manager of WDRWS" items={[
                    {
                        title: "The Board",
                        url: "/the-board",
                        src: discoverImg
                    },
                    {
                        title: "Our History",
                        url: "/our-history",
                        src: discoverImg
                    }
                ]}/>
            </div>
        </main>
    );
}
