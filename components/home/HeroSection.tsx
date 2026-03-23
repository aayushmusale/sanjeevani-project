import Button from '../ui/Button';
import Container from '../ui/Container';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Gateway to Global Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Study MBBS & Other Courses Abroad at Top NMC Approved Universities
          </p>
          <ul className="text-lg mb-8 space-y-2 text-blue-50">
            <li>✓ Low Tuition Fees Starting from ₹15 Lakhs</li>
            <li>✓ No Entrance Exam Required</li>
            <li>✓ 6-Year Medical Programs</li>
            <li>✓ Worldwide Recognition</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Apply Now - Free Counseling
            </Button>
            <Button href="/countries" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              Explore Countries
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
