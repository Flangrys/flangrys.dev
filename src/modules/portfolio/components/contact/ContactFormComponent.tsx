import {type FormEvent, useMemo, useState} from "react";
import {AnimatePresence, motion, useReducedMotion} from "motion/react";
import SvgArrowLeftIcon from "/src/assets/arrow-left-icon.svg?react";
import SvgArrowPathIcon from "/src/assets/arrow-path-icon.svg?react";
import SvgArrowRightIcon from "/src/assets/arrow-right-icon.svg?react";
import SvgCheckIcon from "/src/assets/check-icon.svg?react";
import {FormStepButtonComponent} from "@modules/portfolio/components/contact/FormStepButtonComponent.tsx";
import {FormPhaseTitleComponent} from "@modules/portfolio/components/contact/FormPhaseTitleComponent.tsx";
import {FormChoicePhaseComponent} from "@modules/portfolio/components/contact/FormChoicePhaseComponent.tsx";
import {VITE_CLOUDFLARE_WORKER_URL, VITE_TURNSTILE_SITE_KEY} from "@libs/environments.const.ts";
import {Turnstile} from "@marsidev/react-turnstile";
import {useMutation} from "@tanstack/react-query";

type Question = number;

type Answers = {
    work_position_id: number; work_arrangement_id: number; work_summary: string; email: string;
}

const WORK_ROLE_OPTIONS = [
    {id: 1, label: "Full Stack Developer"},
    {id: 2, label: "Frontend Developer"},
    {id: 3, label: "Backend Developer"},
    {id: 4, label: "Platform Engineer"},
    {id: 5, label: "FDE"},
    {id: 6, label: "SRE"},
    {id: 0, label: "Otro"}
] as const;

const WORK_MODEL_OPTIONS = [
    {id: 1, label: "Remoto"},
    {id: 2, label: "Híbrido"},
    {id: 3, label: "On-Site"}
] as const;

