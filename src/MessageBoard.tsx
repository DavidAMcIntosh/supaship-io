import { Link, Outlet } from "react-router-dom";
export default function MessageBoard() {
  return (
    <>
      <div className="flex flex-col place-content-center w-full">
        <Link to="/1">
          <h2 className="text-5xl text-center mb-1">Message Board</h2>
        </Link>
        <Outlet />
      </div>
    </>
  );
}
