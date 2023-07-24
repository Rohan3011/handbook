import DashboardTitle from "@/components/dashboard-title";
import DashboardLayout from "@/components/layouts/dashboard";
import React from "react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <DashboardTitle
        title="Settings"
        subtitle="Manage account and website settings"
      />
    </DashboardLayout>
  );
}
