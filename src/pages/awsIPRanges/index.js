import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function AwsIPRanges() {
  const [allData, setData] = useState({});
  const [allRegions, setAllRegions] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [selectedRegion, setRegion] = useState(undefined);
  const [selectedService, setService] = useState(undefined);
  const [iplist, setIPList] = useState(["IP List"]);

  // Similar to componentDidMount and componentDidUpdate: also, To Run useEffect Only Once useEffect(() => {},[]);
  useEffect(() => {
    const getAllData = async () => {
      const response = await fetch(
        "https://ip-ranges.amazonaws.com/ip-ranges.json"
      );
      const data = await response.json();
      return data.prefixes;
    };

    getAllData().then((data) => {
      setData(data);
      try {
        var regions = [];
        var services = [];
        data.map((prefix) => {
          regions.push(prefix.region);
          services.push(prefix.service);
        });
        setAllRegions(Array.from(new Set(regions)));
        setAllServices(Array.from(new Set(services)));
      } catch (err) {
        window.alert(err);
      }
    });
  }, []); // Only re-run the effect if allData changes

  const ipListesiniYaz = () => {
    if (selectedRegion) {
      if (selectedService) {
        let list = ["IP List"];
        allData &&
          allData.map((prefix) => {
            if (
              prefix.region == selectedRegion &&
              prefix.service == selectedService
            ) {
              list.push(prefix.ip_prefix);
            }
          }),
          setIPList(list);
      } else {
        window.alert("Please Choose a Service!!!");
      }
    } else {
      window.alert("Please Choose a Region!!!");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            className={styles.titleLogo}
            src="https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144-smile.png"
          />
          <h4>AWS Public IP Address Ranges</h4>
        </div>
        <div className={styles.fold_content}>
          <div style={{ margin: "auto" }}>
            <div className={styles.dropBox}>
              <Select
                options={
                  allRegions &&
                  allRegions.map((region) => ({
                    value: region,
                    label: region,
                  }))
                }
                required
                placeholder="Select Region"
                className={styles.dropdownList}
                separator
                values={[]}
                onChange={(value) => setRegion(value[0].value)}
              />
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <div className={styles.dropBox}>
              <Select
                options={
                  allServices &&
                  allServices.map((service) => ({
                    value: service,
                    label: service,
                  }))
                }
                placeholder="Select Service"
                className={styles.dropdownList}
                separator
                values={[]}
                onChange={(value) => setService(value[0].value)}
              />
            </div>
          </div>
        </div>
        <div style={{ margin: "auto", width: "fit-content" }}>
          <button className={styles.submitButton} onClick={ipListesiniYaz}>
            Get IP List
          </button>
        </div>
        <div className={styles.textArea}>
          {iplist.map((i, key) => {
            return (
              <div key={key} className={styles.ips}>
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default AwsIPRanges;
