
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Gavel, Briefcase, ScrollText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white p-6">
        <div className="container">
          <div className="flex items-center gap-3">
            <Gavel className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-heading font-bold">Gestor Legal Hipotecario</h1>
              <p className="text-white/90 mt-2">Sistema integral de gestión de expedientes hipotecarios</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Gestión de Documentos</h2>
            <p className="text-secondary mb-4">Análisis de escrituras hipotecarias y contratos de crédito</p>
            <Button className="w-full bg-primary hover:bg-primary-light">Comenzar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:200ms] border-primary/10">
            <ScrollText className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Expedientes</h2>
            <p className="text-secondary mb-4">Gestión integral de casos legales</p>
            <Button className="w-full bg-primary hover:bg-primary-light">Gestionar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:400ms] border-primary/10">
            <Briefcase className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Entidades</h2>
            <p className="text-secondary mb-4">Control de entidades prestamistas</p>
            <Button className="w-full bg-primary hover:bg-primary-light">Administrar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:600ms] border-primary/10">
            <Gavel className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Base Legal</h2>
            <p className="text-secondary mb-4">Jurisprudencia y normativa aplicable</p>
            <Button className="w-full bg-primary hover:bg-primary-light">Consultar</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
