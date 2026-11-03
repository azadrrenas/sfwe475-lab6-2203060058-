
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Task Board",
  description: "Welcome to your Task Board application.",
};

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Task Board</h1>
      <p>Manage your tasks easily with our Task Board application.</p>
      <Link href="/tasks">View All Tasks</Link>
    </div>
  );
}
