# SonarQube

[[Tool Note] - 讓 SonarQube 成為你的糞 Code 守門員 | RexHung's Blog](https://rexhung0302.github.io/2022/12/12/20221212/)

## Scanner

[SonarScanner CLI](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/)

[Analysis parameters & SonarQube](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/analysis-parameters/)

## Troubleshoting

[build - ERROR: Sonar server 'http://localhost:9000' can not be reached - Stack Overflow](https://stackoverflow.com/questions/32097414/error-sonar-server-http-localhost9000-can-not-be-reached/59163826#59163826)

> If you use SonarScanner CLI with Docker
> 
> connect the SonarScanner container to the same docker network
> 
> add `--network=host`

