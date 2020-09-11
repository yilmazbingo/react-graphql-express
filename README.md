## Start the Development Server
```
    "dev": "  nodemon -r dotenv/config index.js --watch client",
```
<!-- we are preloading dotenv/config which reads .env file located in the root. in env: -->
```
dbUrl=mongodb://localhost:27017/graphqlDB
```
- if you get this error:
```
$ [nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/tesla/Documents/projects/graphql/react-graphql-express/client'

```
<!--  ENOSPC means Error No more hard-disk space available. Reason why this much memory required by nodemon. Solution-->
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
<!-- /etc/sysctl.conf will be applied again every time the system boots. -->
**Standard Output to a File (tee)**
     "tee" is used to store and view (both at the same time) the output of any command. it is named after the T-splitter.


## Set Up MongoDb in Kali Linux
- first we are checking if the app is safe. To detect and avoid malicious replacement packages, package owners can sign the package files, and consumers can verify those signatures. "apt-key" is used to manage the list of keys used by apt to authenticate packages. Packages which have been authenticated using these keys will be considered trusted.
```
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```
- Create a /etc/apt/sources.list.d/mongodb-org-4.2.list file for mongodb. this repository is where "apt" package manager keeps the list of packages that installed. so when we update our system "Apt" checks here.
```
$ echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo systemctl start mongod
$ sudo systemctl status mongod
```
- You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:
```
$ sudo systemctl enable mongod
```
**Install MongoDb Compass**
```
$ sudo apt-get update
```
- download the compass from "https://www.mongodb.com/try/download/compass". installation for kali-linux needs extra steps
-install this dependency:
```
$ sudo apt-get install libgconf-2-4
```
- incase you get an error
```
$ sudo apt --fix-broken install
```
- navigate to the ~/Downloads
```
$ sudo dpkg -i mongodb-compass_1.22.1_amd64.deb 
```
<!-- dpkg is used to install, remove, and provide information about . deb packages.  -->
