
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // This effect is to ensure hydration doesn't cause issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger 
          className="w-[80px] h-10 border-none bg-transparent focus:ring-0" 
          aria-label="انتخاب زبان"
        >
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <SelectValue placeholder="انتخاب زبان" />
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[160px]">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
