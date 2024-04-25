import Image from "next/image";

type props = {
    title: string,
    content: string,
    width?: string
    featuredImg?: any,
    innerHtml?:boolean
}

const InnerPageContent = ({width,title,content, featuredImg, innerHtml=true}: props) => {

    if (!width){
        width = "max-w-screen-xl"
    }

    return <main className="font-pt_sans flex-col bg-white">
        <div className="flex">
            <h1 className="bg-secondary-500 pl-7 py-7 text-white text-4xl lg:text-6xl font-newsreader lg:ml-auto w-full lg:w-10/12">
                <span className="max-w-screen-xl block">{title}</span>
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
            {

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