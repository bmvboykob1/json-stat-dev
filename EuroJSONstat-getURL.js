const EuroJSONstat = require("jsonstat-euro");

const
  query={
    dataset: "prc_hicp_midx",
    filter: {
      unit: ["I15"],
      coicop: ["CP0117"]
    }
  },
  url=EuroJSONstat.getURL(query);
  console.log(url)
;
