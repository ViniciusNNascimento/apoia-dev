"use client"

import { Button } from "@/components/ui/button";

export function UrlPreview() {

    async function submitAction(formData: FormData) {
        const username = formData.get("username") as string

        if (username === "") {
            return

        }

        console.log(username)
    }


    return (
        <div className="flex items-center flex-1 p-2 text-gray-100">
            <form
                action={submitAction}
                className="flex flex-1 flex-col gap-4 items-start md:items-center md:flex-row">
                <div className="flex items-center justify-center w-full">
                    <p
                        className="w-fit h-9 rounded-md flex items-center font-semibold text-white"
                    >
                        {process.env.NEXT_PUBLIC_HOST_URL}/creator/
                    </p>
                    <input type="text"
                        name="username"
                        placeholder="digite seu username..."
                        className="flex-1 outline-none border h-9 px-1 border-gray-300 text-black bg-gray-50 rounded-md"
                    />
                </div>
                <Button type="submit"
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer h-9 w-full md:w-fit text-white px-4 rounded-md">
                    Salvar
                </Button>
            </form>
        </div>
    )
}