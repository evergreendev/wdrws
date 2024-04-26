import Image from "next/image";

type props = {
    title: string,
    content: string,
    isContent?: boolean,
    width: "SM"|"MD"|"LG"|"XL"|"2XL"
    featuredImg?: any,
    innerHtml?:boolean
}

const InnerPageContent = ({width,title,content, isContent=true, featuredImg, innerHtml=true}: props) => {
    const widthDict = {
        Default: "max-w-screen-xl",
        SM: "max-w-screen-sm",
        MD: "max-w-screen-md",
        LG: "max-w-screen-lg",
        XL: "max-w-screen-xl",
        "2XL": "max-w-screen-2xl"
    }

    return <main className="font-pt_sans flex-col bg-white">
        <div className="flex">
            <h1 className="bg-secondary-500 pl-7 py-7 text-white text-4xl lg:text-6xl font-newsreader lg:ml-auto w-full lg:w-10/12">
                <span className="max-w-screen-xl block">{title}</span>
            </h1>
        </div>

        <div
            className={`${isContent ? "content" : ""} mx-auto bg-white bg-opacity-60 w-full ${widthDict[width]} shadow-lg flex flex-col p-6 pt-12 text-xl`}>
            {
                featuredImg ?
                    <Image style={{maxWidth: featuredImg.media_details.width + "px"}} className={`w-full mb-6 sm:mr-8`}
                           src={featuredImg.source_url} alt=""
                           width={featuredImg.media_details.width} height={featuredImg.media_details.height}/> : ""
            }

            {
                innerHtml ?
                    <div dangerouslySetInnerHTML={{__html: content}}/> :
                    <div>
                        {content}
                    </div>
            }

        </div>
    </main>
}

export default InnerPageContent;