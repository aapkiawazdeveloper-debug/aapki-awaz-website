import ReporterLoginFormViaUserId from "@/app/shared/components/site/ReporterLoginFormViaUserId";
import Hero from "@/app/shared/components/site/ui/hero/Hero";

const LoginViaUseridPage = () => {
  return (
    <>
      <Hero title="Passcode" />
      <ReporterLoginFormViaUserId />
    </>
  );
};

export default LoginViaUseridPage;
