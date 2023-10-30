import { Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffer,Subscribe,SuperQuality } from "./sections";
import Nav from "./components/nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    {/* PopularProducts */}
    <section className="padding">
      <PopularProducts/>
    </section>
    {/* SuperQuality */}
    <section className="padding">
      <SuperQuality/>
    </section>
    {/* Services */}
    <section className="padding-x py-10">
      <Services/>
    </section>
    {/* SpecialOffers */}
    <section className="padding">
      <SpecialOffer/>
    </section>
    {/* CustomerReviews */}
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    {/* Subscribe */}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    {/* Footer */}
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;