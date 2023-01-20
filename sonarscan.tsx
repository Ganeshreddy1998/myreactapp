const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_bb16aca71a53d1077e630add341b4780fb17552e",
    options: {
      "sonar.projectName": "myreactapp",
      "sonar.projectDescription": "React POC",
      "sonar.projectKey": "myreactapp",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit()
);
