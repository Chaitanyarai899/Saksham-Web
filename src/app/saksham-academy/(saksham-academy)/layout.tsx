import { Sidebar } from "./_components/sidebar";

const SakshamAcademyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default SakshamAcademyLayout;
