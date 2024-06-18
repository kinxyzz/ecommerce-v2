import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="container mx-auto py-4 w-full">{children}</main>;
    </Suspense>
  );
}
