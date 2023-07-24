import DashboardTitle from "@/components/dashboard-title";
import { Icons } from "@/components/icons";
import DashboardLayout from "@/components/layouts/dashboard";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardTitle title="Projects" subtitle="Create and manage projects">
        <Button className=" space-x-2">
          <Icons.Add className="h-4 w-4" />
          <span>New project</span>
        </Button>
      </DashboardTitle>
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
