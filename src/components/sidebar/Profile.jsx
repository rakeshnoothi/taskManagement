//Icon imports.
import { BellIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

const Profile = () => {
    return (
        <section className="flex justify-between items-center">
            <div className="flex items-center gap-2 hover:cursor-pointer">
                <div className="w-10 aspect-square overflow-hidden rounded-full bg-yellow-500">
                    <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="profile=image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="font-bold uppercase text-blue-900">
                    Rakesh Noothi
                </span>
            </div>
            <div className="flex gap-2 ">
                <BellIcon className="icon-dimenstions hover:cursor-pointer" />
                <ChevronDoubleLeftIcon className="icon-dimenstions hover:cursor-pointer" />
            </div>
        </section>
    );
};
export default Profile;
