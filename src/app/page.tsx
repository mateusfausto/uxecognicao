import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PrinciplesGrid from '@/components/PrinciplesGrid';
import PrincipleSection from '@/components/PrincipleSection';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import { principles } from './data';

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />

      <main>
        {/* Hero */}
        <Hero />

        {/* Overview grid */}
        <PrinciplesGrid />

        {/* One section per principle */}
        {principles.map((p, i) => (
          <PrincipleSection key={p.id} principle={p} index={i} />
        ))}
      </main>

      <Footer />
    </>
  );
}
