import PageLayout from "@/components/layout/PageLayout";
import Home from "./Home";
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Kanishka Software - Simplifying Business Operations with Smart Software Solutions"
        description="Transform your business with innovative technology solutions. We provide IT & Business Services including software development, mobile apps, cloud solutions, and IT consulting. 11+ years experience, 200+ projects delivered."
        keywords="software development, IT consulting, mobile app development, cloud solutions, business operations, technology solutions, digital transformation, custom software, web development, software consulting, business automation, enterprise solutions, cafeteria management, attendance management, asset management, room management, visitor management"
        url="/"
        image="https://kanishkasoftware.com/images/kanishka-software-og.png"
        type="website"
      />
      <PageLayout>
        <Home />
      </PageLayout>
    </div>
  );
};

export default Index;
