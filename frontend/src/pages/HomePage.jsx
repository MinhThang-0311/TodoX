import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilter from "@/components/StatsAndFilter";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Aurora Dream Soft Harmony */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
        />
        {/* Your content goes here */}
        <div className="container pt-8 mx-auto relative z-10">
          <div className="w-full max-w-2xl p-6 mx-auto space-y-6 ">
            {/* Đầu trang */}
            <Header />
            {/* Thêm công việc */}
            <AddTask />
            {/* Thống kê và bộ lọc */}
            <StatsAndFilter />
            {/* Danh sách công việc */}
            <TaskList />
            {/* Phân trang và lọc theo ngày */}
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <TaskListPagination />
              <DateTimeFilter />
            </div>
            {/* chân trang footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
