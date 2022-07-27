const EuroJSONstat = require("jsonstat-euro");

EuroJSONstat.fetchQuery(
    {
      "dataset": "prc_hicp_midx",
      "filter": {
        unit: ["I15"],
        coicop: ["CP0117"],
        geo: ["AT"]
      }
    }
  ).then(q=>{
    if(q.class==="error"){
      console.log(`Error label: "${q.label}"`);
    }else{
      console.log(q);
    }
  });
