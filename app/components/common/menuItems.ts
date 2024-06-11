export type menuItem = {
    title: string,
    url?: string,
    subMenu?: menuItem[]
}

const menuItems: menuItem[] = [
    {
        title: "Membership"
    },
    {
        title: "Discover",
        url: "#",
        subMenu: [
            {
                title: "Progress"
            },
            {
                title: "Drought"
            },
            {
                title: "Conservation"
            },
            {
                title: "Funding"
            },
            {
                title: "Newsletter",
                url: "material/category/newsletter"
            },
            {
                title: "Technical Sessions",
                url: "material/category/technical-session"
            },
            {
                title: "Annual Reports",
                url: "material/category/annual-report"
            },
            {
                title: "Annual Meeting",
                url: "https://bit.ly/4easDot"
            }
        ]
    },
    {
        title: "News",
        url: "news",
        subMenu: [
            {
                title: "News Releases",
                url: "news/news-releases"
            },
            {
                title: "Media",
                url: "news/media"
            }
        ]
    },
    {
        title: "About",
        url: "#",
        subMenu: [
            {
                title: "History",
                url: "our-history"
            },
            {
                title: "Board",
                url: "the-board"
            },
            {
                title: "Staff"
            },
/*            {
                title: "The Team"
            },
            {
                title: "Katie Profile"
            },*/
            {
                title: "members"
            },
            {
                title: "Consulting Team Profiles"
            },

        ]
    }
];

export default menuItems;