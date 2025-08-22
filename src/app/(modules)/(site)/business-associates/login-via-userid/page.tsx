import BusinessAssociatesLoginFormViaUserId from "@/app/shared/components/site/BusinessAssociatesLoginFormViaUserId";
import Hero from "@/app/shared/components/site/ui/hero/Hero";

const LoginViaUseridPage = () => {
  return (
    <>
      <Hero title="Passcode" />
      <BusinessAssociatesLoginFormViaUserId />
    </>
  );
};

export default LoginViaUseridPage;
