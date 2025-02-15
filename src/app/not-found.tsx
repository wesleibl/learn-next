import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-9">
            <h1 className="text-center font-bold mt-9 text-6xl">Pagina 404 não encontrada</h1>
            <p>Essa página que tentou acessar não existe</p>
            <Link href={'/'} className="bg-zinc-900 py-4 px-2 rounded-md text-white">
                Voltar para home
            </Link>
        </div>
    )
}