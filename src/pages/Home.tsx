import { motion } from "framer-motion";
import { Intro } from "../components/Intro/Intro";
import { Projects } from "../components/Projects/Projects";
import { Layout } from "../layout/Layout";
import { useEffect } from "react";


export function Home() {
  useEffect(() => {
    document.title = "Aniconic";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Architecture and Interior Design Portfolio."
      );
  }, []);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Intro />
        <Projects />
      </motion.div>
    </Layout>
  );
}