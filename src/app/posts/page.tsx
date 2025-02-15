import Link from "next/link";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export const revalidate = 60;

export default async function PostsPage() {
    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 60
        }
    });
    const data: ResponseProps = await response.json();

    async function handleFetchPosts() {
        'use server'
        const response = await fetch('https://dummyjson.com/posts');
        const data: ResponseProps = await response.json();
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'
        const userId = formData.get('userId')
        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        const data: ResponseProps = await response.json();
    }

    return (
        <div className="flex flex-col gap-6 p-2">
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
                Todos os posts
            </h1>

            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

            <form 
                className="flex gap-2 my-4"
                action={handleSearchUsers}
            >
                <input
                    type="text"
                    placeholder="Id do usuário"
                    className="border border-gray-200 p-2"
                    name="userId"
                />
                <button
                    className="bg-blue-500 text-white p-2"
                    type="submit"
                >
                    Buscar usuário
                </button>
            </form>

            {data.posts.map(post => (
                <div key={post.id} className="flex flex-col gap-2 bg-gray-200 p-4 rounded-md">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                    <Link
                        className="my-2 bg-gray-800 p-2 w-fit rounded-md text-white"
                        href={`/posts/${post.id}`}>
                        Acessar detalhes
                    </Link>
                </div>
            ))}
        </div>
    )
}