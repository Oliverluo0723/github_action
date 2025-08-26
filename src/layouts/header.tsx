import { ModeToggle } from "@/components/mode-toggle.tsx";

function header() {
    return (
        <>
            <header className="flex-between">
                <h1>Logo</h1>
                <ModeToggle />
            </header>
        </>
    );
}

export default header;
