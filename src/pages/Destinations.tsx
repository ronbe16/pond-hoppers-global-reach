import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Destinations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] flex items-center justify-center">
        <div className="text-center py-20">
          <h1 className="heading-lg text-navy mb-4">Country Guides</h1>
          <p className="font-sans text-lg text-muted-foreground">Coming Soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
