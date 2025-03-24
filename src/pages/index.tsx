import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-8">
        <img
          src="/verifier-alliance.png"
          alt="Verifier Alliance Logo"
          className={`${styles.logo} ${styles.logoLight}`}
        />
        <img
          src="/verifier-alliance-white.png"
          alt="Verifier Alliance Logo"
          className={`${styles.logo} ${styles.logoDark}`}
        />
        <p className="md:text-2xl">{siteConfig.tagline}</p>
      </div>
    </Layout>
  );
}
