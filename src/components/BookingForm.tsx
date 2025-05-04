
import { useState } from "react";
import { Check, CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("16:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState("آتلیه داخلی");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the booking data to a server
    console.log("Booking submitted:", { date, time, name, phone, sessionType });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setDate(undefined);
      setTime("16:00");
      setName("");
      setPhone("");
      setSessionType("آتلیه داخلی");
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">رزرو نوبت</h3>
      
      <div className="space-y-4">
        {/* تاریخ */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            تاریخ
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-right font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="ml-2 h-4 w-4" />
                {date ? format(date, "yyyy/MM/dd") : <span>تاریخ را انتخاب کنید</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* زمان */}
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-medium">
            ساعت
          </label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger id="time" className="w-full text-right">
              <SelectValue placeholder="انتخاب ساعت" />
            </SelectTrigger>
            <SelectContent>
              {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* نوع جلسه */}
        <div className="space-y-2">
          <label htmlFor="session-type" className="block text-sm font-medium">
            نوع جلسه عکاسی
          </label>
          <Select value={sessionType} onValueChange={setSessionType}>
            <SelectTrigger id="session-type" className="w-full text-right">
              <SelectValue placeholder="انتخاب نوع جلسه" />
            </SelectTrigger>
            <SelectContent>
              {["آتلیه داخلی", "عکاسی فضای باز", "عکاسی مراسم", "عکاسی محصول", "عکاسی خانوادگی"].map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* نام */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md text-right"
            placeholder="نام خود را وارد کنید"
            required
          />
        </div>

        {/* شماره تماس */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            شماره تماس
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md text-right"
            placeholder="شماره تماس خود را وارد کنید"
            required
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="ml-2 h-4 w-4" />
            درخواست شما ثبت شد
          </>
        ) : (
          <>
            <Users className="ml-2 h-4 w-4" />
            ثبت درخواست رزرو
          </>
        )}
      </Button>
    </form>
  );
}
