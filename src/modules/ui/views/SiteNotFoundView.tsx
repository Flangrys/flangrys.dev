import {Activity, useState} from "react";
import {ButtonComponent} from "../components/buttons/ButtonComponent.tsx";

export default function SiteNotFoundView() {
    const [isLucky, setIsLucky] = useState<boolean>(() => {
        const randomProbability = Math.floor(Math.random() * 10) + 1;
        return randomProbability === 1;
    });

    return (
        <main className="py-16">
            <section className="flex place-items-center h-dvh">
                <div className="grid grid-cols-6 grid-rows-[1fr_auto] gap-2.5 h-max">
                    <div className="col-span-4 header-group flex flex-col place-content-center">
                        <h1 className="font-sans">OH NO! • 404 No encontrado</h1>
                        <p className="text-xl">
                            Parece que el sitio que estas buscando no existe o se ha movido. Si el problema persiste
                            intenta
                            los pasos a continuación:
                        </p>

                        <ol className="px-4 list-decimal list-inside">
                            <li>Refrescar el sitio, puede que se haya colgado el sitio.</li>
                            <li>Revisa si la direccion está correctamente escrita, es normal equivocarse de ruta.</li>
                            <li>Si el problema persiste, contactame y explicame el problema en detalle.</li>
                        </ol>
                    </div>

                    <div className="col-span-2 flex place-content-center place-items-center gap-4">
                        <Activity mode={isLucky ? "visible" : "hidden"}>
                            <img
                                src="images/south_park_easter_egg.gif"
                                alt="EASTER_EGG_SOUTH_PARK_SHEESH_GIF"
                                className="object-cover h-80 rounded-xl"
                            />
                        </Activity>
                    </div>
                </div>
            </section>
            <section className="flex place-items-center ">
                <ButtonComponent onClick={() => setIsLucky(!isLucky)}>No tocar</ButtonComponent>
            </section>

        </main>
    )
}
