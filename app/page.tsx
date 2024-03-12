import ImageCard from "@/app/components/ImageCard";
import reportImg from "@/public/annual-report.jpg";
import opportunityImg from "@/public/opportunity.jpg";
import discoverImg from "@/public/discover.jpg";
import aboutImg from "@/public/katie-leclair.jpg";
import ColCard from "@/app/components/ColCard";
import Footer from "@/app/components/Footer";

async function getData() {
    const res = await fetch(`/api/pages`)
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
            <div className="bg-secondary-100 pb-28 ml-24 flex justify-start font-newsreader">
                <ImageCard wide linkStyles="w-6/12 -translate-x-24" colorScheme="yellow" src={reportImg}
                           link="/annual-report" text="Read the WDRWS Annual Report"/>
                <div className="z-20 -ml-14">
                    <h2 className="mt-36 text-9xl mb-8 -ml-40">purpose</h2>
                    <p className="text-6xl font-light max-w-screen-md">
                        Ensuring quality, abundant water to all corners of<br/> western South Dakota
                    </p>
                </div>
            </div>
            <div className="-mt-16 ml-24 w-11/12 flex font-newsreader">
                <ImageCard colorScheme="blue" src={opportunityImg} linkStyles="w-5/12 mb-24"
                           text="Learn more about the water needs of western South Dakota" link="/about"/>
                <div className="bg-black bg-opacity-20 border-t-[64px] border-b-[64px] w-0.5 mx-7 z-20"/>
                <div>
                    <h2 className="mt-36 text-9xl mb-12">opportunity</h2>
                    <p className="text-6xl font-light max-w-screen-lg ml-7">
                        We have the opportunity to <br/>prevent water access challenges <br/>for future generations.
                    </p>
                </div>
            </div>
            <div className="bg-secondary-100 justify-end -mt-16 w-10/12 flex font-newsreader pb-28">
                <div className="text-right mr-12">
                    <h2 className="mt-14 text-9xl mb-12">progress</h2>
                    <p className="text-6xl font-light max-w-screen-lg ml-7">
                        WDRWS was formed in 2021 to <br/>address the growing water needs <br/>of western South Dakota.
                    </p>
                </div>
                <ImageCard linkStyles="w-4/12 -mt-24" colorScheme="yellow" src={discoverImg}
                           text="Discover what the WDRWS has accomplished so far"
                           link="/discover"/>{/*todo all links on homepage*/}
            </div>
            <div className="w-full max-w-screen-xl m-auto -translate-y-20 flex justify-between">
                <ColCard styles="w-[31%]" textClass="text-primary-500" borderClass="border-primary-500" src={reportImg} header="Materials" subHeader="Technical Sessions"
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
                <ColCard styles="w-[31%]" textClass="text-secondary-500" borderClass="border-t-secondary-500" src={aboutImg} header="News" subHeader="In the Media" text="Congratulations to @Gary Drewes for being appointed to the SD State Water Management Board
" items={[
                    {
                        title: "Events",
                        url: "/events",
                        src: discoverImg
                    }
                ]}/>
                <ColCard styles="w-[31%]" textClass="text-green-500" borderClass="border-green-500" src={aboutImg} header="About Us" subHeader="Team Profile"
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
            <Footer/>
        </main>
    );
}
