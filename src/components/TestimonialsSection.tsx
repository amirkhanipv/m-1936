
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
};

// نظرات مشتریان
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "مشتری",
    content: "من برای عکاسی عروسی از خدمات آتلیه درسا استفاده کردم و واقعاً از نتیجه کار راضی بودم. عکس‌ها فوق‌العاده زیبا شدند و تیم حرفه‌ای و خوش‌برخورد بودند. قطعاً به دوستانم پیشنهاد می‌کنم.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "علی رضایی",
    role: "مشتری",
    content: "عکس‌های خانوادگی که از ما گرفته شد فراتر از انتظارم بود. بچه‌ها در طول جلسه عکاسی کاملاً راحت بودند و عکاسان با صبر و حوصله با آن‌ها رفتار کردند. نتیجه کار عالی بود.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "مریم کریمی",
    role: "مشتری",
    content: "من عاشق سبک هنری عکس‌های آتلیه درسا هستم. برای عکس‌های تجاری شرکتمان از آن‌ها کمک گرفتیم و نتیجه فراتر از انتظار ما بود. قیمت‌ها هم بسیار منصفانه است.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "نیما حسینی",
    role: "مشتری",
    content: "عکس‌های پرتره من در آتلیه درسا گرفته شد و من واقعاً از نتیجه آن راضی هستم. آن‌ها در به تصویر کشیدن شخصیت من در عکس‌ها بسیار موفق عمل کردند.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    rating: 4
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm text-primary font-medium tracking-wider">
            نظرات مشتریان
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            مشتریان ما چه می‌گویند
          </h2>
          <p className="text-muted-foreground">
            ما به کیفیت کار خود افتخار می‌کنیم و رضایت مشتریان اولویت ماست
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials Carousel */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1">
              <div className="glass-card p-8 md:p-10 shadow-lg animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="ml-4">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-4 h-4", 
                            i < testimonials[activeIndex].rating 
                              ? "text-amber-500 fill-amber-500" 
                              : "text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>
              </div>
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === i 
                      ? "bg-primary scale-125" 
                      : "bg-muted hover:bg-primary/50"
                  )}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Testimonials Cards */}
          <div className="md:hidden space-y-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="glass-card p-6 shadow-lg animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <div className="ml-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-3 h-3", 
                            i < testimonial.rating 
                              ? "text-amber-500 fill-amber-500" 
                              : "text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
