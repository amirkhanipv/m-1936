
import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">آتلیه عکاسی درسا</h4>
            <p className="text-muted-foreground mb-4">
              ثبت لحظات خاص زندگی شما با بالاترین کیفیت و خلاقیت. ما به خلق تصاویری می‌پردازیم که بازتاب دهنده احساسات و لحظات ناب زندگی شما هستند.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/dorsa_._.pv" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">خدمات ما</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/gallery" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link 
                  to="/booking" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  رزرو نوبت
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 ml-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  به زودی...
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 ml-2 text-primary" />
                <span className="text-muted-foreground">09904279686</span>
              </li>
              <li className="flex items-center">
                <Instagram className="w-5 h-5 ml-2 text-primary" />
                <span className="text-muted-foreground">dorsa_._.pv@</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} آتلیه عکاسی درسا. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
