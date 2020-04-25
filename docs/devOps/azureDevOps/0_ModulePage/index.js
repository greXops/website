import React from "react";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import Data from "./data";
import styles from "./styles.module.css";

const ModuleList = () => (
  <>
    {Data.modules.map((module, i) => (
      <ModuleItem key={i} {...module} />
    ))}
  </>
);

function ModuleItem(props) {
  const { module_name, module_link, descriptionsList } = props;

  return (
    <div>
      <Link to={module_link} className={classnames(styles.boxPostItem)}>
        <article>
          <h2>{module_name}</h2>
          <ul>
            {descriptionsList.map((description, i) => (
              <li key={i}>{description}</li>
            ))}
          </ul>
        </article>
      </Link>
    </div>
  );
}

export default ModuleList;
