
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ApiExample: React.FC = () => {
  return (
    <Card className="max-w-md mx-auto my-6">
      <CardHeader>
        <CardTitle>Implementação da API</CardTitle>
        <CardDescription>Para implementar esse verificador em produção</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          <p className="font-medium">Para uma implementação em produção, você precisa:</p>
          
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Criar um servidor backend com Express</li>
            <li>Configurar as variáveis de ambiente (API_URL, API_KEY)</li>
            <li>Implementar um endpoint <code>/api/connect</code> que fará a chamada segura para a Evolution API</li>
            <li>Substituir a API simulada pela chamada real ao seu backend</li>
          </ol>
          
          <p className="mt-4 text-gray-600">
            O código fornecido neste exemplo pode ser facilmente adaptado para um servidor Node.js/Express
            ou qualquer outro backend de sua preferência.
          </p>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        <p>Essa demonstração usa uma API simulada para fins de visualização.</p>
      </CardFooter>
    </Card>
  );
};

export default ApiExample;
