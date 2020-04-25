import React, { Component } from "react";
import Fold from "../Fold";
import FoldCard from "../FoldCard";
import FoldModal from "../FoldModal";
import styles from "./styles.module.css";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
    };
  }
  /***
   * Selects the given fold, and deselects if it has been clicked again by setting "active to -1"
   * */
  selectedFold(foldNum) {
    const current = this.state.active === foldNum ? -1 : foldNum;
    this.setState(() => ({ active: current }));
  }

  render() {
    const topicData = this.props.topicData;
    const topicModal = this.props.topicModal;
    const id = this.props.id;
    return (
      <div id={id} className={styles.accordion}>
        {topicData &&
          Object.keys(topicData).map((platfrom, idx) => {
            let foldPlatformData = topicData[platfrom];
            return (
              <Fold
                key={`${idx}-${foldPlatformData.value}`}
                index={idx}
                title={foldPlatformData.value}
                handle={() => this.selectedFold(idx)}
                active={idx === this.state.active}
              >
                {foldPlatformData &&
                  foldPlatformData.cards.map((card, idx) => (
                    <FoldCard key={`${idx}-${card.username}-`} {...card} />
                  ))}
              </Fold>
            );
          })}
          <FoldModal {...topicModal}></FoldModal>
      </div>
    );
  }
}

export default Accordion;
