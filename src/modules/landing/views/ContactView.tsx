import Container from "../../ui/components/layout/Container.tsx";
import SvgChevronDown from "/src/assets/chevron-down.svg?react";

export default function ContactView() {
    return (
        <main className="pt-16">
            <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
                <Container className="col-span-4 header-group border-b border-x-0">
                    <h3>Contacto</h3>
                    <p>Si deseas en ponerte en contacto con migo, sientete libre de hacerlo por estos medios.</p>
                </Container>

                <Container className="col-span-4">
                    <form name="contact" id="contact">
                        <div className="block">
                            <label htmlFor="name">Nombre</label>
                            <div className="field pl-3">
                                <input type="text" name="price" id="price" placeholder="0.00"
                                       className="grow py-1.5 px-2 placeholder:text-gray-500"/>
                                <div className="grid grid-cols-1 focus-within:relative">
                                    <select
                                        id="currency"
                                        name="currency"
                                        aria-label="Currency"
                                        className="col-start-1 row-start-1 bg-gray-800 py-1.5 pr-7 pl-3 text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-indigo-500"
                                    >
                                        <option>USD</option>
                                        <option>CAD</option>
                                        <option>EUR</option>
                                    </select>
                                    <SvgChevronDown
                                        className="col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
            </section>
        </main>
    )
}
