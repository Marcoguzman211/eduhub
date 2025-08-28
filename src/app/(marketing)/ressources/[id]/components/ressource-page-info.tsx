"use client";
import React from "react";
import { Tabs, Tab } from "~/lib/components/ui";

export default function RessourcePageInfo() {
  return (
    <section className="w-full">
      <Tabs
        aria-label="Renseignements de la ressource"
        defaultSelectedKey="description"
        className="w-full overflow-y-scroll"
      >
        <Tab key="description" title="Description">
          <div className="space-y-6 pt-4">
            <div>
              <h2 className="mb-1 font-semibold">Description</h2>
              <p className="text-foreground/80">
                Cette ressource propose une série d&apos;activités ludiques pour
                découvrir et mémoriser le vocabulaire des animaux de la forêt.
                Les élèves apprendront à identifier, nommer et décrire
                différents animaux à travers des exercices variés.
              </p>
            </div>
            <div>
              <h2 className="mb-1 font-semibold">Objectifs pédagogiques</h2>
              <ul className="text-foreground/80 list-inside list-disc space-y-1">
                <li>Enrichir le vocabulaire des animaux</li>
                <li>Développer l&apos;expression orale et écrite</li>
                <li>Sensibiliser à la biodiversité forestière</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-1 font-semibold">Prérequis</h2>
                <p className="text-foreground/80">
                  Lecture de base, connaissances des couleurs
                </p>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Matériel requis</h2>
                <p className="text-foreground/80">
                  Crayons de couleur, colle, ciseaux
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab key="commentaires" title="Commentaires">
          <div className="text-foreground/60 pt-4 text-sm">—</div>
        </Tab>
      </Tabs>
    </section>
  );
}
