import { useTranslation } from "react-i18next";

export function Speaking() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-gray-600">{t("speaking.title")}</p>
    </div>
  );
}