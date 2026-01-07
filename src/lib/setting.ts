import { Store } from "@tauri-apps/plugin-store";

export const SETTING_KEYS = {
  THEME: "theme",
  LANGUAGE: "language",
} as const;

let store: Store | null = null;

const defaults = {
  THEME: "light",
  LANGUAGE: "zh-CN",
};

async function getStore(): Promise<Store> {
  if (!store) {
    store = await Store.load("settings.json", { autoSave: true, defaults });
  }
  return store;
}

export async function get(key: string): Promise<string | null> {
  const s = await getStore();
  const value = await s.get<string>(key);
  return value ?? null;
}

export async function set(key: string, value: string): Promise<void> {
  const s = await getStore();
  await s.set(key, value);
}
