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
            {
                title: "Events"
            },
            {
                title: "In The Media"
            }
        ]
    },
    {
        title: "Materials",
        url: "#",
        subMenu: [
            {
                title: "Newsletters",
                url: "materials/category/newsletter"
            },
            {
                title: "Technical Sessions",
                url: "materials/category/technical-session"
            },
            {
                title: "Annual Reports",
                url: "materials/category/annual-report"
            },
            {
                title: "Meeting Agendas",
                url: "materials/category/meeting-agenda"
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