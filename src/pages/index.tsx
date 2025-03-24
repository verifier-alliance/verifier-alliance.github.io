import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <div className="flex flex-1 flex-col items-center justify-center max-w-screen-lg mx-auto px-8 py-12">
        <img
          src="/verifier-alliance.png"
          alt="Verifier Alliance Logo"
          className={`${styles.logo} ${styles.logoLight} my-8`}
        />
        <img
          src="/verifier-alliance-white.png"
          alt="Verifier Alliance Logo"
          className={`${styles.logo} ${styles.logoDark} my-8`}
        />
        <div className="text-xl md:text-2xl tracking-tight text-center">{siteConfig.tagline}</div>
        <div className="flex flex-col max-w-2xl text-center mt-12 mb-6">
          <div className="">
            <div>
              <div className="text-xl font-semibold">Database Schema</div>
              <p>
                The Verifier Alliance maintains a standard{" "}
                <Link to="/docs/database-schema" className="text-primary hover:text-primary-dark font-medium">
                  PostgreSQL database schema
                </Link>{" "}
                for verified contracts.
              </p>
            </div>
            <div>
              <div className="text-xl font-semibold">Public Dataset</div>
              <p>
                Each verifier contributes their verified contracts to this shared database. <br /> Access the latest
                dataset at{" "}
                <Link to="/docs/download" className="text-primary hover:text-primary-dark font-medium">
                  export.verifieralliance.org
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl  font-semibold text-center mb-8">Verifiers</h2>
          <div className="grid grid-cols-3 gap-8 place-items-center">
            <Link className="flex flex-col items-center gap-2 group" to="https://sourcify.dev">
              <img
                src="/sourcify.svg"
                alt="Sourcify Logo"
                className="h-16 rounded-full transition-transform group-hover:scale-105"
              />
              <p className="group-hover:text-primary text-center">Sourcify</p>
            </Link>
            <Link className="flex flex-col items-center gap-2 group" to="https://routescan.io">
              <img
                src="/routescan.svg"
                alt="Routescan Logo"
                className="h-16 rounded-full transition-transform group-hover:scale-105"
              />
              <p className="group-hover:text-primary text-center">Routescan</p>
            </Link>
            <Link className="flex flex-col items-center gap-2 group" to="https://blockscout.com">
              <img
                src="/blockscout.svg"
                alt="Blockscout Logo"
                className="h-16 rounded-full transition-transform group-hover:scale-105"
              />
              <p className="group-hover:text-primary text-center">Blockscout</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
