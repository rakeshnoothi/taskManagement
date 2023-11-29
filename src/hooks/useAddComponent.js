import { useContext } from "react";
import { AddComponent } from "../context/AddComponentProvider";

const useAddComponent = () => useContext(AddComponent);
export default useAddComponent;
