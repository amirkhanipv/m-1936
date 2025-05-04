
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Image, Calendar, Users, Heart } from "lucide-react";

// نمونه کارهای آتلیه با تصاویر جدید
const portfolioItems = [
  {
    id: "1",
    title: "عکاسی پرتره",
    description: "ثبت لحظات خاص شما با بهترین کیفیت",
    image: "/lovable-uploads/05e034de-d613-49f3-bde4-d00c47432730.png"
  },
  {
    id: "2",
    title: "عکاسی مدلینگ",
    description: "تصاویر حرفه‌ای برای پورتفولیوی شخصی",
    image: "/lovable-uploads/947c92d8-1e94-495e-b89b-20c881d88270.png"
  },
  {
    id: "3",
    title: "عکاسی فشن",
    description: "ثبت استایل منحصر به فرد شما",
    image: "/lovable-uploads/9a076c92-8637-4397-a23d-d6e6c14b4af7.png"
  }
];

// بسته‌های قیمت
const pricingPackages = [
  {
    id: "1",
    title: "آتلیه داخلی",
    description: "عکاسی در فضای داخلی آتلیه با امکانات کامل",
    price: "از ۸۰۰,۰۰۰ تومان",
    features: ["تحویل ۱۰ عکس ویرایش شده", "امکان تعویض لباس", "چاپ یک عکس رایگان", "۴۵ دقیقه زمان عکسبرداری"],
    image: "/lovable-uploads/362d2dec-ab2b-4522-bdf5-8838b76019d2.png"
  },
  {
    id: "2",
    title: "فضای باز",
    description: "عکاسی در لوکیشن‌های طبیعی و فضای باز",
    price: "از ۱,۲۰۰,۰۰۰ تومان",
    features: ["تحویل ۱۵ عکس ویرایش شده", "انتخاب لوکیشن", "امکان تعویض لباس", "۶۰ دقیقه زمان عکسبرداری"],
    image: "/lovable-uploads/d85caa27-2450-47db-a1d6-33bdecce8572.png"
  },
  {
    id: "3",
    title: "مراسم و جشن",
    description: "عکاسی از مراسم‌ها، جشن‌ها و رویدادهای خاص",
    price: "از ۲,۰۰۰,۰۰۰ تومان",
    features: ["تحویل بیش از ۵۰ عکس", "فیلمبرداری HD", "آلبوم دیجیتال", "تا ۳ ساعت زمان عکسبرداری"],
    image: "/lovable-uploads/10716909-b596-4729-8b06-a40587b4bf9e.png"
  }
];

export default function Index() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* قسمت اصلی صفحه - بکگراند عوض شده */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/91c752b5-081f-4202-b929-c7033183487c.png')",
              backgroundPosition: "center 50%"
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          
          {/* Content */}
          <div className="container relative z-10 text-center md:text-right">
            <div className="max-w-2xl mr-auto md:mr-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                ثبت لحظات ناب زندگی شما
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-xl mr-auto md:mr-0">
                خاطرات شما ارزشمند هستند. آتلیه ما با بهترین امکانات و عکاسان حرفه‌ای آماده ثبت لحظات خاص زندگی شماست.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild size="lg" variant="heroSolid" className="min-w-[200px] rounded-full">
                  <Link to="/booking">رزرو نوبت</Link>
                </Button>
                <Button asChild variant="hero" size="lg" className="min-w-[200px] rounded-full">
                  <Link to="/gallery">مشاهده نمونه کارها</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Animated wave */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
        
        {/* بخش درباره اهمیت عکس و خاطره */}
        <section className="section bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium tracking-wider">
                  هنر ثبت لحظات
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  چرا عکس‌ها مهم هستند؟
                </h2>
                <p className="text-muted-foreground mb-6">
                  عکس‌ها پنجره‌ای به گذشته هستند. هر عکس داستانی را روایت می‌کند که شاید با گذر زمان از خاطر رفته باشد. لبخندها، نگاه‌ها، احساسات و لحظات خاص زندگی در قاب عکس‌ها جاودانه می‌شوند.
                </p>
                <p className="text-muted-foreground mb-8">
                  در آتلیه ما، ما به خلق تصاویری می‌پردازیم که نه تنها زیبا هستند، بلکه روح و احساس لحظات شما را نیز به تصویر می‌کشند. با تجهیزات مدرن و تیم حرفه‌ای، آماده‌ایم تا بهترین خاطرات شما را ثبت کنیم.
                </p>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/9a076c92-8637-4397-a23d-d6e6c14b4af7.png"
                    alt="ثبت خاطرات زندگی" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/05e034de-d613-49f3-bde4-d00c47432730.png"
                    alt="عکس پرتره" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/d85caa27-2450-47db-a1d6-33bdecce8572.png"
                    alt="عکس هنری" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* بخش نمونه کارها */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm text-primary font-medium tracking-wider">
                نمونه کارها
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                گالری آثار ما
              </h2>
              <p className="text-muted-foreground mb-8">
                بخشی از نمونه کارهای ما را مشاهده کنید. هر عکس نشانگر تجربه و تخصص ما در ثبت لحظات خاص است.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-white/80 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/gallery">
                  مشاهده همه نمونه کارها <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* بخش رزرو */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm text-primary font-medium tracking-wider">
                رزرو نوبت
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                با ما همراه شوید
              </h2>
              <p className="text-muted-foreground mb-8">
                برای رزرو نوبت عکاسی و یا کسب اطلاعات بیشتر، فرم زیر را تکمیل کنید.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* بخش بسته های قیمت */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm text-primary font-medium tracking-wider">
                تعرفه‌های ما
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                بسته‌های خدمات آتلیه
              </h2>
              <p className="text-muted-foreground mb-8">
                خدمات متنوع برای نیازهای مختلف شما با قیمت‌های مناسب و کیفیت عالی
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <div 
                  key={pkg.id} 
                  className="glass-card overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-xl font-bold text-primary mb-4">{pkg.price}</div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center ml-3">
                            <ArrowRight className="h-3 w-3" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full btn-primary">
                      <Link to="/booking">انتخاب این بسته</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* بخش نظرات مشتریان */}
        <TestimonialsSection />
        
        {/* بخش تماس */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                با ما در ارتباط باشید
              </h2>
              <p className="text-muted-foreground mb-8">
                برای رزرو وقت، مشاوره و یا هرگونه سؤال با ما تماس بگیرید
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <a href="tel:09904279686" className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center ml-3">
                    <Camera className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">تماس با ما</div>
                    <div className="font-bold">09904279686</div>
                  </div>
                </a>
                <a href="https://instagram.com/dorsa_._.pv" target="_blank" rel="noopener" className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center ml-3">
                    <Image className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">اینستاگرام</div>
                    <div className="font-bold">dorsa_._.pv@</div>
                  </div>
                </a>
              </div>
              <p className="text-muted-foreground">
                آدرس: به زودی...
              </p>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
