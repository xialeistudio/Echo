import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import { get, set, SETTING_KEYS } from "@/lib/setting";

export function Settings() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<string>("zh-CN");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const savedLanguage = await get(SETTING_KEYS.LANGUAGE);

    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  };

  const handleThemeChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
  };

  const handleLanguageChange = async (value: string) => {
    setLanguage(value);
    await set(SETTING_KEYS.LANGUAGE, value);
    i18n.changeLanguage(value);
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-muted-foreground">
            {t("settings.appearance")}
          </h4>
          <div className="space-y-0">
            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <div className="text-base font-medium">
                  {t("settings.theme")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("settings.themeDescription")}
                </div>
              </div>
              <Select value={theme} onValueChange={handleThemeChange}>
                <SelectTrigger className="w-auto min-w-[100px]">
                  <SelectValue placeholder={t("settings.selectTheme")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    {t("settings.themeLight")}
                  </SelectItem>
                  <SelectItem value="dark">
                    {t("settings.themeDark")}
                  </SelectItem>
                  <SelectItem value="system">
                    {t("settings.themeSystem")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <div className="text-base font-medium">
                  {t("settings.language")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("settings.languageDescription")}
                </div>
              </div>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-auto min-w-[100px]">
                  <SelectValue placeholder={t("settings.selectLanguage")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="zh-CN">简体中文</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
