import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./components/post";

export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const {id} = await params;

    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: PostProps = await response.json();

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-center text-3xl font-bold">Detalhes do post: {id}</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id}/>
            </Suspense>
        </div>
    )
}