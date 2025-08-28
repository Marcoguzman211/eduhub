"use client";
import { Input, Button, Chip, Textarea } from "~/lib/components/ui";
import { FiPlus, FiX } from "react-icons/fi";

export default function DescriptionSection() {
  return (
    <section className="bg-background p-6">
      <h2 className="text-xl font-semibold">Description et objectifs</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="desc" className="block text-sm font-medium">
            Description <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="desc"
            placeholder="Décrivez votre ressource..."
            className="mt-2"
          />
          <p className="text-muted-foreground mt-2 text-xs">
            Minimum 30 caractères. Markdown supporté.
          </p>
        </div>
        <div>
          <label htmlFor="objective" className="block text-sm font-medium">
            Objectifs d&apos;apprentissage
          </label>
          <div className="mt-2 flex items-center gap-2">
            <Input id="objective" placeholder="Ajouter un objectif" />
            <Button variant="solid" size="sm">
              <FiPlus className="h-4 w-4" />
            </Button>
          </div>
          <Chip
            className="mt-4"
            color="primary"
            endContent={<FiX className="h-4 w-4" />}
          >
            Maîtriser les accords
          </Chip>
        </div>
      </div>
    </section>
  );
}
