let processData: any[] = [];
let anotherProcessData: any[] = [];

const generateNewDataPoint = () => {
  return {
    timestamp: new Date(), // Store the full Date object to handle labels
    productionRate: Math.floor(Math.random() * 100),
    machineStatus: Math.random() > 0.1 ? 'Running' : 'Error',
    qualityControl: `${Math.floor(Math.random() * 100)}%`,
  };
};

const generateAnotherNewDataPoint = () => {
  return {
    timestamp: new Date(),
    productionRate: Math.floor(Math.random() * 100) + 50,
    machineStatus: Math.random() > 0.2 ? 'Operational' : 'Maintenance Required',
    qualityControl: `${Math.floor(Math.random() * 100)}%`,
  };
};

export const monitorProcess = () => {
  if (processData.length === 0) {
    for (let i = 0; i < 60; i++) {
      processData.push(generateNewDataPoint());
    }
  } else {
    processData.shift(); // Remove the first data point
    processData.push(generateNewDataPoint()); // Add a new data point at the end
  }
  return processData;
};

export const monitorAnotherProcess = () => {
  if (anotherProcessData.length === 0) {
    for (let i = 0; i < 60; i++) {
      anotherProcessData.push(generateAnotherNewDataPoint());
    }
  } else {
    anotherProcessData.shift(); // Remove the first data point
    anotherProcessData.push(generateAnotherNewDataPoint()); // Add a new data point at the end
  }
  return anotherProcessData;
};
