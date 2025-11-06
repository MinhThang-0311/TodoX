import { Filter, ListTodo, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function StatsAndFilter() {
  // Placeholder values for task counts
  const tasksInProgress = 5;
  const completedTasks = 10;

  return (
    <div className="mx-auto max-w-2xl bg-white p-3 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        {/* Task Counts */}
        <div className="flex gap-4">
          <Badge variant="outline">
            <ListTodo className="h-4 w-4 text-blue-500" />
            Đang làm: {tasksInProgress}
          </Badge>

          <Badge variant="outline">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Hoàn thành: {completedTasks}
          </Badge>

          {/* Filter Section */}
          <Button variant="gradiant" size="sm">
            <Filter className="h-4 w-4" />
            Tất cả
          </Button>
          <Button variant="gradiant" size="sm">
            <ListTodo className="h-4 w-4 mr-1" />
            Đang làm
          </Button>
          <Button variant="gradiant" size="sm">
            <CheckCircle className="h-4 w-4 mr-1" />
            Hoàn thành
          </Button>
        </div>
      </div>
    </div>
  );
}
