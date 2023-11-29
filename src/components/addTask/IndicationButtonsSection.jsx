import IndicationButton from "./IndicationButton";

const IndicationButtonsSection = ({ taskInfo }) => {
    return (
        <section className="flex gap-2 hover:cursor-pointer">
            <IndicationButton
                displayName="Status"
                dropDownValues={["Yet To Start", "In Progress", "Completed"]}
                taskInfo={taskInfo}
            />
            <IndicationButton
                displayName="Priority"
                dropDownValues={["Low", "Medium", "High"]}
                taskInfo={taskInfo}
            />
        </section>
    );
};
export default IndicationButtonsSection;
