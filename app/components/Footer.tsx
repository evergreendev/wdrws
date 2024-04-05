import mainLogo from "@/public/wdrws-white-logo.png";
import Image from "next/image";
import Link from "next/link";
import evergreenLogo from "@/public/evergreen.png";
import facebookLogo from "@/public/facebook-icon.png";
import linkedInLogo from "@/public/linkedin.png";
import ColCard from "@/app/components/ColCard";
import materialsImg from "@/public/technical-sessions.png";
import discoverImg from "@/public/discover.jpg";
import newsImg from "@/public/gary-drewes.jpg";
import aboutImg from "@/public/katie-leclair.jpg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return <>
        <div className="w-full max-w-screen-xl m-auto -translate-y-20 flex flex-wrap justify-around">
            <ColCard styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-primary-500" borderClass="border-primary-500"
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
            <ColCard styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-secondary-500" borderClass="border-t-secondary-500"
                     src={newsImg} header="News" subHeader="In the Media" text="Congratulations to @Gary Drewes for being appointed to the SD State Water Management Board
" items={[
                {
                    title: "Events",
                    url: "/events",
                    src: discoverImg
                }
            ]}/>
            <ColCard styles="lg:w-[31%] max-w-96 w-full mb-7" textClass="text-green-500" borderClass="border-green-500" src={aboutImg}
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
        <div className="bg-secondary-500 pb-7 text-secondary-100 uppercase">
            <div className="w-full max-w-screen-xl m-auto flex flex-wrap justify-around lg:justify-between items-center px-2">
                <div className="flex flex-wrap items-center">
                    <div>
                        <Link href="/">
                            <Image className="w-80 p-4" src={mainLogo} alt="Western Dakota Regional Water System"/>
                        </Link>
                        <p className="pl-4 opacity-60">Copyright WDRWS {currentYear}</p>
                    </div>
                    <Link className="mx-2" href="https://www.facebook.com/westsdwater">
                        <Image className="w-11" src={facebookLogo}
                               alt="Follow Western Dakota Regional Water System on Facebook"/>
                    </Link>
                    <Link className="mx-2" href="/">
                        <Image className="w-11" src={linkedInLogo}
                               alt="Follow Western Dakota Regional Water System on LinkedIn"/>
                    </Link>
                </div>
                <Link className="w-80 block mt-8 max-w-[50%] opacity-60 hover:opacity-85 transition-opacity"
                      href="https://evergreenmediarc.com/">
                    <p className="text-right">Design</p>
                    <Image className="w-full" src={evergreenLogo} alt="Evergreen Media"/>
                </Link>
            </div>
        </div>
    </>

}

export default Footer;