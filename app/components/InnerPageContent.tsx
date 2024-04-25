import Image from "next/image";

type props = {
    title: string,
    content: string,
    width?: string
    featuredImg?: any
}

const InnerPageContent = ({width,title,content, featuredImg}: props) => {

    if (!width){
        width = "max-w-screen-xl"
    }

    return <main className="font-pt_sans flex-col bg-white">
        <div className="flex">
            <h1 className="bg-secondary-500 pl-7 py-7 text-white text-7xl font-newsreader lg:ml-auto w-full lg:w-10/12">
                <span>{title}</span>
            </h1>
        </div>

        <div
            className={`content mx-auto bg-white bg-opacity-60 w-full ${width} shadow-lg flex flex-col p-6 pt-12`}>
            {
                featuredImg ?
                    <Image style={{maxWidth: featuredImg.media_details.width + "px"}} className={`w-full mb-6 sm:mr-8`}
                           src={featuredImg.source_url} alt=""
                           width={featuredImg.media_details.width} height={featuredImg.media_details.height}/> : ""
            }
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    </main>
}

export default InnerPageContent;