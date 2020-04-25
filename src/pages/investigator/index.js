import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Accordion from "../../components/Accordion";
import Data from "../../data/data";

function Investigator() {
  const data = Data;
  const topics = data.topics;
  return (
    <Layout>
      <section className={styles.centralizeItems}>
        <Tabs
          defaultValue={topics[0].label}
          values={topics.map((topic) => {
            return { label: topic.value, value: topic.label };
          })}
        >
          {topics.map((topic, idx) => (
            <TabItem value={topic.label} key={idx}>
              <Accordion
                key={`${idx}-${topic.label}`}
                id={`${idx}-${topic.label}`}
                topicData={data[topic.label]}
                topicModal={topic.modal}
              ></Accordion>
            </TabItem>
          ))}
        </Tabs>
      </section>
    </Layout>
  );
}

export default Investigator;
