type menuItem = {
    title: string,
    url?: string,
    subMenu?: menuItem[]
}

const menuItems: menuItem[] = [
    {
        title: "Discover",
        url: "/discover",
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
        url: "/news",
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
        url: "/materials",
        subMenu: [
            {
                title: "Newsletters"
            },
            {
                title: "Technical Sessions"
            },
            {
                title: "Annual Reports"
            },
            {
                title: "Meeting Agendas"
            }
        ]
    },
    {
        title: "About Us",
        url: "/about-us",
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