import Nav from "./Nav";

export default function Layout({children}) {
    return(
        <>
            <Nav></Nav>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}