"use client"

import { Button } from "@/components/ui/button";
import { createUsername } from "../_actions/create-username";
import { useState } from "react";
import Link from "next/link";
import { Link2 } from "lucide-react";

interface UrlPreviewProps {
    username: string | null
}

export function UrlPreview({ username: slug }: UrlPreviewProps) {

    const [error, setError] = useState<null | string>(null)
    const [username, setUsername] = useState(slug)

    async function submitAction(formData: FormData) {
        const username = formData.get("username") as string

        if (username === "") {
            return

        }

        const response = await createUsername({ username })

        if (response.error) {
            setError(response.error)
        }

        if (response.data) {
            setUsername(response.data)

        }
    }

    if (!!username) {
        return (
            <div className="flex items-center flex-1 p-2 justify-between text-gray-100">
                <div className="flex flex-col items-start md:flex-row md:items-center justify-center gap-2">
                    <h3 className="font-bold text-lg">Sua ULR:</h3>
                    <Link href={`${process.env.NEXT_PUBLIC_HOST_URL}/creator/{username}`}
                        target="_blank"

                        className="w-fit h-9 rounded-md flex items-center font-semibold text-white"
                    >
                        {process.env.NEXT_PUBLIC_HOST_URL}/creator/{username}
                    </Link>
                </div>
                <Link
                    href={`${process.env.NEXT_PUBLIC_HOST_URL}/creator/{username}`}
                    target="_blank"
                    className="bg-blue-500 px-4 py-1 rounded-md hidden md:block"
                >
                    <Link2 className="w-5 h-5 text-white" />

                </Link>
            </div>
        )
    }


    return (
        <div className="w-full">
            <div className="flex items-center flex-1 p-2 text-gray-100">
                <form
                    action={submitAction}
                    className="flex flex-1 flex-col gap-4 items-start md:items-center md:flex-row">
                    <div className="flex items-center justify-center w-full">
                        <p
                            className="w-fit h-9 rounded-md flex items-center font-semibold text-white"
                        >
                            {process.env.NEXT_PUBLIC_HOST_URL}/creator/{username}
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
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}