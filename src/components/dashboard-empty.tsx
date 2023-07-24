import Image from "next/image";

export default function DashboardEmpty() {
  return (
    <div className="container flex w-full flex-col items-center justify-center rounded bg-secondary p-4">
      <Image
        src="/assets/crystal-ball.png"
        alt="No Projects"
        width={200}
        height={200}
      />
      <h4 className="text-lg text-secondary-foreground">Create new project</h4>
    </div>
  );
}
