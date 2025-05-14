
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInstanceCheck } from "@/hooks/useInstanceCheck";

interface InstanceStatusCardProps {
  instance: string;
}

const InstanceStatusCard: React.FC<InstanceStatusCardProps> = ({ instance }) => {
  const { status, qrCode, isConnected, loading } = useInstanceCheck({ 
    instance, 
    pollingInterval: 5000 
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-center">
          Instância: <span className="font-bold">{instance}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className={`rounded-md p-3 text-center ${
          isConnected ? "bg-green-50 text-green-700" : 
          status.includes("❌") ? "bg-red-50 text-red-700" : 
          "bg-yellow-50 text-yellow-700"
        }`}>
          <p className="text-xl font-medium">{status}</p>
        </div>

        {loading && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        )}

        {qrCode && (
          <div className="flex flex-col items-center space-y-3">
            <img 
              src={`data:image/png;base64,${qrCode}`} 
              alt="QR Code para reconexão" 
              className="w-64 h-64 border p-2"
            />
            <p className="text-sm text-gray-500">Escaneie o QR Code para reconectar</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InstanceStatusCard;
