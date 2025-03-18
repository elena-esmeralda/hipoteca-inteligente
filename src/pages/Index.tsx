
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUp, Users, Building2, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white p-6">
        <div className="container">
          <h1 className="text-3xl font-heading font-bold">Gestor Legal Hipotecario</h1>
          <p className="text-primary-foreground/80 mt-2">Sistema integral de gestión de expedientes hipotecarios</p>
        </div>
      </header>
      
      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
            <FileUp className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Gestión de Documentos</h2>
            <p className="text-secondary mb-4">Suba y analice escrituras hipotecarias y contratos de crédito</p>
            <Button className="w-full">Comenzar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:200ms]">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Clientes</h2>
            <p className="text-secondary mb-4">Gestione la información de sus clientes</p>
            <Button className="w-full">Gestionar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:400ms]">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Entidades</h2>
            <p className="text-secondary mb-4">Control de entidades prestamistas</p>
            <Button className="w-full">Administrar</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in [animation-delay:600ms]">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">Agenda</h2>
            <p className="text-secondary mb-4">Gestione sus citas y plazos</p>
            <Button className="w-full">Ver Agenda</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
