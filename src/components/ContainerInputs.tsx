import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

interface ContainerInputsProps {
    onOptionChange: any
    onInputChange: any
}


export default function ContainerInputs(props: ContainerInputsProps) {
    const [selectedOption, setSelectedOption] = useState('');
    const [valueInput, setValueInput] = useState('')

    function handleInput(e: any) {
        const inputValue = e.target.value
        setValueInput(inputValue)
        if (typeof props.onInputChange === 'function') {
            props.onInputChange(inputValue);
        }
    }

    function handleOptionSelect(e: any) {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        if (typeof props.onOptionChange === 'function') {
            props.onOptionChange(selectedValue);
        }
    }
    return (
        <div className="flex flex-col justify-between gap-10 p-6 mb-8
        sm:flex-row font-semibold">
            <div className="relative ">
                <label htmlFor="search">
                    <IconSearch className="absolute top-[26%] left-8 text-zinc-400" />
                </label>
                <input
                    onChange={handleInput}
                    value={valueInput}
                    autoComplete="off"
                    id="search"
                    type="text"
                    className="p-4 custom-shadow w-full rounded-lg pl-16
                    sm:w-[40vw]  mode-dark"
                    placeholder="Search for a country..." />
            </div>
            <select name="region" id="region" className="
             w-fit custom-shadow custom-select mode-dark"
                value={selectedOption}
                onChange={handleOptionSelect}>
                <option value="">Filter by Region</option>
                <option value="africa" className="">Africa</option>
                <option value="america" className="">America</option>
                <option value="asia" className="">Asia</option>
                <option value="europe" className="">Europe</option>
                <option value="oceania" className="">Oceania</option>
            </select>
        </div>
    )
}