export function ContactFormComponent() {
    const shouldReduceMotion = useReducedMotion();
    const [currentFormPhase, setCurrentFormPhase] = useState<Question>(0);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [formAnswers, setFormAnswers] = useState<Partial<Answers>>({});

    const {isPending, mutate} = useMutation({
        mutationFn: async function(answer: Answers){
            const res = await fetch(VITE_CLOUDFLARE_WORKER_URL + "/contact/contact-for-work", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Idempotency-Key": crypto.randomUUID(),
                    "X-Turnstile-Token": turnstileToken!
                },
                body: JSON.stringify(answer),
            });
            return await res.json();
        },

        onSuccess: (data) => {
            if (!data.success) {
                alert("Tu respuesta no pudo ser procesada correctamente.");
                return;
            }

            setCurrentFormPhase(5);
            return;
        },

        onError: () => alert("Ocurrion una excepcion inesperada al procesar tu respuesta."),
    })

    const duration = {duration: shouldReduceMotion ? 0.0 : 0.3};

    const variants = {
        enter: {x: shouldReduceMotion ? 0 : 20, opacity: 0},
        center: {x: 0, opacity: 1},
        exit: {x: shouldReduceMotion ? 0 : -20, opacity: 0},
    };

    const selectedRoleLabel = useMemo(() => {
        return WORK_ROLE_OPTIONS.find((opt) => opt.id === formAnswers.work_position_id)?.label;
    }, [formAnswers.work_position_id]);

    const selectedModelLabel = useMemo(() => {
        return WORK_MODEL_OPTIONS.find((opt) => opt.id === formAnswers.work_arrangement_id)?.label;
    }, [formAnswers.work_arrangement_id]);

    const isCurrentStepValid = useMemo(() => {
        switch (currentFormPhase) {
            case 0:
                return formAnswers.work_position_id !== undefined;

            case 1:
                return formAnswers.work_arrangement_id !== undefined;

            case 2:
                return formAnswers.work_summary !== undefined && Boolean(formAnswers.work_summary.trim());

            case 3:
                return formAnswers.email !== undefined && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formAnswers.email.trim());

            case 4:
                return turnstileToken !== null;

            default:
                return true;
        }
    }, [currentFormPhase, formAnswers, turnstileToken]);

    const advanceDisabled = !isCurrentStepValid || isPending;
    const undoDisabled = currentFormPhase === 0 || currentFormPhase === 5 || isPending;

    function updateAnswer<K extends keyof Answers>(key: K, value: Answers[K]) {
        setFormAnswers((prev) => ({...prev, [key]: value}));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (currentFormPhase < 4) {
            setCurrentFormPhase((prev) => prev + 1);
            return;
        }

        if (!turnstileToken) return;

        mutate({
            work_position_id: formAnswers.work_position_id!,
            work_arrangement_id: formAnswers.work_arrangement_id!,
            work_summary: formAnswers.work_summary!,
            email: formAnswers.email!,
        });
    }

    return (<div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
        <div>
            <p className="eyebrow uppercase tracking-[0.24em] text-primary">Contacto</p>
            <h3 className="text-foreground">¿Deseas trabajar juntos?</h3>
            <p className="eyebrows text-muted-foreground">
                Respondé unas preguntas rápidas y te contacto por email en menos de 48 h.
            </p>
        </div>

        <div
            className="min-h-80 rounded-2xl p-8"
            style={{
                border: "1px solid color-mix(in oklab, var(--primary) 18%, transparent)",
                background: "color-mix(in oklab, var(--primary) 4%, var(--background))",
            }}
        >
            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    {currentFormPhase === 0 && (
                        <motion.div
                            key="step-role"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <FormPhaseTitleComponent
                                currentPhase={currentFormPhase}
                                totalPhases={4}
                                phaseLabel="¿Qué tipo de rol estás evaluando?"
                            />

                            <div className="flex flex-wrap gap-2 mt-6">
                                {WORK_ROLE_OPTIONS.map((option) => (<FormChoicePhaseComponent
                                    key={option.id}
                                    selected={formAnswers.work_position_id === option.id}
                                    onClick={() => updateAnswer("work_position_id", option.id)}
                                >
                                    {option.label}
                                </FormChoicePhaseComponent>))}
                            </div>
                        </motion.div>
                    )}

                    {currentFormPhase === 1 && (
                        <motion.div
                            key="step-modality"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <FormPhaseTitleComponent
                                currentPhase={currentFormPhase}
                                totalPhases={4}
                                phaseLabel="¿Cuál es la modalidad de trabajo?"
                            />

                            <div className="flex flex-wrap gap-2 mt-6">
                                {WORK_MODEL_OPTIONS.map((option) => (<FormChoicePhaseComponent
                                    key={option.id}
                                    selected={formAnswers.work_arrangement_id === option.id}
                                    onClick={() => updateAnswer("work_arrangement_id", option.id)}
                                >
                                    {option.label}
                                </FormChoicePhaseComponent>))}
                            </div>
                        </motion.div>
                    )}

                    {currentFormPhase === 2 && (
                        <motion.div
                            key="step-description"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <FormPhaseTitleComponent
                                currentPhase={currentFormPhase}
                                totalPhases={4}
                                phaseLabel="Hablame brevemente sobre el puesto"
                            />

                            <textarea
                                rows={4}
                                maxLength={1000}
                                placeholder="El problema, el stack, el equipo..."
                                className="mt-6 w-full resize-none rounded-lg bg-transparent p-3 text-foreground outline-none focus:ring-2"
                                onChange={(e) => updateAnswer("work_summary", e.target.value)}
                                value={formAnswers.work_summary ?? ""}
                                style={{border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)"}}
                            />
                        </motion.div>
                    )}

                    {currentFormPhase === 3 && (
                        <motion.div
                            key="step-email"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <FormPhaseTitleComponent
                                currentPhase={currentFormPhase}
                                totalPhases={4}
                                phaseLabel="¿A qué email te puedo responder?"
                            />

                            <input
                                type="email"
                                placeholder="tucorreo@ejemplo.com"
                                className="mt-6 w-full rounded-lg bg-transparent p-3 text-foreground outline-none focus:ring-2"
                                onChange={(e) => updateAnswer("email", e.target.value)}
                                value={formAnswers.email ?? ""}
                                style={{border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)"}}
                            />
                        </motion.div>
                    )}

                    {currentFormPhase === 4 && (
                        <motion.div
                            key="step-summary"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <FormPhaseTitleComponent
                                currentPhase={currentFormPhase}
                                totalPhases={4}
                                phaseLabel="Resumen de la consulta"
                            />

                            <dl className="mt-6 mb-8 space-y-4">
                                <dt className="text-muted-foreground text-sm">Rol evaluado</dt>
                                <dd className="mt-1 text-foreground font-medium">{selectedRoleLabel}</dd>

                                <dt className="text-muted-foreground text-sm">Modalidad de trabajo</dt>
                                <dd className="mt-1 text-foreground font-medium">{selectedModelLabel}</dd>

                                <dt className="text-muted-foreground text-sm">Descripción del puesto</dt>
                                <dd className="mt-1 text-foreground font-medium">{formAnswers.work_summary}</dd>

                                <dt className="text-muted-foreground text-sm">Email de contacto</dt>
                                <dd className="mt-1 text-foreground font-medium">{formAnswers.email}</dd>
                            </dl>

                            <Turnstile
                                siteKey={VITE_TURNSTILE_SITE_KEY}
                                onSuccess={(token) => setTurnstileToken(token)}
                                onExpire={() => setTurnstileToken(null)}
                                onError={() => setTurnstileToken(null)}
                            />
                        </motion.div>
                    )}

                    {currentFormPhase === 5 && (
                        <motion.div
                            key="step-complete"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={duration}
                        >
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full text-lg"
                                style={{
                                    background: "color-mix(in oklab, var(--primary) 18%, transparent)",
                                    color: "var(--primary)",
                                }}
                            >
                                <SvgCheckIcon/>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-foreground">
                                ¡Gracias! Tu respuesta fue recibida.
                            </h3>
                            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                                Te contacto pronto a través de los canales que usaste para
                                llegar acá.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                    <FormStepButtonComponent
                        disabled={undoDisabled}
                        onClick={() => setCurrentFormPhase((prev) => prev - 1)}
                    >
                          <span
                              className="grid place-items-center transition-transform group-hover:-translate-x-1 group-disabled:translate-none"
                          >
                            <SvgArrowLeftIcon/>
                          </span>
                        <span>Atrás</span>
                    </FormStepButtonComponent>

                    {currentFormPhase < 4 && (
                        <FormStepButtonComponent
                            disabled={advanceDisabled}
                            onClick={() => setCurrentFormPhase((prev) => prev + 1)}
                        >
                            <span>Siguiente</span>
                            <span
                                className="grid place-items-center transition-transform group-hover:translate-x-1 group-disabled:translate-none"
                            >
                                <SvgArrowRightIcon/>
                            </span>
                        </FormStepButtonComponent>
                    )}

                    {currentFormPhase == 4 && (
                        <FormStepButtonComponent
                            disabled={advanceDisabled}
                            busy={isPending}
                        >
                            <span>Enviar consulta</span>
                            <span
                                className="grid place-items-center transition-transform group-aria-busy:animate-spin group-hover:translate-x-1 group-disabled:translate-none"
                            >
                                {isPending ? <SvgArrowPathIcon/> : <SvgArrowRightIcon/>}
                            </span>
                        </FormStepButtonComponent>
                    )}
                </div>
            </form>
        </div>
    </div>)
}
