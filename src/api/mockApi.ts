
// Este arquivo simula as respostas da API real para fins de demonstração
// Em um ambiente de produção, você deve substituir isso por chamadas reais à API Evolution

// Estado simulado para alternar entre conectado e desconectado
let isConnected = false;
let toggleCounter = 0;

// QR Code base64 simulado (exemplo)
const mockQrCode = "iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGCSURBVHhe7dExAQAwDMCwCXUyHQb+hQotkOTq7jOQd4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCMReIuUDMBWIuEHOBmAvEXCDmAjEXiLlAzAViLhBzgZgLxFwg5gIxF4i5QMwFYi4Qc4GYC8RcIOYCsdcDnwkItDZUGxgAAAAASUVORK5CYII=";

export const mockConnectApi = async (instance: string) => {
  // Simular um pequeno atraso para parecer uma chamada de API real
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // A cada 3 chamadas, alternar o status de conexão para simular
  // uma instância que às vezes está conectada e às vezes desconectada
  toggleCounter++;
  if (toggleCounter % 3 === 0) {
    isConnected = !isConnected;
  }
  
  // Retornar resposta simulada
  if (isConnected) {
    return {
      success: true,
      connected: true,
      message: "Instance is connected"
    };
  } else {
    return {
      success: true,
      connected: false,
      message: "Instance is not connected",
      qrcode: mockQrCode
    };
  }
};
