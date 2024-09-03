import { Inter } from "next/font/google";
import DashboardLayout from "@/components/layout/dashboardLayout";
import GalleryCard from "@/components/minors/galleryCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashboardLayout>
        <GalleryCard/>
      </DashboardLayout>
    </main>
  );
}
