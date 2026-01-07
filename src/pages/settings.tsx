import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { get, set, SETTING_KEYS } from "@/lib/setting";

export function Settings() {
  const [theme, setTheme] = useState<string>("system");
  const [language, setLanguage] = useState<string>("zh-CN");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const savedTheme = await get(SETTING_KEYS.THEME);
    const savedLanguage = await get(SETTING_KEYS.LANGUAGE);

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  };

  const handleThemeChange = async (value: string) => {
    setTheme(value);
    await set(SETTING_KEYS.THEME, value);
  };

  const handleLanguageChange = async (value: string) => {
    setLanguage(value);
    await set(SETTING_KEYS.LANGUAGE, value);
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-muted-foreground">外观</h4>
          <div className="space-y-0">
            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <div className="text-base font-medium">主题</div>
                <div className="text-sm text-muted-foreground">
                  选择浅色、深色或跟随系统
                </div>
              </div>
              <Select value={theme} onValueChange={handleThemeChange}>
                <SelectTrigger className="w-auto min-w-[100px]">
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">浅色</SelectItem>
                  <SelectItem value="dark">深色</SelectItem>
                  <SelectItem value="system">跟随系统</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <div className="text-base font-medium">语言</div>
                <div className="text-sm text-muted-foreground">
                  选择界面显示语言
                </div>
              </div>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-auto min-w-[100px]">
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="zh-CN">简体中文</SelectItem>
                  <SelectItem value="zh-TW">繁体中文</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
