import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import JsLogo from "../../static/img/js-logo.svg"
import BrowserOnly from "@docusaurus/BrowserOnly"

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <Link
                to={"./docs/intro/welcome"}
                style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "auto",
                }}
            >
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <JsLogo width={50} height={50} />
                </div>
            </Link>
        </header>
    )
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout>
            <HomepageHeader />
        </Layout>
    )
}
