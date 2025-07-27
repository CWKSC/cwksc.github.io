import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '32px',
                    paddingTop: '64px',
                    gap: '16px',
                }}>

                <img style={{
                    verticalAlign: 'middle',
                    width: '128px',
                    height: '128px',
                    borderRadius: '50%'
                }} src="./img/icon.jpg" alt="Avatar" />

                <h1> About me 關於我 </h1>

                <p> 一個什麼都學，但什麼都不精通的人 </p>

            </div>

        </Layout>
    );
}
