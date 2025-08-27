"use client";
import React from "react";
import { Button, Chip, Avatar } from "~/lib/components/ui";
import { FiDownload, FiClock, FiCalendar } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function RessourceHeader() {
  return (
    <header className="w-full space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h1 className="text-2xl leading-tight font-semibold tracking-tight md:text-4xl">
          Les Animaux de la Forêt – Vocabulaire et Activités
        </h1>
        <div className="hidden md:block">
          <Button radius="lg" size="lg">
            Suivre
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <Chip radius="sm" color="primary">
          CE1-CE2
        </Chip>
        <Chip radius="sm" variant="flat" color="default">
          Français
        </Chip>
        <Chip radius="sm" variant="flat" color="danger">
          PDF
        </Chip>
      </div>
      <div className="text-foreground/80 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2">
          <StarRow />
          <span className="tabular-nums">4.2 (127)</span>
        </div>
        <div className="flex items-center gap-2">
          <FiDownload className="h-5 w-5" aria-hidden />
          <span className="tabular-nums">2 341 téléchargements</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className="h-5 w-5" aria-hidden />
          <span>45 min</span>
        </div>
        <div className="flex items-center gap-2">
          <FiCalendar className="h-5 w-5" aria-hidden />
          <span>Mis à jour le 15 mars 2024</span>
        </div>
      </div>

      {/* Auteur */}
      <div className="flex items-center gap-4">
        <Avatar
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=96&h=96&fit=crop&auto=format"
          name="Marie Dubois"
          radius="full"
          className="shrink-0"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold">Marie Dubois</p>
            <Chip size="sm" variant="flat" radius="sm">
              Vérifiée
            </Chip>
          </div>
          <p className="text-foreground/70">
            École primaire • 8 ans d&apos;expérience
          </p>
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <Button radius="lg" size="lg">
          Suivre
        </Button>
      </div>
    </header>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      <AiFillStar className="h-5 w-5" />
      <AiFillStar className="h-5 w-5" />
      <AiFillStar className="h-5 w-5" />
      <AiFillStar className="h-5 w-5" />
      <AiOutlineStar className="h-5 w-5" />
    </div>
  );
}
