"use client"

import { ChangeEvent, useRef, useState } from "react"
import { debounce } from "lodash"
import { changeName } from "../_actions/change-name"
import { toast } from "sonner"


export function Description({ initialDescription }: { initialDescription: string }) {

    const [Description, setDescription] = useState(initialDescription)
    const [originalDescription] = useState(initialDescription)

    const debaucedSaveName = useRef(
        debounce(async (currentDescription: string) => {
            if (currentDescription.trim() === "") {
                setDescription(originalDescription)
                return
            }

            if (currentDescription !== Description) {
                try {
                    // const response = await changeName({ name: currentDescription })

                    // if (response.error) {
                    //     toast.error(response.error)
                    //     setDescription(currentDescription)
                    //     return
                    // }


                    toast.success("Nome alterado com sucesso")

                } catch (err) {
                    console.log(err)
                    setDescription(currentDescription)
                }
            }
        }, 1000)
    ).current

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value
        setDescription(value)

        debaucedSaveName(value)

    }

    return (
        <textarea
            className="text-base bg-gray-50 border border-gray-100 rounded-md outline-none p-2 w-full max-w-2xl my-3 h-40 resize-none"
            value={Description}
            onChange={handleChange}
        />
    )
}