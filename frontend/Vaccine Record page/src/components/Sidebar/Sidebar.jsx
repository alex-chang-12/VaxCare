import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Removed <Router>
import VaccineRegisterForm from "../VaccineRegisterForm/VaccineRegisterForm";

const SidebarVaccine = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Vaccine Register", src: "add-vaccine", gap: true, path: "/vaccination-center/vaccine-register" },
        { title: "Centre Info", src: "center-info", gap: true, path: "/vaccination-center/center-info" },
        { title: "Schedule Viewer", src: "schedule", gap: true },
        { title: "Notify Parent", src: "notify", gap: true },
        { title: "Chart of Vaccines", src: "chart", gap: true },
    ];

    return (
        <div className="flex ">
            <div
                className={`${open ? "w-72" : "w-20"
                    } bg-gradient-to-b from-[#E6E9FF] to-[#6495ED] h-screen p-5 pt-8 relative duration-300`}
            >
                <img
                    src="./src/assets/sidebar_icons/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#6495ED] border-2 rounded-full ${!open && "rotate-180"
                        }`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/sidebar_icons/admin.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Center Admin
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-[#4F7FE5] transition-colors duration-200 ease-in-out text-black text-sm items-center gap-x-4 
                ${menu.gap ? "mt-9" : "mt-2"}`}
                        >
                            <img src={`./src/assets/sidebar_icons/${menu.src}.png`} alt={menu.title} />
                            <Link to={menu.path || "#"} className={`${!open && "hidden"} origin-left duration-200`}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7 bg-white overflow-auto">
                {/* <Routes>
          <Route path="/vaccine-register" element={<VaccineRegisterForm />} />
          <Route path="/" element={<h1 className="text-2xl font-semibold">Home Page</h1>} />
        </Routes> */}
            </div>
        </div>
    );
};

export default SidebarVaccine;