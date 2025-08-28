"use client";
import { Select, SelectItem, Switch } from "~/lib/components/ui";

export default function LicenseSection() {
  return (
    <section className="bg-background p-6">
      <h2 className="text-xl font-semibold">Licence et permissions</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="license" className="block text-sm font-medium">
            Licence <span className="text-destructive">*</span>
          </label>
          <Select id="license" className="mt-2" defaultSelectedKeys={["cc-by"]}>
            <SelectItem key="cc-by">CC BY - Attribution</SelectItem>
            <SelectItem key="cc-by-sa">
              CC BY-SA - Partage dans les mêmes conditions
            </SelectItem>
            <SelectItem key="cc0">CC0 - Domaine public</SelectItem>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Autoriser les commentaires</p>
            <p className="text-muted-foreground text-xs">
              Les utilisateurs peuvent commenter votre ressource
            </p>
          </div>
          <Switch defaultSelected />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Autoriser les adaptations</p>
            <p className="text-muted-foreground text-xs">
              Permettre aux autres de modifier votre ressource
            </p>
          </div>
          <Switch defaultSelected />
        </div>
      </div>
    </section>
  );
}
