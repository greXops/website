import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const siteConfig = [
  "https://twitter.com/BarisGC/lists/devops?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/linux?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/docker-kubernetes1?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/software-programming?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/bigdata-ai-ml-dbs?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/software-testing?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/technology-news?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/single-board-computer?ref_src=twsrc%5Etfw",
  "https://twitter.com/BarisGC/lists/economy?ref_src=twsrc%5Etfw",
];

function TwitterLists() {
  const FlexItem = () => (
    <div className={styles.twitterTimelineFlexContainer}>
      {siteConfig &&
        siteConfig.map((prop, idx) => (
          <div className={styles.twitterTimelineFlexItem} key={idx}>
            <TwitterTimelineEmbed
              key={`${idx}-twitter`}
              sourceType="url"
              url={siteConfig[idx]}
              theme="dark"
              options={{height: "40rem"}}
              noScrollbar
              borderColor="#3578E5"
              placeholder="Loading"
            />
          </div>
        ))}
    </div>
  );

  return (
    <Layout title="Twitter Lists" description="Baris Gece Twitter Lists">
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <main>
        <div className={styles.container}>
          <FlexItem />
        </div>
      </main>
    </Layout>
  );
}

export default TwitterLists;
