
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import InstanceStatusCard from "@/components/InstanceStatusCard";
import NoInstance from "@/components/NoInstance";
import ApiExample from "@/components/ApiExample";

const Index = () => {
  const [searchParams] = useSearchParams();
  const instance = searchParams.get("instance");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="container max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Verificação de Instância Evolution API
        </h1>
        
        {instance ? (
          <InstanceStatusCard instance={instance} />
        ) : (
          <NoInstance />
        )}
        
        <ApiExample />

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Evolution Connection Checker</p>
          <p className="mt-1">© {new Date().getFullYear()} MetricaaS</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
