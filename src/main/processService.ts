export const monitorProcess = () => {
  const processData = [];
  
  for (let i = 0; i < 10; i++) {
    processData.push({
      timestamp: new Date().toLocaleTimeString(),
      productionRate: Math.floor(Math.random() * 100),
      machineStatus: Math.random() > 0.1 ? 'Running' : 'Error',
      qualityControl: `${Math.floor(Math.random() * 100)}%`,
    });
  }

  return processData;
};

export const monitorAnotherProcess = () => {
  const anotherProcessData = [];

  for (let i = 0; i < 10; i++) {
    anotherProcessData.push({
      timestamp: new Date().toLocaleTimeString(),
      productionRate: Math.floor(Math.random() * 100) + 50, // Different data logic
      machineStatus: Math.random() > 0.2 ? 'Operational' : 'Maintenance Required',
      qualityControl: `${Math.floor(Math.random() * 100)}%`,
    });
  }

  return anotherProcessData;
};
