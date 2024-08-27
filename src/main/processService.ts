// Create Mock Data
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

export const startMonitoring = (sendData: (data: any) => void) => {
  setInterval(() => {
    const data = monitorProcess();
    sendData(data);  // Send new data to the renderer process
  }, 1000);  // Update every 3 seconds
};