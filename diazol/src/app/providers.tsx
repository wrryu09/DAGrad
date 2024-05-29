import { DataProvider } from "@/utils/DataContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DataProvider>{children}</DataProvider>;
}
