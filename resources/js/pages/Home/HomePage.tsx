import Footer from '@/components/Global/Footer';
import Header from '@/components/Global/Header';
import LoginModal from '@/components/Global/LoginModal';
import MobileMenu from '@/components/Global/MobileMenu';
import PreloaderCursor from '@/components/Global/PreloaderCursor';
import RegisterModal from '@/components/Global/RegisterModal';
import SidebarCart from '@/components/Global/SidebarCart';
import Topbar from '@/components/Global/Topbar';
import About from '@/components/Home/About';
import BlogAndCallToAction from '@/components/Home/Blog';
import Courses from '@/components/Home/Courses';
import Hero from '@/components/Home/Hero';
import WhyChoose from '@/components/Home/WhyChoose';
export default function HomePage() {
    return (
        <>
            <div className="element-wrapper">
                <PreloaderCursor />
                <MobileMenu />
                <Topbar />
                <Header />
                {/* Main area start */}
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <Hero />
                            <About />
                            <Courses />
                            <WhyChoose />
                            <BlogAndCallToAction />
                        </main>
                    </div>
                </div>
                {/* Main area end */}
                <Footer />
                <LoginModal />
                <RegisterModal />
                <SidebarCart />
            </div>
        </>
    );
}
