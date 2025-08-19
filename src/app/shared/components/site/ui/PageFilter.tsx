import Button from "./button/Button";
import CustomInput from "./form/CustomInput";

const PageFilter = () => {
    return (
        <div className="mb-4">
            <form className="flex items-center gap-4">
                <CustomInput />
                <Button />
            </form>
        </div>
    )
}

export default PageFilter;