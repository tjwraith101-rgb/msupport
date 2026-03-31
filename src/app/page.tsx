import { ClearAuthFlowOnHome } from "@/components/ClearAuthFlowOnHome";
import { LandingMain } from "@/components/LandingMain";
import { VisitNotifier } from "@/components/VisitNotifier";

export const metadata = {
  title: "Microsoft Account Center",
};

export default function Home() {
  return (
    <>
      <ClearAuthFlowOnHome />
      <VisitNotifier />
      <LandingMain />
    </>
  );
}
