export type menuItem = {
    title: string,
    url?: string,
    subMenu?: menuItem[]
}

const menuItems: menuItem[] = [
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
            }
        ]
    },
    {
        title: "News",
        url: "#",
        subMenu: [
            /*{
                title: "Events"
            },*/
            {
                title: "In The Media",
                url: "news"
            }
        ]
    },
    {
        title: "Materials",
        url: "#",
        subMenu: [
            {
                title: "Newsletters",
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
                title: "Meeting Agendas",
                url: "material/category/meeting-agenda"
            }
        ]
    },
    {
        title: "About Us",
        url: "#",
        subMenu: [
            {
                title: "Our History"
            },
            {
                title: "The Board"
            },
            {
                title: "The Team"
            },
            {
                title: "Katie Profile"
            },
            {
                title: "Consulting Team Profiles"
            }
        ]
    }
];

export default menuItems;