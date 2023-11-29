import { useContext } from "react";
import { ProjectContext } from "../context/ProjectInfoProvider";

const useProjectInfo = () => useContext(ProjectContext);
export default useProjectInfo;
