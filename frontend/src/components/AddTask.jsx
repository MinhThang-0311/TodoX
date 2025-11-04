import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export default function AddTask() {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg h-auto">
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Thêm công việc mới..."
          className="bg-gray-50 border-2 border-violet-100"
        />
        <Textarea
          placeholder="Mô tả công việc mới"
          className=" h-auto bg-gray-50 border-2  "
        />
        <Button variant="gradiant" size="xl" className="px-6">
          <Plus/>
          Thêm công việc
        </Button>
      </div>
    </Card>
  );
}
