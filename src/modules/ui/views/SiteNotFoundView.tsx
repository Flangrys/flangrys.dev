import {Activity, useState} from "react";
import {ButtonComponent} from "../components/buttons/ButtonComponent.tsx";
import SouthParkEasterEgg from "/src/assets/south_park_easter_egg.gif";
import SvgToggleDisplayEye from "/src/assets/toggle-eye-display.svg?react";
import SvgToggleHiddenEye from "/src/assets/toggle-eye-hidde.svg?react";


export default function SiteNotFoundView() {
    const [isLucky, setIsLucky] = useState<boolean>(() => {
        const randomProbability = Math.floor(Math.random() * 10) + 1;
        return randomProbability === 1;
    });

    return (
        <main>
            <section className="flex place-items-center py-20 h-dvh">
                <div className="grid grid-cols-6 grid-rows-[1fr_auto] gap-2.5 h-max">

                    <div
                        className={`${isLucky ? "col-span-4" : "col-span-full"} header-group flex flex-col place-content-center`}>
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

                    <Activity mode={isLucky ? "visible" : "hidden"}>
                        <div className="col-span-2 flex place-content-center place-items-center gap-4">
                            <img
                                src={SouthParkEasterEgg}
                                alt="EASTER_EGG_SOUTH_PARK_SHEESH_GIF"
                                className="object-cover h-80 rounded-xl"
                            />
                        </div>
                    </Activity>
                </div>
            </section>
            <section className="flex place-items-center">
                <div className="fixed bottom-16 right-4 z-20">
                    <ButtonComponent onClick={() => setIsLucky(!isLucky)}>
                        {isLucky ? <SvgToggleHiddenEye/> : <SvgToggleDisplayEye/>}
                    </ButtonComponent>
                </div>
            </section>

        </main>
    )
}
