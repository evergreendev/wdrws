import ImageCard from "@/app/components/ImageCard";
import technical from "@/public/technical.jpg";
import report from "@/public/report.png";
import cheryl from "@/public/cheryl.jpg";
import doug from "@/public/doug.png";
import history from "@/public/history.png";
import reportImg from "@/public/annual-report.jpg";
import opportunityImg from "@/public/opportunity.jpg";
import discoverImg from "@/public/discover.jpg";
import Link from "next/link";
import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import {WP_REST_API_Post} from "wp-types";
import Image from "next/image";

const getNews = async (): Promise<WP_REST_API_Post[]> => {
    const res = await fetch(
        `${CMS_URL}news?_embed=true&per_page=6&orderby=date`,
        {cache: 'no-store'})

    if (!res.ok) {
        notFound();
    }

    return await res.json();
}

async function getLatestNewsletter() {
    /*TODO add pagination*/
    try {
        const res = await fetch(
            `${CMS_URL}material?material-type=19&_embed=true`,
            {cache: 'no-store'})

        return await res.json();

    } catch (err) {
        return null;
    }

}


export default async function Home() {
    const news = await getNews();
    const latestNewsLetter = await getLatestNewsletter();
    const latestNewsLetterData = latestNewsLetter?.[0];
    const newsLetterImg = latestNewsLetterData?._embedded?.['wp:featuredmedia']?.[0];

    return (
        <main className="font-pt_sans flex min-h-screen flex-col justify-between bg-white">
            <div className="bg-hero bg-cover min-h-[30vh] relative">
                <div
                    className="w-full bg-white bg-opacity-60 max-w-screen-xl lg:max-w-screen-xl mx-auto py-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h2 className="font-newsreader text-3xl sm:text-6xl text-center">Working to bring quality, abundant
                        water to all corners of
                        western South Dakota.</h2>
                </div>
            </div>


            <div className="w-full flex mb-6 flex-wrap">
                <div
                    className="xl:w-[33%] grow text-white flex flex-col justify-start px-0 py-0 shadow-md"><h2
                    className="p-2 bg-green-500 font-newreader text-3xl text-center font-bold mb-2">
                    Discover
                </h2>
                    <div className="sm:w-[450px] mx-auto py-6 px-8">

                        {
                            newsLetterImg
                                ? <Link
                                    className="flex w-full hover:bg-slate-200 mb-2 items-center"
                                    href={`/material/${latestNewsLetterData.slug}`}>
                                    <Image className="w-3/12" src={newsLetterImg.source_url} alt=""
                                           width={newsLetterImg.media_details.width}
                                           height={newsLetterImg.media_details.height}/>

                                    <h2 className="w-8/12 text-xl grow text-black p-2">
                                        WDRWS Newsletter: <br/><span
                                        dangerouslySetInnerHTML={{__html: latestNewsLetterData.title.rendered}}/>
                                    </h2>
                                </Link>
                                : ""
                        }
                        <Link className="flex w-full hover:bg-slate-200 mb-2 items-center"
                              href={`/material/category/technical-session`}>
                            <Image className="w-3/12" src={technical} alt=""/>

                            <h2 className="w-8/12 text-xl grow text-black p-2">
                                Technical Sessions
                            </h2>
                        </Link>
                        <Link className="flex w-full hover:bg-slate-200 mb-2 items-center"
                              href={`/annual-report`}>
                            <Image className="w-3/12" src={report} alt=""/>

                            <h2 className="w-8/12 text-xl grow text-black p-2">
                                Annual Report
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className=" xl:w-[33%] grow text-black flex flex-col justify-start px-0  py-0 shadow-md">
                    <Link href="/news">
                        <h2 className="p-2 bg-primary-500 font-newreader text-3xl text-center font-bold mb-2">
                            News
                        </h2></Link>
                    <div className="mx-auto py-6 w-full px-8">
                        {news.map(item => {
                            const outsideLink = (item?.acf as any)?.['outside_link'];
                            const formattedDate = new Date(item.date).toLocaleDateString();

                            return <Link
                                className="block w-full p-2 bg-opacity-90 bg-slate-100 border-slate-200 border-t-2 hover:bg-slate-200"
                                key={item.id}
                                href={outsideLink ? outsideLink : `/news/${item.slug}`}>
                                <div dangerouslySetInnerHTML={{__html: item.title.rendered + " | " + formattedDate}}/>
                            </Link>
                        })}
                    </div>
                </div>

                <div
                      className="xl:w-[33%] grow text-white flex flex-col justify-start px-0  py-0 shadow-md">
                    <h2
                        className="p-2 bg-secondary-500 font-newreader text-3xl text-center font-bold mb-2">
                        About
                    </h2>
                    <div className="w-full sm:w-[450px] mx-auto py-6 px-8">
                        <Link className="flex w-full hover:bg-slate-200 mb-2 items-center" href={`/the-board`}>
                            <Image className="w-3/12" src={doug} alt=""/>
                            <h2 className="w-8/12 text-xl grow text-black p-2">
                                Board
                            </h2>
                        </Link>
                        <Link className="flex w-full hover:bg-slate-200 mb-2 items-center"
                              href={`/staff`}>
                            <Image className="w-3/12" src={cheryl} alt=""/>
                            <h2 className="w-8/12 text-xl grow text-black p-2">
                                Staff
                            </h2>
                        </Link>
                        <Link className="flex w-full hover:bg-slate-200 items-center"
                              href={`/our-history`}>
                            <Image className="w-3/12" src={history} alt=""/>

                            <h2 className="w-8/12 text-xl grow text-black p-2">
                                History
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="flex-wrap bg-green-200 max-w-screen-2xl pb-28 sm:mx-auto flex justify-start font-newsreader items-center">
                <ImageCard loading="eager" wide linkStyles="w-full md:w-6/12 max-w-screen-lg xl:-translate-x-36"
                           colorScheme="yellow"
                           src={reportImg}
                           transparent
                           link="/drought" text="Learn more about the water needs of western South Dakota"/>
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
                           text="Join the conversation" link="/membership"/>
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
                           text="WDRWS Accomplishments to Date"
                           link="/progress"/>
            </div>
        </main>
    );
}
