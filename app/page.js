import Banner from '@/components/Banner';
import BigChallenge from '@/components/BigChallenge';
import Footer from '@/components/Footer';
import PlatformSolutions from '@/components/PlatformSolutions';
import Steps from '@/components/Steps';
import WhyInstalanes from '@/components/WhyInstalanes';

export default function Home() {
  return (
    <>
      <Banner />
      <Steps />
      <WhyInstalanes />
      <BigChallenge />
      <PlatformSolutions />
    </>
  );
}
