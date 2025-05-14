
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const NoInstance: React.FC = () => {
  return (
    <Alert variant="destructive" className="max-w-md mx-auto">
      <AlertCircle className="h-5 w-5" />
      <AlertTitle>Instância não informada</AlertTitle>
      <AlertDescription>
        <p>Adicione o parâmetro <code>instance</code> na URL.</p>
        <p className="text-sm mt-1">Exemplo: <code>?instance=158</code></p>
      </AlertDescription>
    </Alert>
  );
};

export default NoInstance;
