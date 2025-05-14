
import { useState, useEffect } from "react";
import { checkInstanceConnection } from "@/services/evolutionApi";
import { useToast } from "@/hooks/use-toast";

interface UseInstanceCheckProps {
  instance: string | null;
  pollingInterval?: number;
}

interface InstanceStatus {
  status: string;
  qrCode: string | null;
  pairingCode: string | null;
  isConnected: boolean;
  loading: boolean;
}

export const useInstanceCheck = ({ 
  instance, 
  pollingInterval = 5000 
}: UseInstanceCheckProps) => {
  const [status, setStatus] = useState<InstanceStatus>({
    status: "Carregando...",
    qrCode: null,
    pairingCode: null,
    isConnected: false,
    loading: true
  });

  const { toast } = useToast();

  useEffect(() => {
    if (!instance) {
      setStatus({
        status: "Instância não informada na URL.",
        qrCode: null,
        pairingCode: null,
        isConnected: false,
        loading: false
      });
      return;
    }

    const checkConnection = async () => {
      try {
        const data = await checkInstanceConnection(instance);
        
        // Check if instance is connected (status is "open")
        const isInstanceConnected = data.connected || data.status === "open";

        if (isInstanceConnected) {
          setStatus({
            status: "✅ Instância Conectada",
            qrCode: null,
            pairingCode: null,
            isConnected: true,
            loading: false
          });
        } else if (data.qrcode || data.code) {
          // Get QR code from either code or qrcode property
          const qrCodeData = data.code || data.qrcode;
          setStatus({
            status: "⚠️ Instância Desconectada - Escaneie o QR Code",
            qrCode: qrCodeData,
            pairingCode: data.pairingCode || null,
            isConnected: false,
            loading: false
          });
        } else {
          setStatus({
            status: "⚠️ Status desconhecido",
            qrCode: null,
            pairingCode: null,
            isConnected: false,
            loading: false
          });
        }
      } catch (error) {
        console.error("Erro:", error);
        setStatus({
          status: "❌ Erro ao buscar dados da instância",
          qrCode: null,
          pairingCode: null,
          isConnected: false,
          loading: false
        });
        toast({
          title: "Erro de conexão",
          description: "Não foi possível verificar o status da instância.",
          variant: "destructive",
        });
      }
    };

    // Chamada inicial
    checkConnection();

    // Configurar polling
    const intervalId = setInterval(checkConnection, pollingInterval);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [instance, pollingInterval, toast]);

  return status;
};
