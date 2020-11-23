# coder-check

### 1. Requirements
Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
result set.

2. If more than one click from the same IP ties for the most expensive click in a one hour
period, only place the earliest click into the result set.

3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
of those clicks in the result set.

The result set should be stored in an array of hashes. Each hash should represent a click. The
expected result set should be a subset of the original array.

### 2. Definitions
1. A click is the composite of an IP address, a timestamp, and a click amount.
2. Duplicate clicks are clicks that have the same IP address, regardless of timestamp or
click amount.
3. Click periods are defined as the one hour spans that start at the top of the hour. So, in
one day, there are 24 periods and they are broken down as follows (in HH:MM:SS format):

```
  00:00:00 00:59:59 (period 1)
  01:00:00 01:59:59 (period 2)
  02:00:00 02:59:59 (period 3)
  ...
  22:00:00 22:59:59 (period 23)
  23:00:00 23:59:59 (period 24)
```

### 3. Setting up your environment and Dependencies


#### 3.1 Prerequisites
Please make sure that NODE is installed on the device where this code needs to be run. NPM will be used to run any command from shell/terminal to run the code.


1. Clone the project with the following command -

```
sudo git clone https://github.com/deepakb2410/coder-check.git

```

2. Go to director coder-check and execute the following command -

```

sudo npm install

```

### 3.2 Running the project

1. For running the project, execute the following command -

```

sudo npm run solution

```

## 4. Project Overview

This project is developed to implement the requirement mentioned in section 1 of Requirements. This project is created with use of node, npm and javascript during implementation of this solution.

 1. `index.js` - The is the main file that shall execute the code and use the required helper api with the real data i.e JSON data
 2. `computeClicksData.js` - This file contains the computation that accets the `clicks` array of objects and generates the resulted array with expected/filtered objects
 3. `saveFileToJSON.js` - Saves the array recieved as argument to the JSON file
 4. `testClicks.js` - Executes test cases
 5. `testData.js` - Holds the Test file's input and output data
 6. `resultset.json` - Stores the final output


### 4.1 Linting
Execute the following command to run the solution:
```
    sudo npm run lint
```
### 4.2 Testing

Mocha is used for writing test in this. The only few scenarios of Test cases are captured.
Execute the following command to run the solution:
```
sudo npm run test
```
### 4.3 Debugging
Future scope

### 4.4 Monitoring
Future scope

### 4.5 Troubleshooting
Future scope

