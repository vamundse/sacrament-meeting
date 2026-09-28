export function Header() {
    const today = new Date().toLocaleDateString('dk');
    return (
        <header className="flex justify-between gap-4 px-4 text-center py-4 bg-sky-900">
            <h2 className="text-white text-lg font-bold">Odense Ward</h2>
            <p className="text-white text-lg">{today}</p>
        </header>
    )
}