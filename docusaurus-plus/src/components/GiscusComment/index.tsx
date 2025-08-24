import React, { type ReactNode } from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComment() {
    const { colorMode } = useColorMode();
    return (
        <Giscus
            id="comments"
            repo="CWKSC/cwksc.github.io"
            repoId="R_kgDOPThJCA"
            category="Announcements"
            categoryId="DIC_kwDOPThJCM4Cuh6i"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode === 'dark' ? 'dark' : 'light'}
            lang="en"
            loading="lazy"
        />
    );
}
