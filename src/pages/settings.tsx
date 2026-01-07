import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function Settings() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4">
            外观
          </h4>
          <div className="space-y-0">
            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <div className="text-sm font-medium">主题</div>
                <div className="text-xs text-muted-foreground">
                  选择浅色、深色或跟随系统
                </div>
              </div>
              <Select defaultValue="system">
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
                <div className="text-sm font-medium">语言</div>
                <div className="text-xs text-muted-foreground">
                  选择界面显示语言
                </div>
              </div>
              <Select defaultValue="zh-CN">
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
