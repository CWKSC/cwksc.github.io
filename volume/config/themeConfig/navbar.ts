import { github_username } from '../common';

export const navbar = {
    title: `${github_username}`,
    logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
    },
    items: [
        { label: 'Blog 博客', to: '/blog/', position: 'left' },
        { label: 'Note 筆記', to: "/note/", position: 'left' },
        { label: 'Programming 編程', to: "/programming/", position: 'left' },
        { label: 'Node.js', to: "/node-js/", position: 'left' },
        { label: 'Misc 雜項', to: "/misc/", position: 'left' },
    ],
};
