# Output colors
green='\033[0;32m';
yellow='\033[0;33m';
default='\033[0;m';
                                                                                             
echo " ${yellow}Use the commit format ${green}https://github.com/conventional-changelog/commitlint/#what-is-commitlint ${default} "
echo "                                                                                              "
echo " ${green}build:    ${default}Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) "
echo " ${green}ci:       ${default}Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs) "
echo " ${green}docs:     ${default}Documentation only changes "
echo " ${green}feat:     ${default}A new feature "
echo " ${green}fix:      ${default}A bug fix "
echo " ${green}perf:     ${default}A code change that improves performance "
echo " ${green}refactor: ${default}A code change that neither fixes a bug nor adds a feature "
echo " ${green}test:     ${default}Adding missing tests or correcting existing tests "     
echo "${default}"

exit 0;