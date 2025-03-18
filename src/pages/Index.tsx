
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Gavel, Briefcase, ScrollText } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-12 h-12 text-primary mb-4" />,
    title: "Gestión de Documentos",
    description: "Análisis de escrituras hipotecarias y contratos de crédito",
    buttonText: "Comenzar",
    url: "https://www.youtube.com/",
  },
  {
    icon: <ScrollText className="w-12 h-12 text-primary mb-4" />,
    title: "Expedientes",
    description: "Gestión integral de casos legales",
    buttonText: "Gestionar",
    url: "https://www.youtube.com/",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-primary mb-4" />,
    title: "Entidades",
    description: "Control de entidades prestamistas",
    buttonText: "Administrar",
    url: "https://www.youtube.com/",
  },
  {
    icon: <Gavel className="w-12 h-12 text-primary mb-4" />,
    title: "Base Legal",
    description: "Jurisprudencia y normativa aplicable",
    buttonText: "Consultar",
    url: "https://www.youtube.com/",
  },
];

const FeatureCard = ({ icon, title, description, buttonText, url, delay }) => (
  <Card className={`p-6 hover:shadow-lg transition-shadow animate-fade-in border-primary/10`} style={{ animationDelay: `${delay}ms` }}>
    {icon}
    <h2 className="text-xl font-heading font-semibold mb-2">{title}</h2>
    <p className="text-secondary mb-4">{description}</p>
    <Button className="w-full bg-primary hover:bg-primary-light" onClick={() => window.open(url, '_blank')}>
      {buttonText}
    </Button>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white p-6">
        <div className="container flex items-center gap-3">
          <Gavel className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-heading font-bold">Gestor Legal Hipotecario</h1>
            <p className="text-white/90 mt-2">Sistema integral de gestión de expedientes hipotecarios</p>
          </div>
        </div>
      </header>
      
      <main className="container py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 200} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
