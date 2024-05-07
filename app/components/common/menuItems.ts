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
        ]
    },
    {
        title: "News",
        url: "news"
    },
    {
        title: "About",
        url: "#",
        subMenu: [
            {
                title: "Our History"
            },
            {
                title: "Board",
                url: "the-board"
            },
/*            {
                title: "The Team"
            },
            {
                title: "Katie Profile"
            },*/
            {
                title: "Consulting Team Profiles"
            }
        ]
    }
];

export default menuItems;