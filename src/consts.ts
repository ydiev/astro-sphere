import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
    TITLE: "",
    DESCRIPTION: "This is my personal website and blog.",
    AUTHOR: "Yanko Diev",
}

// Work Page
export const WORK: Page = {
    TITLE: "Work",
    DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
    TITLE: "Blog",
    DESCRIPTION: "Writing about things I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
    TITLE: "Projects",
    DESCRIPTION: "Some of the projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
    TITLE: "Search",
    DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
    {
        TEXT: "Home",
        HREF: "/",
    },
/*     {
        TEXT: "Work",
        HREF: "/work",
    }, */
    {
        TEXT: "Blog",
        HREF: "/blog",
    },
    {
        TEXT: "Projects",
        HREF: "/projects",
    },
]

// Socials
export const SOCIALS: Socials = [
    // { 
    //   NAME: "Email",
    //   ICON: "email", 
    //   TEXT: "markhorn.dev@gmail.com",
    //   HREF: "mailto:markhorn.dev@gmail.com",
    // },
    {
        NAME: "Github",
        ICON: "github",
        TEXT: "ydiev",
        HREF: "https://github.com/ydiev"
    },
    {
        NAME: "LinkedIn",
        ICON: "linkedin",
        TEXT: "yankodiev",
        HREF: "https://www.linkedin.com/in/yankodiev/",
    },
    {
        NAME: "Twitter",
        ICON: "twitter-x",
        TEXT: "DievYanko",
        HREF: "https://x.com/DievYanko",
    },
]

