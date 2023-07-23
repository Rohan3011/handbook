import { Icons } from "@/components/icons";
import DashboardLayout from "@/components/layouts/dashboard";
import ProjectCard from "@/components/project-card";
import { Card } from "@/components/ui/card";
import React from "react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* New Card */}
        <Card className="flex cursor-pointer items-center justify-center border-2 border-dashed hover:brightness-150">
          <div className="flex items-center justify-center space-x-0.5">
            <Icons.Add className="h-4 w-4" />
            <span>New</span>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
